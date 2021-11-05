import React from 'react'
import "./styles/Post.css"
import  InputOptions from './InputOption';
import {Avatar} from "@material-ui/core"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";



function Post({name,description,message,photourl}) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                <h2>Elvin Mworia</h2>
                <p>Description</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>

            </div>
         <div className="post__button">
             <InputOptions Icon={ThumbUpAltOutlinedIcon} title='Like' color="gray"/>
             <InputOptions Icon={ChatOutlinedIcon} title='Comment' color="gray"/>
             <InputOptions Icon={ShareOutlinedIcon} title='Share' color="gray"/>
             <InputOptions Icon={SendOutlinedIcon} title='Send' color="gray"/>
         </div>
        </div>
    )
}

export default Post
