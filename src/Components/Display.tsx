import React from 'react';

type DisplayPropsType = {
    color: string
    count: number
    message?: string | null
}
const Display = (props: DisplayPropsType) => {
    return (
        <div className={"Display"}>
            <div className={props.color}> {props.message || props.count} </div>
        </div>
    );
};

export default Display;