import { Router } from "express";
import { VideoController } from "../controllers/video.controller";

const router = Router();

router.route("/get-info")
      .get(VideoController.getInfo);

router.route("/get-related")
      .get(VideoController.getRelated);

router.route("/download")
      .get(VideoController.download);

export default router;