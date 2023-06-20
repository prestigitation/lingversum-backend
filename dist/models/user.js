'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const typedi_1 = __importDefault(require("typedi"));
const database_1 = __importDefault(require("../config/database"));
const sequelizeInstance = typedi_1.default.get(database_1.default).getInstance();
class User extends sequelize_1.Model {
}
User.init({
    name: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING
}, {
    modelName: 'User',
    sequelize: sequelizeInstance
});
exports.default = User;
