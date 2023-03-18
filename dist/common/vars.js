"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Vars = {
    PORT: Number(process.env.PORT),
    MAX_REQ_PER_HOUR: Number(process.env.MAX_REQ_PER_HOUR),
};
