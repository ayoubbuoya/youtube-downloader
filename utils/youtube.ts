const API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_api_url = process.env.YOUTUBE_API_URL;

export async function getVideoInfo(videoId: string) {
  try {
    const url = `${YOUTUBE_api_url}/videos/?id=${videoId}&key=${API_KEY}&part=snippet%2CcontentDetails%2Cstatistics%2Cplayer`;
    console.log("API URL : ", url);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        "Error fetching YouTube video details:",
        response.statusText
      );
      return null;
    }

    const data = await response.json();
    console.log("Data : ", data);
    return data;
  } catch (error) {
    console.error("Error fetching YouTube video details:", error);
    return null;
  }
}
