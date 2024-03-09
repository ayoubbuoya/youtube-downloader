"use server";

import ytdl from "ytdl-core";

export async function getVideoDetails(videoInfoState: any, formData: FormData) {
  const url = formData.get("url");
  if (!url) {
    console.error("Invalid YouTube URL");
    return {
      success: false,
      videoInfo: {
        title: "",
        thumbnail: "",
        channel: "",
        formats: [],
      },
    };
  }
  try {
    const videoId = ytdl.getURLVideoID(url.toString());
    console.log("Video ID : ", videoId);
    const info = await ytdl.getInfo(videoId);
    const videoThumbails = info.videoDetails.thumbnails;
    const formats = ytdl.filterFormats(info.formats, "video");
    const mp4Formats = formats.filter(
      (format) =>
        format.container === "mp4" &&
        format.hasVideo === true &&
        format.hasAudio === true
    );
    console.log("MP4 Video Formats : ", mp4Formats);
    console.log("Video Title : ", info.videoDetails.title);
    console.log("Video Thumbnail : ", info.videoDetails.thumbnails[0].url);
    console.log("Video Channel : ", info.videoDetails.author.name);

    const videoDetails = {
      title: info.videoDetails.title,
      thumbnail: videoThumbails[videoThumbails.length - 1].url,
      channel: info.videoDetails.author.name,
      formats: mp4Formats,
    };
    return {
      success: true,
      videoInfo: videoDetails,
    };
  } catch (error) {
    console.error("Error fetching YouTube video details:", error);
    return {
      success: false,
      videoInfo: {
        title: "",
        thumbnail: "",
        channel: "",
        formats: [],
      },
    };
  }
}
