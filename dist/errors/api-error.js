"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
const custom_error_1 = require("./custom-error");
class APIError extends custom_error_1.CustomError {
    constructor(message, code) {
        super(message);
        this.status = code;
        Object.setPrototypeOf(this, APIError.prototype);
    }
}
exports.APIError = APIError;
