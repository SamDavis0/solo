import { SELECTED_VIDEO } from '../actions/types'

const initialState = {
  videoData: {}
}

const videoDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_VIDEO:
      return{
        ...state,
        videoData: action.payload.data
      }
    default:
      return state;
  }
};

export default videoDetailReducer;
