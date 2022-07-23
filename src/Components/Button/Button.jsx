import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <Link to={props.url} style={{ textDecoration: 'none' }}>
            <button type="button" className="px-5 btn btn-light shadow p-3 mb-5 bg-body rounded d-flex align-items-center justify-content-between">
                    {props.icon}
                    {props.text}
            </button>
        </Link>
    );
}

export default Button;