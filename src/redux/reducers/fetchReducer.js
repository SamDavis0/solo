import { FETCH_VIDEOS } from '../actions/types'

// function FetchVideosReducer(state = [], action) {
//   if (action.type === "FETCH_VIDEOS") {
//     return action.payload;
//   }
//   return state;
// }

const initialState = {
  videos: []
}

const FetchVideosReducer = (state=initialState, action) => {
    
  switch (action.type) {
      case FETCH_VIDEOS:
          return{
              ...state,
              videos: state.videos + action.payload
          }
      default:
          return state
  }
}

export default FetchVideosReducer


