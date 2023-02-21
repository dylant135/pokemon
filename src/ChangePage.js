import React from "react";

export default function ChangePage(props) {
    return (
        <div className="changePage">
            <button onClick={props.toPrevPage} className='pagebtn'>Previous</button>
            <button onClick={props.toNextPage} className='pagebtn'>Next</button>
        </div>
    )
}