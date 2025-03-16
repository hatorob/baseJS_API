require("dotenv").config();
const express = require("express");
const sequelize = require("../config/database");
const { TaskSchema, UsersSchema } = require("../models");

class ServerApp {

    _app = express();
    _port;
    _routes;

    constructor( optionServer ) {
        const { port, routes } = optionServer;
        this._port = port;
        this._routes = routes;
    }

    async start () {
        try {
            await sequelize.authenticate();
            await sequelize.sync({ force: false });

            this._app.use(express.json());
            this._app.use(express.urlencoded({extended: true}));
            this._app.use( this._routes );
            this._app.listen( this._port, () => {
                console.log(`Server running on port ${this._port}`);
            })
        } catch (error) {
            console.log("Error Conection to BD",error);
            //process.exit(1);

        }
    }

}

module.exports = ServerApp;