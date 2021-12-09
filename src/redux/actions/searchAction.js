// import youtube from "../../youtubeApi";
import { FETCH_VIDEOS, SELECTED_VIDEO } from "./types";
import youtube from './youtube'

export const fetchVideos = (term) => async (dispatch) => {
  try {
    const response = await youtube.get('/search', {
      params: {
        q: `${term}-tabs`
      }
    })
    dispatch({ type: FETCH_VIDEOS, payload: response.data.items });
    
  } catch (err) {
    console.log(err.message);
  }
};

export const setVideo = (video) => {
  return {
    type: SELECTED_VIDEO,
    payload: video,
  };
};
