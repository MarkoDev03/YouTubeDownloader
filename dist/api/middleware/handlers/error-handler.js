"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = __importDefault(require("../../../core/logger"));
const custom_error_1 = require("../../../errors/custom-error");
const constants_1 = require("../../../common/constants");
const errorHandler = (error, req, res, next) => {
    logger_1.default.error(error);
    if (error instanceof (custom_error_1.CustomError)) {
        var formetedError = error;
        res.status(formetedError.status).json({ errors: formetedError.serializeError() });
        return next();
    }
    res.status(500).json({ errors: [{ status: 500, message: constants_1.Constants.InternalServerError }] });
    return next();
};
exports.errorHandler = errorHandler;
