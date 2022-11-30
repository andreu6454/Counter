import React from 'react';
import Display from "./Display";
import Button from "./Button";
import Error from './Error'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {CounterStateType, incrementAC, resetAc} from "../state/reducers";


const Counter = () => {
    const counter = useSelector<AppRootStateType,CounterStateType>((count)=> count.counter)
    const dispatch = useDispatch()

    const IncHandler = () =>{
        dispatch(incrementAC(counter.count))
    }
    const ResetHandler = () =>{
        dispatch(resetAc())
    }

    return (
        <div className={"Counter"}>
            <Display color={counter.color} count={counter.count} message={counter.message}/>
            <Error error={counter.error} errorMessage={"Max Value"}/>
            <div className={"Buttons"}>
                <Button name={"Inc"} isDisabled={counter.incIsDisabled} callBack={IncHandler}/>
                <Button name={"Reset"} isDisabled={counter.resetIsDisabled} callBack={ResetHandler}/>
            </div>
        </div>
    );
};

export default Counter;