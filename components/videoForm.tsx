import ytdl from "ytdl-core";

export default function VideoForm() {
  async function handleFormAction(formData: FormData) {
    "use server";

    const url = formData.get("url");
    if (!url) {
      console.error("Invalid YouTube URL");
      return;
    }
    try {
      const videoId = ytdl.getURLVideoID(url.toString());
      console.log("Video ID : ", videoId);
      const info = await ytdl.getInfo(videoId);
      const formats = ytdl.filterFormats(info.formats, "video");
      console.log("Video Formats : ", formats);
      console.log("Video Title : ", info.videoDetails.title);
      console.log("Video Thumbnail : ", info.videoDetails.thumbnails[0].url);
      console.log("Video Channel : ", info.videoDetails.author.name);
    } catch (error) {
      console.error("Error fetching YouTube video details:", error);
      return;
    }
  }

  return (
    <form action={handleFormAction} className="w-full">
      <h1 className="text-xl text-center font-poppins font-bold text-gray-900 py-8">
        Online Youtube Downloader
      </h1>
      <input
        type="text"
        name="url"
        placeholder="Enter Youtube URL"
        className="block outline-none w-full p-3 font-poppins text-gray-600 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 "
      />
      <div className="flex justify-center items-center py-8 ">
        <button
          type="submit"
          className="bg-blue-500 w-1/2 py-2 rounded-md text-white text-lg font-poppins tracking-wide"
        >
          Download
        </button>
      </div>
    </form>
  );
}
