"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const api_error_1 = require("../../errors/api-error");
const server_errors_1 = require("../../errors/server-errors");
const constants_1 = require("../../common/constants");
const video_details_1 = require("../models/video-details");
const validaton_1 = require("../../utils/validaton");
const enums_1 = require("../../common/enums");
const content_disposition_1 = __importDefault(require("content-disposition"));
class VideoController {
    static getInfo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = req.query.videoUrl;
                if (!(0, validaton_1.validateUrl)(url))
                    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
                let videoData = yield ytdl_core_1.default.getInfo(url);
                if (videoData == null)
                    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
                const response = new video_details_1.VideoDetails(videoData);
                res.status(200).json(response);
            }
            catch (error) {
                next(new api_error_1.APIError(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.code));
            }
        });
    }
    static getRelated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = req.query.videoUrl;
                if (!(0, validaton_1.validateUrl)(url))
                    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
                let videoData = yield ytdl_core_1.default.getInfo(url);
                if (videoData == null)
                    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
                const response = videoData.related_videos;
                res.status(200).json(response);
            }
            catch (error) {
                next(new api_error_1.APIError(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.code));
            }
        });
    }
    static download(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = req.query.videoUrl;
                if (!(0, validaton_1.validateUrl)(url))
                    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
                const type = req.query.type;
                if (type != enums_1.UserFormats.Audio && type != enums_1.UserFormats.Video)
                    throw new server_errors_1.BadRequest(constants_1.Constants.FormatNotSupported);
                let videoData = yield ytdl_core_1.default.getInfo(url);
                if (videoData == null)
                    throw new server_errors_1.NotFound(constants_1.Constants.NotFound);
                const title = (_a = req.query.title) !== null && _a !== void 0 ? _a : videoData.videoDetails.title;
                const format = type == enums_1.UserFormats.Audio ? enums_1.Formats.Audio : enums_1.Formats.Video;
                const fileName = (0, content_disposition_1.default)(`${title}.${format}`);
                res.setHeader("Content-Disposition", `${fileName}`);
                const quality = type === enums_1.UserFormats.Video ? "highest" : "highestaudio";
                (0, ytdl_core_1.default)(url, { quality }).pipe(res);
            }
            catch (error) {
                next(new api_error_1.APIError(error === null || error === void 0 ? void 0 : error.message, error === null || error === void 0 ? void 0 : error.code));
            }
        });
    }
}
exports.VideoController = VideoController;
