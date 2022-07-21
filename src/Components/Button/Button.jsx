import React from 'react';

function Button(props) {
    return (
        <>
            <button type="button" className="px-5 btn btn-light shadow p-3 mb-5 bg-body rounded d-flex align-items-center justify-content-between">
                    {props.icon}
                    {props.text}
            </button>
        </>
    );
}

export default Button;