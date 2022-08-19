import React from 'react';
import { colors } from './Counter';

type DisplayPropsType = {
    color: colors
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