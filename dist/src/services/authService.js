"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
let authService = class authService {
    constructor() {
        this.dotenv = require('dotenv');
        this.jwt = require('jsonwebtoken');
    }
    generateToken(info) {
        return this.jwt.sign(info, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    }
    matchHash(rawString, hashedString) {
        return false;
    }
};
authService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], authService);
exports.default = authService;
