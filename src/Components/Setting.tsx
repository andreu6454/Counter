import React from 'react';
import Button from "./Button";
import Input from "./Input";

type SettingsPropsType = {
    maxCount: number,
    changeMaxCount: (number: number) => void,
    minCount: number,
    changeMinCount: (number: number) => void,
    changeCount: (number: number) => void
}
const Setting = (props: SettingsPropsType) => {

    const changeHandler = () =>{
        props.changeMaxCount(props.maxCount)
        props.changeMinCount(props.minCount)
        props.changeCount(props.minCount)
    }

    return (
        <div className={"Setting"}>
            <div className={"SettingDisplay"}>
                <Input title={"Max Value:"} value={props.maxCount} onChange={props.changeMaxCount}/>
                <Input title={"Min Value:"} value={props.minCount} onChange={props.changeMinCount}/>
            </div>
            <div className={"Buttons"}>
                <div className={"SetButton"}>
                    <Button name={"Set"} callBack={changeHandler}/>
                </div>
            </div>
        </div>
    );
};

export default Setting;