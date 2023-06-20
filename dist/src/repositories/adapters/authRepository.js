"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = __importDefault(require("../baseRepository"));
class authRepository extends baseRepository_1.default {
    constructor() {
        super();
    }
    createUser() {
        return {};
    }
}
exports.default = authRepository;
