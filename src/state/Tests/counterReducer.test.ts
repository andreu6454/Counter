import {counterReducer, CounterStateType, incrementAC, resetAc} from "../reducers";

test('increment should increment count by 1', () => {
    const startState: CounterStateType = {
        count: 0,
        minCount: 0,
        maxCount: 0,
        counterError: false,
        settingError: false,
        incIsDisabled: false,
        resetIsDisabled: true,
        setIsDisabled:true,
        color: "white",
        message: ""
    }

    const action = incrementAC(startState.count)

    const endState = counterReducer(startState, action)

    expect(endState).toEqual({
        count: 1,
        minCount: 0,
        maxCount: 0,
        counterError: false,
        settingError: false,
        incIsDisabled: false,
        resetIsDisabled: true,
        setIsDisabled:true,
        color: "white",
        message: ""
    })
})
test('decrement should decrement count by 1', () => {
    const startState: CounterStateType = {
        count: 5,
        minCount: 0,
        maxCount: 0,
        counterError: false,
        settingError: false,
        incIsDisabled: false,
        resetIsDisabled: true,
        setIsDisabled:true,
        message: "",
        color: "white"
    }

    const action = resetAc()

    const endState = counterReducer(startState, action)

    expect(endState).toEqual({
        count: 0,
        minCount: 0,
        maxCount: 0,
        counterError: false,
        settingError: false,
        incIsDisabled: false,
        setIsDisabled:true,
        resetIsDisabled: true,
        color: "white",
        message: ""
    })
})