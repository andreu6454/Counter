import React from 'react';
import Button from "./Button";
import Input from "./Input";
import Error from "./Error";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, ThunkAppDispatchType} from "../state/store";
import {CounterStateType, setAC, setMaxCountAC, setMinCountAC} from "../state/reducers";

const Setting = () => {

    const counter = useSelector<AppRootStateType,CounterStateType>((count)=> count.counter)
    const dispatch = useDispatch<ThunkAppDispatchType>()

    const changeMaxCount = (maxCount: number ) =>{
        dispatch(setMaxCountAC(maxCount))
    }
    const changeMinCount = (e: number) =>{
        dispatch(setMinCountAC(e))
    }
    const changeHandler = () => {
        dispatch(setAC())
    }

    return (
        <div className={"Setting"}>
            <div className={"SettingDisplay"}>
                <Input title={"Max Value:"} value={counter.maxCount} onChange={changeMaxCount}/>
                <Input title={"Min Value:"} value={counter.minCount} onChange={changeMinCount}/>
            </div>
            <Error error={counter.maxCount <= counter.minCount} errorMessage={"Max <= Min"}/>
            <div className={"Buttons"}>
                <div className={"SetButton"}>
                    <Button name={"Set"} callBack={changeHandler} isDisabled={counter.setIsDisabled}/>
                </div>
            </div>
        </div>
    );
};

export default Setting;