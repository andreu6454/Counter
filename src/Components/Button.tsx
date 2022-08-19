import React from 'react';

type ButtonPropsType = {
    name: string
    isDisabled: boolean
    callBack: () => void
}
const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.isDisabled} onClick={props.callBack} className={"ButtonColor"}>
            {props.name}
        </button>
    );
};

export default Button;