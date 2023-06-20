"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = __importDefault(require("typedi"));
const sequelize_1 = require("sequelize");
const sequelizeConnectionAdapter_1 = __importDefault(require("../repositories/adapters/sequelizeConnectionAdapter"));
const sequelize = typedi_1.default.get(sequelizeConnectionAdapter_1.default).connect();
const User = sequelize.define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = User;
