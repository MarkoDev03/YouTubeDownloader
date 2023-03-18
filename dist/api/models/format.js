"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
class Format {
    constructor(data) {
        this.url = data.url;
        this.isLive = data.isLive;
        this.width = data.width;
        this.height = data.height;
        this.mimeType = data.mimeType;
        this.qualityLabel = data.qualityLabel;
        this.initRange = data.initRange;
        this.indexRange = data.indexRange;
        this.contentLength = data.contentLength;
        this.fps = data.fps;
        this.hasAudio = data.hasAudio;
    }
}
exports.Format = Format;
