import React,{useEffect} from 'react'
import './App.css';
import Login from './components/Login';
import  Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import  Header from './components/Header';
import {selectUser} from './components/Slices/userSlice';
import {useSelector} from 'react-redux';
import {auth} from "./firebase";
import {login,logout} from "./components/Slices/userSlice";
import {useDispatch} from "react-redux";

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

useEffect(()=>{
auth.onAuthStateChanged((userAuth)=>{
  if(userAuth){
    dispatch(login({
      email:userAuth.email,
      uid:userAuth.uid,
      displayName:userAuth.displayName,
      photoUrl:userAuth.photoUrl,
    }))

  }else{
    dispatch(logout());

  }

})
})
  
  return (
    <div className="App">
      <Header/>
      
      <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>

     
    </div>
  );

  }
export default App;
