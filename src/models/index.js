const sequelize = require("../config/database");
const { Op } = require("sequelize");
const TaskSchema = require("./Task");
const UsersSchema = require("./User");


module.exports = {
    TaskSchema,
    UsersSchema,
    sequelize,
    Op
}