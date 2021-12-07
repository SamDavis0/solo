
import {combineReducers} from 'redux'
import sampleReducer from './sampleReducer'
import SelectedVideoReducer from './selectReducer'
import FetchVideosReducer from './fetchReducer'

//state.templateReducer.count
let rootReducer = combineReducers({
    templateReducer: sampleReducer,
    SelectedVideoReducer: SelectedVideoReducer,
    FetchVideosReducer: FetchVideosReducer
})

export default rootReducer