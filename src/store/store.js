import {combineReducers, createStore, applyMiddleware} from 'redux'
import user from '../store/reducers/user'
import {composeWithDevTools} from'redux-devtools-extension'
import thunk from 'redux-thunk'
import page from './reducers/page'
import paseos from './reducers/paseos'
import guarderias from './reducers/guarderias'
import veterinarias from './reducers/veterinarias'
import saltos from './reducers/saltos'
import mascotas from './reducers/mascotas'
import services from './reducers/services'

const rootReducer = combineReducers({user,page,paseos,guarderias,veterinarias,saltos,mascotas,services})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
