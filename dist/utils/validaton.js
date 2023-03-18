"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = exports.validateUrl = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const validateUrl = (url) => {
    let isValid = false;
    if (ytdl_core_1.default.validateURL(url))
        isValid = true;
    return isValid;
};
exports.validateUrl = validateUrl;
const validateId = (url) => {
    let isValid = false;
    if (ytdl_core_1.default.validateID(url))
        isValid = true;
    return isValid;
};
exports.validateId = validateId;
