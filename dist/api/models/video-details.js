"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoDetails = void 0;
const format_1 = require("./format");
class VideoDetails {
    constructor(data) {
        this.thumbnails = data.videoDetails.thumbnails;
        this.videoId = data.videoDetails.videoId;
        this.title = data.videoDetails.title;
        this.lengthSeconds = data.videoDetails.lengthSeconds;
        this.channelId = data.videoDetails.channelId;
        this.description = data.videoDetails.description;
        this.views = data.videoDetails.viewCount;
        this.author = data.videoDetails.author;
        this.category = data.videoDetails.category;
        this.likes = data.videoDetails.likes;
        this.dislikes = data.videoDetails.dislikes;
        this.publishDate = data.videoDetails.publishDate;
        this.ownerChannelName = data.videoDetails.ownerChannelName;
        this.isPrivate = data.videoDetails.isPrivate;
        this.isLiveContent = data.videoDetails.isLiveContent;
        this.videoUrl = data.videoDetails.video_url;
        this.formats = data.formats.map(x => new format_1.Format(x));
    }
}
exports.VideoDetails = VideoDetails;
