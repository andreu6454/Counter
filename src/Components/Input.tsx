import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string,
    value: number,
    onChange: (number: number) => void

}
const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.currentTarget.value))
        console.log(Number(e.currentTarget.value))
    }
    return (
        <div className={"ValueText"}>
            <div className={"Value"}>{props.title}</div>
            <input type={"number"} value={props.value} onChange={onChangeHandler}></input>
        </div>
    );
};

export default Input;