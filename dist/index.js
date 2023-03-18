"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("./core/express"));
const vars_1 = require("./common/vars");
const logger_1 = __importDefault(require("./core/logger"));
const constants_1 = require("./common/constants");
const server = (0, http_1.createServer)(express_1.default);
const port = vars_1.Vars.PORT || 5000;
server.listen(port, () => {
    logger_1.default.info(constants_1.Constants.ServerIsListening + port);
});
