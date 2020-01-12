import {combineReducers, createStore, applyMiddleware} from 'redux'
import user from '../store/reducers/user'
import {composeWithDevTools} from'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({user})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store