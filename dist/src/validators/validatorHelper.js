"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidator = void 0;
const typedi_1 = __importDefault(require("typedi"));
const validatorFactory_1 = __importDefault(require("./validatorFactory"));
function makeValidator(rules, requestBody, errorMessages) {
    return (() => typedi_1.default.get(validatorFactory_1.default).buildValidator(requestBody, rules, errorMessages))();
}
exports.makeValidator = makeValidator;
