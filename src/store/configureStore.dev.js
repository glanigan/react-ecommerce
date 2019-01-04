import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {rootReducer as reducers} from './reducers'

const configureStore = createStore(
    reducers,
    composeWithDevTools()
)
export default configureStore