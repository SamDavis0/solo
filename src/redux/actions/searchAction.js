import youtube from "../../youtubeApi";
import { FETCH_VIDEOS, SELECTED_VIDEO } from "./types";

export const fetchVideos = (term) => async (dispatch) => {
  
  try {
    if(term !== undefined) {
      // console.log(term, 'inside of action')
      const response = await youtube.get('/search', {
        params: {
          q: `${term}-tabs`
        }
      })
      // console.log(response.data.items)
      dispatch({ type: FETCH_VIDEOS, payload: response.data.items });
    }
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
