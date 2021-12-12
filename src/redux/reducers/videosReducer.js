
import { FETCH_VIDEOS } from '../actions/types'

const initialState = {
  videoList: []
}

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      // console.log('inside of reducer', action.payload)
      return {
        ...state,
        videoList: action.payload
      }
    default:
      return state;
  }
};

export default videosReducer


