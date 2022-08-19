import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import Button from "./Button";

type SettingPropsType = {
    minCount: number
    maxCount: number
    setMinCount: Dispatch<SetStateAction<number>>
    setMaxCount: Dispatch<SetStateAction<number>>
    setCount: Dispatch<SetStateAction<number>>
    setErrorMessage: Dispatch<SetStateAction<string>>
    setError: Dispatch<SetStateAction<boolean>>
}
const Setting = (props: SettingPropsType) => {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [isSettingDis, setIsSettingDis] = useState<boolean>(false)

    const settingFunction = () => {
        props.setMaxCount(maxValue);
        props.setMinCount(minValue);
        props.setCount(minValue)
    }
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) <= minValue || Number(e.currentTarget.value) < 0) {
            props.setErrorMessage("Invalid Value")
            props.setError(true)
            setMaxValue(Number(e.currentTarget.value))

            setIsSettingDis(true)
        } else {
            setIsSettingDis(false)
            setMaxValue(Number(e.currentTarget.value))
            props.setErrorMessage("")
            props.setError(false)
        }
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxValue) {
            props.setErrorMessage("Invalid Value")
            props.setError(true)
            setIsSettingDis(true)
            setMinValue(Number(e.currentTarget.value))
        } else {
            setMinValue(Number(e.currentTarget.value))
            props.setErrorMessage("")
            setIsSettingDis(false)
            props.setError(false)
        }
    }

    return (
        <div className={"Setting"}>
            <div className={"SettingDisplay"}>
                <div className={"ValueText"}>
                    <div className={"Value"}>Max value:</div>
                    <input type={"number"} value={maxValue} onChange={changeMaxValueHandler}></input>
                </div>
                <div className={"ValueText"}>
                    <div className={"Value"}>Min value:</div>
                    <input type={"number"} value={minValue} onChange={changeMinValueHandler}></input>
                </div>
            </div>
            <div className={"Buttons"}>
                <div className={"SetButton"}>
                    <Button name={"Set"} callBack={settingFunction} isDisabled={isSettingDis}/>
                </div>
            </div>
        </div>
    );
};

export default Setting;