import React, {Dispatch, SetStateAction, useState} from 'react';
import Button from "./Button";
import Display from "./Display";
import Error from "./Error";

export type colors = "White" | "Red"

type CounterPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    errorMessage: string
    minCount: number
    maxCount: number
}
const Counter = (props: CounterPropsType) => {

    const [isDisabledIncButton, setIsDisabledIncButton] = useState<boolean>(false)
    const [isDisabledResetButton, setIsDisabledResetButton] = useState<boolean>(true)
    const [color, setColor] = useState<colors>("White")


    const incrementFunction = () => {
        props.count + 1 === props.minCount ? setIsDisabledResetButton(true) : setIsDisabledResetButton(false)
        if(props.count + 1 === props.maxCount) {
            setIsDisabledIncButton(true)
            setColor("Red")
            props.setError(true)
        }
        props.setCount(props.count + 1)
    }
    const resetFunction = () => {
        props.setCount(props.minCount)
        setIsDisabledIncButton(false)
        setIsDisabledResetButton(true)
        setColor("White")
        props.setError(false)
    }

    return (
        <div className={"Counter"}>
            <Display count={props.count} color={color}/>
            <Error error={props.error} errorMessage={props.errorMessage}/>

            <div className={"Buttons"}>
                <Button name={"Inc"} isDisabled={isDisabledIncButton} callBack={incrementFunction}/>
                <Button name={"Reset"} isDisabled={isDisabledResetButton} callBack={resetFunction}/>
            </div>
        </div>
    );
};

export default Counter;