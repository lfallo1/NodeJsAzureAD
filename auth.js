const msal = require('@azure/msal-node');

const config = {
    auth: {
        clientId: "f2f76e6e-2e34-478d-9506-5d54cd4e5472",
        authority: "https://login.microsoftonline.com/bd2d4a91-12c8-4a7e-b1a8-83035a41c7fc",
        clientSecret: "jH27Q~1p4FhuXPznvVmhN4C51uyD1tavRhZz~"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: true,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

const cca = new msal.PublicClientApplication(config);

module.exports = cca;