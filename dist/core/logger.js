"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
    silly: "blue"
};
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
    silly: 5
};
winston_1.default.addColors(colors);
const errorFormat = winston_1.default.format((log) => {
    if (log instanceof Error) {
        return Object.assign({
            message: log.message,
            stack: log.stack
        }, log);
    }
    return log;
});
const getLogTemplate = (log) => {
    return `${log.timestamp} ${log.level}: ${log.message} ${(log === null || log === void 0 ? void 0 : log.stack) != null ? '\n' + log.stack : ""}`;
};
const format = winston_1.default.format.combine(errorFormat(), winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }), winston_1.default.format.printf(getLogTemplate));
const transports = [
    new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(format, winston_1.default.format.colorize({ all: true }))
    }),
    new winston_1.default.transports.File({
        filename: "logs/error.log",
        level: "error",
    }),
    new winston_1.default.transports.File({
        filename: "logs/all.log",
    }),
];
const Logger = winston_1.default.createLogger({
    levels,
    level: "debug",
    format,
    transports
});
exports.default = Logger;
