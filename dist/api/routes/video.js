"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const video_controller_1 = require("../controllers/video.controller");
const router = (0, express_1.Router)();
router.route("/get-info")
    .get(video_controller_1.VideoController.getInfo);
router.route("/get-related")
    .get(video_controller_1.VideoController.getRelated);
router.route("/download")
    .get(video_controller_1.VideoController.download);
exports.default = router;
