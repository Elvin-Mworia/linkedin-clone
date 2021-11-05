import React from 'react'
import {Avatar} from "@material-ui/core";
import "./styles/Sidebar.css";

function Sidebar() {
    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
        )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=''/>
                <Avatar className='sidebar__avatar'/>
                <h2>Elvin Mworia</h2>
                <h4>elvinmworia@gmail.com</h4>

            </div> 
            
            <div className='sidebar__stats'>
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">2,543</p>

                </div>
                <div className="sidebar__stat">
<p>Views on Post</p>
<p className="sidebar__statNumber">2,583</p>

                </div>

            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('NextJs')}
                {recentItem('UX/UI')}
                {recentItem('Shopify')}
                {recentItem('Backend')}

            </div>
            
        </div>
    )
}

export default Sidebar
