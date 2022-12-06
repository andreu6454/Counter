import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers";
import thunk, {ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>