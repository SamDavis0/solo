
import {combineReducers} from 'redux'
// import sampleReducer from './sampleReducer'
import videoDetailReducer from './videoDetailReducer'
import videosReducer from './videosReducer'

//state.templateReducer.count
let rootReducer = combineReducers({
    // templateReducer: sampleReducer,
    videos: videosReducer,
    selectedVideo: videoDetailReducer
})

export default rootReducer