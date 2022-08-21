import React from 'react'

function ProgressBar(props) {
    return (
        <div className='stats'>
            <h3>{props.stat_name.toUpperCase()}</h3>
            <span>{props.stat}</span>
            <progress value={props.stat} max="255">
            </progress>
        </div>
    )
}

export default ProgressBar