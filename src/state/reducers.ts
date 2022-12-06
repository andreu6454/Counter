import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type CounterStateType = {
    minCount: number,
    maxCount: number,
    count: number,
    setIsDisabled: boolean,
    message: string,
    color: string
}
export type localStorageType = {
    count: number,
    minCount: number,
    maxCount: number
}
type IncrementActionType = ReturnType<typeof incrementAC>
type DecrementActionType = ReturnType<typeof resetAc>
type SetMinCountActionType = ReturnType<typeof setMinCountAC>
type SetMaxCountActionType = ReturnType<typeof setMaxCountAC>
type SetActionType = ReturnType<typeof setAC>
type SetValuesFromLocalStorageType = ReturnType<typeof setValuesFromLocalStorageAC>

type RootActionType =
    IncrementActionType | DecrementActionType
    | SetMinCountActionType | SetMaxCountActionType
    | SetActionType | SetValuesFromLocalStorageType


const initialState: CounterStateType = {
    count: 0,
    minCount: 0,
    maxCount: 5,
    setIsDisabled: true,
    message: "",
    color: "White"
}

export const counterReducer = (state: CounterStateType = initialState, action: RootActionType): CounterStateType => {
    switch (action.type) {
        case "INCREMENT": {
            if (state.count >= state.maxCount - 1) {
                return {
                    ...state,
                    count: state.count + 1,
                    color: "Red",
                    message: (state.count + 1).toString()
                }
            }
            return {
                ...state,
                count: state.count + 1,
                message: (state.count + 1).toString(),
                color: "White"
            }
        }
        case "RESET": {
            return {
                ...state,
                count: state.minCount,
                color: "White",
                message: ""
            }
        }
        case "SETMIN": {
            if (action.minCount >= state.maxCount) {
                return {
                    ...state,
                    minCount: action.minCount,
                    color: "Red",
                    setIsDisabled: true,
                    message: "Error",
                }
            }
            if (action.minCount > 9999999) {
                return {
                    ...state,
                    minCount: action.minCount,
                    color: "Red",
                    setIsDisabled: true,
                    message: "Too big",
                }
            }
            return {
                ...state,
                minCount: action.minCount,
                setIsDisabled: false,
                message: "Press Set",
                color: "White",
            }
        }
        case "SETMAX": {
            if (state.minCount >= action.maxCount) {
                return {
                    ...state,
                    maxCount: action.maxCount,
                    color: "Red",
                    setIsDisabled: true,
                    message: "Error",
                }
            }
            if (action.maxCount > 9999999) {
                return {
                    ...state,
                    minCount: action.maxCount,
                    color: "Red",
                    setIsDisabled: true,
                    message: "Too big",
                }
            }
            return {
                ...state,
                maxCount: action.maxCount,
                setIsDisabled: false,
                message: "Press Set",
                color: "White",
            }
        }
        case "SET": {
            return {
                ...state,
                setIsDisabled: true,
                count: state.minCount,
                message: state.minCount.toString(),
            }
        }
        case "SET-VALUES":
            return {...state,
                count: action.values.count,
                minCount: action.values.minCount,
                maxCount: action.values.maxCount}
        default:
            return state
    }
}

export const incrementAC = () => {
    return {
        type: "INCREMENT",
    } as const
}
export const resetAc = () => {
    return {
        type: "RESET",
    } as const
}
export const setMinCountAC = (minCount: number) => {
    return {
        type: "SETMIN",
        minCount
    } as const
}
export const setMaxCountAC = (maxCount: number) => {
    return {
        type: "SETMAX",
        maxCount
    } as const
}
export const setAC = () => {
    return {
        type: "SET"
    } as const
}
export const setValuesFromLocalStorageAC = (values: localStorageType) => {
    return {
        type: 'SET-VALUES',
        values
    } as const
}

export const incrementTC = (count: number) => {
    return (dispatch: Dispatch<RootActionType>) => {
        localStorage.setItem('count', JSON.stringify(count + 1))
        dispatch(incrementAC())
    }
}
export const resetTC = () => {
    return (dispatch: Dispatch<RootActionType>,getState: () => AppRootStateType) => {
        localStorage.setItem('count', JSON.stringify(getState().counter.minCount))
        dispatch(resetAc())
    }
}
export const setMinCountTC = (minCount: number) => {
    return (dispatch: Dispatch<RootActionType>) => {
        localStorage.setItem('minCount', JSON.stringify(minCount))
        dispatch(setMinCountAC(minCount))
    }
}
export const setMaxCountTC = (maxCount: number) => {
    return (dispatch: Dispatch<RootActionType>) => {
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
        dispatch(setMaxCountAC(maxCount))
    }
}
export const setValuesFromLocalStorageTC = () => {
    return (dispatch: Dispatch<RootActionType>) => {
        const values: localStorageType= {
            count: 0,
            minCount: 0,
            maxCount: 5
        }
        const countAsString = localStorage.getItem('count')
        if (countAsString) {
            const newValue = JSON.parse(countAsString)
            values.count = newValue
        }
        const minCountAsString = localStorage.getItem('minCount')
        if(minCountAsString){
            const newMinCount = JSON.parse(minCountAsString)
            values.minCount = newMinCount
        }
        const maxCountAsString = localStorage.getItem('maxCount')
        if(maxCountAsString){
            const newMaxCount = JSON.parse(maxCountAsString)
            values.maxCount = newMaxCount
        }
        if(values){
            dispatch(setValuesFromLocalStorageAC(values))
        }
    }
}