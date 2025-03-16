require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    "root",
    process.env.MYSQL_ROOT_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
        logging: false,
    }
);

module.exports = sequelize;