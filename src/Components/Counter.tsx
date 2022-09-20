import React, {useState} from 'react';
import Display from "./Display";
import Button from "./Button";
import Error from './Error'

type CounterPropsType ={
    count: number,
    changeCount: (number: number)=> void,
    maxCount: number,
    minCount: number
}
const Counter = (props:CounterPropsType) => {

    const [incIsDisabled,setIncIsDisabled] = useState(false)
    const [resetIsDisabled,setResetIsDisabled] = useState(true)
    const [color,setColor] = useState("White")
    const [error,setError] = useState(false)

    const IncHandler = () =>{
        if (props.count === props.maxCount - 1){
            props.changeCount(props.count + 1)
            setError(true)
            setColor("Red")
            setIncIsDisabled(true)
        } else{
            props.changeCount(props.count + 1)
            setResetIsDisabled(false)
        }
    }
    const ResetHandler = () =>{
        props.changeCount(props.minCount)
        setError(false)
        setColor("White")
        setIncIsDisabled(false)
        setResetIsDisabled(true)
    }

    return (
        <div className={"Counter"}>
            <Display color={color} count={props.count}/>
            <Error error={error} errorMessage={"Max Value"}/>
            <div className={"Buttons"}>
                <Button name={"Inc"} isDisabled={incIsDisabled} callBack={IncHandler}/>
                <Button name={"Reset"} isDisabled={resetIsDisabled} callBack={ResetHandler}/>
            </div>

        </div>
    );
};

export default Counter;