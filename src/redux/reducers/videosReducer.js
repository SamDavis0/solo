
import { FETCH_VIDEOS } from '../actions/types'

const initialState = {
  videoList: []
}

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videoList: action.payload.data
      }
    default:
      return state;
  }
};

export default videosReducer


