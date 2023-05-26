"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const config = config_1.setting.development;
let sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, { dialect: "mysql", host: "127.0.0.1" });
class Items extends sequelize_1.Model {
}
exports.Items = Items;
Items.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
}, { sequelize, tableName: "Todo" });
