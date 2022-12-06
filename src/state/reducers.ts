export type CounterStateType = {
    minCount: number,
    maxCount: number,
    count: number,
    setIsDisabled: boolean,
    message: string,
}
type IncrementActionType = ReturnType<typeof incrementAC>
type DecrementActionType = ReturnType<typeof resetAc>
type SetMinCountActionType = ReturnType<typeof setMinCountAC>
type SetMaxCountActionType = ReturnType<typeof setMaxCountAC>
type SetActionType = ReturnType<typeof setAC>

type RootActionType =
    IncrementActionType | DecrementActionType
    | SetMinCountActionType | SetMaxCountActionType
    | SetActionType


const initialState: CounterStateType = {
    count: 0,
    minCount: 0,
    maxCount: 5,
    setIsDisabled: true,
    message: "",
}

export const counterReducer = (state: CounterStateType = initialState, action: RootActionType): CounterStateType => {
    switch (action.type) {
        case "INCREMENT": {
            if (state.count >= state.maxCount - 1) {
                return {
                    ...state,
                    count: state.count + 1,
                    message: (state.count + 1).toString()
                }
            }
            return {
                ...state,
                count: state.count + 1,
                message: (state.count + 1).toString(),
            }
        }
        case "RESET": {
            return {
                ...state,
                count: state.minCount,
                message: ""
            }
        }
        case "SETMIN": {
            if (action.minCount >= state.maxCount) {
                return {
                    ...state,
                    minCount: action.minCount,
                    setIsDisabled: true,
                    message: "Error",
                }
            }
            if (action.minCount > 9999999) {
                return {
                    ...state,
                    minCount: action.minCount,
                    setIsDisabled: true,
                    message: "Too big",
                }
            }
            return {
                ...state,
                minCount: action.minCount,
                setIsDisabled: false,
                message: "Press Set",
            }
        }
        case "SETMAX": {
            if (state.minCount >= action.maxCount) {
                return {
                    ...state,
                    maxCount: action.maxCount,
                    setIsDisabled: true,
                    message: "Error",
                }
            }
            if (action.maxCount > 9999999) {
                return {
                    ...state,
                    maxCount: action.maxCount,
                    setIsDisabled: true,
                    message: "Too big",
                }
            }
            return {
                ...state,
                maxCount: action.maxCount,
                setIsDisabled: false,
                message: "Press Set",
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