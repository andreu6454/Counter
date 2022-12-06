import {counterReducer, CounterStateType, incrementAC, resetAc} from "../reducers";

const initialState: CounterStateType = {
    count: 0,
    minCount: 0,
    maxCount: 0,
    setIsDisabled:true,
    color: "white",
    message: ""
}

test('increment should increment count by 1', () => {


    const action = incrementAC()

    const endState = counterReducer(initialState, action)

    expect(endState.count).toEqual(1)
})
test('reset should set count to 0', () => {
    const startState = {...initialState, count: 5}

    const action = resetAc()

    const endState = counterReducer(startState, action)

    expect(endState.count ).toEqual(0)
})