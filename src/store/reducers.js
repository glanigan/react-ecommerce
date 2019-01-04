import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import basketReducer from './Basket'

export const rootReducer = combineReducers({
    basket: basketReducer,
    form: formReducer,
})