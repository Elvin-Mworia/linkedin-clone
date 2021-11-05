import React,{useState,useEffect} from 'react'
import CreateIcon from "@material-ui/icons/Create";
import "./styles/feed.css";
import Post from './Post';
import InputOptions  from './InputOption';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import {db} from "../firebase";
import firebase from 'firebase';

function Feed() {
    const [posts,setPosts]=useState([]);
    const [input,setInput]=useState('')
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            })

            ))
        })
    },[]);

    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            post:'Elvin Mworia',
            description:'This is a test',
            message:input,
            photourl:'',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        })
        setInput('');
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input}  onChange={e=> setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>

                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOptions Icon={SubscriptionIcon} title='Video' color='#C0CBCD'/>
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/>
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#70B5F9'/>
                </div>
            </div>

            {posts.map(({id,data:{name,description,message,photourl}})=>(
                <Post key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}
                />
            ))}
            <Post name="Elvin Mworia" description='this is a test' message="post component"/>
            
        </div>
    )
}

export default Feed
