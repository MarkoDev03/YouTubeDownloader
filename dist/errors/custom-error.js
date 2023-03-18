"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message) {
        super(message);
    }
    serializeError() {
        return [{
                message: this.message,
                status: this.status
            }];
    }
}
exports.CustomError = CustomError;
