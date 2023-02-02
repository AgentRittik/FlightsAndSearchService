const express  = require("express");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // Create an express object
    const app = express();
    app.listen(PORT , () => {
        console.log(`Server is started st ${PORT}`);
    });
};

setupAndStartServer();