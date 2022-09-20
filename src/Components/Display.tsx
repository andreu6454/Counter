import React from 'react';

type DisplayPropsType = {
    color: string
    count: number
}
const Display = (props: DisplayPropsType) => {
    return (
        <div className={"Display"}>
            <div className={props.color}> {props.count} </div>
        </div>
    );
};

export default Display;