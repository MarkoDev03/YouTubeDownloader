"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const constants_1 = require("../../../common/constants");
const server_errors_1 = require("../../../errors/server-errors");
const notFoundHandler = () => {
    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
};
exports.notFoundHandler = notFoundHandler;
