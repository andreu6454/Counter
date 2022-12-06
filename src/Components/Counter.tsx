import React from 'react';
import Display from "./Display";
import Button from "./Button";
import Error from './Error'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, ThunkAppDispatchType} from "../state/store";
import {CounterStateType, incrementTC, resetTC} from "../state/reducers";


const Counter = () => {
    const counter = useSelector<AppRootStateType, CounterStateType>((count) => count.counter)
    const dispatch = useDispatch<ThunkAppDispatchType>()

    const IncHandler = () => {
        dispatch(incrementTC(counter.count))
    }
    const ResetHandler = () => {
        dispatch(resetTC())
    }

    return (
        <div className={"Counter"}>
            <Display color={counter.color} count={counter.count} message={counter.message}/>
            <Error error={counter.count >= counter.maxCount} errorMessage={"Max Value"}/>
            <div className={"Buttons"}>
                <Button name={"Inc"}
                        isDisabled={!counter.setIsDisabled || (counter.maxCount === counter.count)}
                        callBack={IncHandler}/>
                <Button name={"Reset"}
                        isDisabled={!counter.setIsDisabled || (counter.minCount === counter.count)}
                        callBack={ResetHandler}/>
            </div>
        </div>
    );
};

export default Counter;