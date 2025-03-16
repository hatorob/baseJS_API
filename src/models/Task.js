const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TaskSchema = sequelize.define("TaskSchema", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
}, {
    tableName: "tasks",
    timestamps: true,
});

module.exports = TaskSchema;