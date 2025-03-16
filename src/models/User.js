const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcryptjs");

const UsersSchema = sequelize.define("UsersSchema", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        unique: false,
        defaultValue:"user",
    },
}, {
    tableName: "users",
    timestamps: true,
    hooks: {
        beforeCreate: async (user) => {
            const key = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, key);
        }
    }
});

UsersSchema.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = UsersSchema;