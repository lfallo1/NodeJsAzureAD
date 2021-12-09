var express = require('express');
var router = express.Router();
var cca = require('../auth')

/* GET private api */
router.get('/signin', function(req, res, next) {
  const authCodeUrlParameters = {
    scopes: ["https://graph.microsoft.com/User.Read"],
    redirectUri: "http://localhost:3000/redirect",
  };

  // get url to sign user in and consent to scopes needed for application
  cca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
    res.redirect(response);
  }).catch((error) => console.log(JSON.stringify(error)));
});

router.get('/redirect', (req, res) => {
  const tokenRequest = {
    code: req.query.code,
    scopes: ["https://graph.microsoft.com/User.Read"],
    redirectUri: "http://localhost:3000/redirect",
  };

  cca.acquireTokenByCode(tokenRequest).then((response) => {
    console.log("\nResponse: \n:", response);
    res.json(response);
  }).catch((error) => {
    console.log(error);
    res.status(500).send(error);
  });
});

module.exports = router;
