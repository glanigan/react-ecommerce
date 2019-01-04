import { createStore } from 'redux'

import { rootReducer as reducers} from './reducers'

const configureStore = createStore(
    reducers,
)
export default configureStore