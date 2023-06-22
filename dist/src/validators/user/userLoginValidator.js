"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorHelper_1 = require("../validatorHelper");
const RULES = {
    "email": "required|email",
    "password": "required|string|min:6|max:255"
};
exports.default = (requestBody, errorMessages) => (0, validatorHelper_1.makeValidator)(RULES, requestBody, errorMessages);
