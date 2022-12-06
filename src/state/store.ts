import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers";
import thunk, {ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "./Utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>