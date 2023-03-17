import { Request, Response, NextFunction } from "express";
import ytdl from "ytdl-core";
import { APIError } from "../../errors/api-error";
import { BadRequest, NotFound } from "../../errors/server-errors";
import { Constants } from "../../common/constants";
import { VideoDetails } from "../models/video-details";
import { validateUrl } from "../../utils/validaton";
import { Formats, UserFormats } from "../../common/enums";
import contentDisposition from "content-disposition";

export class VideoController {
  public static async getInfo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const url: string = req.query.videoUrl as string;

      if (!validateUrl(url))
        throw new NotFound(Constants.NotFound);

      let videoData: ytdl.videoInfo = await ytdl.getInfo(url);

      if (videoData == null)
        throw new NotFound(Constants.NotFound);

      const response = new VideoDetails(videoData);
      res.status(200).json(response);
    } catch (error) {
      next(new APIError(error?.message, error?.code));
    }
  }

  public static async getRelated(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const url: string = req.query.videoUrl as string;

      if (!validateUrl(url))
        throw new NotFound(Constants.NotFound);

      let videoData: ytdl.videoInfo = await ytdl.getInfo(url);

      if (videoData == null)
        throw new NotFound(Constants.NotFound);

      const response = videoData.related_videos;
      res.status(200).json(response);
    } catch (error) {
      next(new APIError(error?.message, error?.code));
    }
  }

  public static async download(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const url: string = req.query.videoUrl as string;

      if (!validateUrl(url))
        throw new NotFound(Constants.NotFound);

      const type = req.query.type;

      if (type != UserFormats.Audio && type != UserFormats.Video)
        throw new BadRequest(Constants.FormatNotSupported);

      let videoData: ytdl.videoInfo = await ytdl.getInfo(url);

      if (videoData == null)
         throw new NotFound(Constants.NotFound);

      const title = req.query.title ?? videoData.videoDetails.title;

      const format = type == UserFormats.Audio ? Formats.Audio : Formats.Video;

      const fileName = contentDisposition(`${title}.${format}`)
      res.setHeader("Content-Disposition", `${fileName}`);

      const quality = type === UserFormats.Video ? "highest" : "highestaudio";
      ytdl(url, { quality }).pipe(res);
    } catch (error) {
      next(new APIError(error?.message, error?.code));
    }
  }
}