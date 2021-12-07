import { SELECTED_VIDEOS } from '../actions/types'

// function SelectedVideoReducer(selectedVideo = null, action) {
//   if (action.type === "SELECTED_VIDEO") {
//     return action.payload;
//   }
//   return selectedVideo;
// }

const initialState = {
  selectedVideo: null
}

const SelectedVideoReducer = (state=initialState, action) => {
    
  switch (action.type) {
      case SELECTED_VIDEOS:
          return{
              ...state,
              selectedVideo: state.selectedVideo + action.payload
          }
      default:
          return state
  }
}

export default SelectedVideoReducer;
