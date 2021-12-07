import axios from 'axios'
const key = process.env.YOUTUBE_API_KEY;

const api = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 5,
      key: key
    }
  });

export function SelectedVideo(video) {
  return {
    type: "SELECTED_VIDEO",
    payload: video,
  };
}

export function FetchVideos(searchTerm = "") {
  return async function (dispatch) {
    const response = await api.get("/search", {
      params: {
        q: `${searchTerm}-tabs`,
      },
    });

    dispatch({ type: "FETCH_VIDEOS", payload: response.data });
  };
}
