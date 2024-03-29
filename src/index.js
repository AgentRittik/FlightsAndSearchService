const express  = require("express");
const bodyParser = require("body-parser");

//const {City} = require('./models/index');  // this is not the right place to interact with model  --> move to repository
const ApiRoutes = require('./routes/index');

const { PORT } = require('./config/serverConfig');

const db = require('./models/index');
const sequelize = require('sequelize');
const {Airplane} = require("./models/index");


const setupAndStartServer = async () => {

    // Create an express object
    const app = express();

    //middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);


    app.listen(PORT , async() => {
        console.log(`Server is started at ${PORT}`);

        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter: true});
        // } 
           
    });
};

setupAndStartServer();