require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    "root",
    process.env.MYSQL_ROOT_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
            timezone: "America/Bogota",
        },
        timezone: "-05:00",
        logging: console.log,
    }
);

module.exports = sequelize;