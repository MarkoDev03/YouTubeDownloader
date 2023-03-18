"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const vars_1 = require("../common/vars");
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: vars_1.Vars.MAX_REQ_PER_HOUR,
    standardHeaders: true,
    legacyHeaders: false
});
exports.default = limiter;
