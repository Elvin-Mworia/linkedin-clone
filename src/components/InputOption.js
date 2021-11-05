import React from 'react'
import './styles/InputOption.css';

function InputOptions({Icon,title,color}) {
    return (
        <div className='InputOption'>
            <Icon style={{color:color}}/>
            <h4>{title}</h4>
            
        </div>
    )
}

export default InputOptions
