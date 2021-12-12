
import {combineReducers} from 'redux'
import videoDetailReducer from './videoDetailReducer'
import videosReducer from './videosReducer'
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'

//state.templateReducer.count
let rootReducer = combineReducers({
    videos: videosReducer,
    selectedVideo: videoDetailReducer,
    productsCR: productsReducer,
    cartCR: cartReducer
})

export default rootReducer