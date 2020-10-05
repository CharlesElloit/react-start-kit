import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import reducer from "./combineReducer"

const composeEnhancer =
  (window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
