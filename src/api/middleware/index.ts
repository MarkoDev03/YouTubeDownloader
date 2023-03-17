import { Router } from "express";
import videoStats from "../routes/video";

const router = Router();

router.use("/video", videoStats);

export default router;