import {legacy_createStore as CreateStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducer/root_reducer"

const initialState = {}

const middleware = [thunk]

const store = CreateStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;