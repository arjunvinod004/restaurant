import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restListReducer } from './reducers/restreducer'

const reducers=combineReducers({
    restReducer:restListReducer
})
const middleware=[thunk]
// store creation 
const store= createStore(reducers,applyMiddleware(...middleware))

export default store