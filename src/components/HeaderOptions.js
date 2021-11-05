 import React from 'react';
 import './styles/HeaderOption.css';
 import {Avatar} from "@material-ui/core";

function HeaderOptions({avatar,Icon,title}) {
    return (
        <div className="header__option">
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && <Avatar className='headeroption__icon' src={avatar}/>}
            <h3 className='headeroption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOptions
