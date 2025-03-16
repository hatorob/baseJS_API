const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const UsersSchema = require("./User");

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
    user: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UsersSchema,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: "tasks",
    timestamps: true,
});

module.exports = TaskSchema;