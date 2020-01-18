import {combineReducers, createStore, applyMiddleware} from 'redux'
import user from '../store/reducers/user'
import {composeWithDevTools} from'redux-devtools-extension'
import thunk from 'redux-thunk'
import page from './reducers/page'
import paseos from './reducers/paseos'
import guarderias from './reducers/guarderias'

const rootReducer = combineReducers({user,page,paseos,guarderias})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store