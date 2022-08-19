import React from 'react';

type ErrorPropsType = {
    error: boolean
    errorMessage: string
}
const Error = (props: ErrorPropsType) => {
    return (
        <div className={"ErrorMessage"}>
            {props.error && props.errorMessage}
        </div>
    );
};

export default Error;