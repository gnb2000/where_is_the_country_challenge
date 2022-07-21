import React from 'react';

function Flag(props) {
    return (
        <>
            <img src={props.url} className="img-fluid" alt={props.name}/>
        </>
    );
}

export default Flag;