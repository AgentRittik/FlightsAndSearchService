const express  = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');


const setupAndStartServer = async () => {

    // Create an express object
    const app = express();

    //middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));



    app.listen(PORT , () => {
        console.log(`Server is started at ${PORT}`);
    });
};

setupAndStartServer();