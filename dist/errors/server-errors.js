"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = exports.BadRequest = exports.InternalServerError = void 0;
const custom_error_1 = require("./custom-error");
class InternalServerError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.status = 500;
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
exports.InternalServerError = InternalServerError;
class BadRequest extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.status = 400;
        Object.setPrototypeOf(this, BadRequest.prototype);
    }
}
exports.BadRequest = BadRequest;
class NotFound extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.status = 404;
        Object.setPrototypeOf(this, NotFound.prototype);
    }
}
exports.NotFound = NotFound;
