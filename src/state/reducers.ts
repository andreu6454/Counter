export type CounterStateType = {
    minCount: number,
    maxCount: number,
    count: number,
    error: boolean,
    incIsDisabled: boolean,
    resetIsDisabled: boolean,
    setIsDisabled: boolean,
    message: string,
    color: string
}

type IncrementActionType = ReturnType<typeof incrementAC>
type DecrementActionType = ReturnType<typeof resetAc>
type SetMinCountActionType = ReturnType<typeof setMinCountAC>
type SetMaxCountActionType = ReturnType<typeof setMaxCountAC>
type SetActionType = ReturnType<typeof setAC>

type RootActionType = IncrementActionType | DecrementActionType
    | SetMinCountActionType | SetMaxCountActionType | SetActionType


const initialState:CounterStateType ={
    count: 0,
    minCount: 0,
    maxCount: 5,
    error: false,
    incIsDisabled: false,
    resetIsDisabled: true,
    setIsDisabled: false,
    message: "",
    color: "white"
}

export const counterReducer = (state:CounterStateType = initialState ,action: RootActionType): CounterStateType =>{
    switch (action.type){
        case "INCREMENT":{
            if(state.count >= state.maxCount - 1){
                return {...state,
                    count: action.count + 1,
                    resetIsDisabled: false,
                    error: true,
                    incIsDisabled: true,
                    color: "Red",
                    message: (state.count+1).toString()}
            }
            return {...state,
                count: action.count + 1,
                resetIsDisabled: false,
                message: (state.count + 1).toString(),
                color: "White"}
        }
        case "RESET":{
            return {...state,
                count: state.minCount,
                resetIsDisabled: true,
                incIsDisabled: false,
                error: false,
                color: "Black",
                message: ""}
        }
        case "SETMIN":{
            if(action.minCount >= state.maxCount){
                return {...state,
                    error: true,
                    color: "Red",
                    setIsDisabled: true,
                    message: "Error",
                    incIsDisabled: true,
                    resetIsDisabled: true}
            }
            return {...state,
                minCount: action.minCount,
                setIsDisabled: false,
                incIsDisabled: true,
                resetIsDisabled: true,
                message: "Press Set",
                color: "White",
                error: false,}
        }
        case "SETMAX":{
            if(state.minCount >= action.maxCount){
                return {...state,
                    error: true,
                    color: "Red",
                    setIsDisabled: true,
                    message: "Error",
                    incIsDisabled: true,
                    resetIsDisabled: true}
            }
            return {...state,
                maxCount: action.maxCount,
                setIsDisabled: false,
                incIsDisabled: true,
                resetIsDisabled: true,
                message: "Press Set",
                color: "White",
                error: false,}
        }
        case "SET":{
            return {...state,
                setIsDisabled: true,
                count: state.minCount,
                message: state.minCount.toString(),
                incIsDisabled: false,
                error: false,}
        }
        default: return state
    }
}

export const incrementAC = (count: number) => {
    return {
        type: "INCREMENT",
        count
    }as const
}
export const resetAc = () => {
    return {
        type: "RESET",
    }as const
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

