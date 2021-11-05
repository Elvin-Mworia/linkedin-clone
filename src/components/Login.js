import React,{useState} from 'react'
import './styles/login.css';
import {auth} from  "../firebase";
import {useDispatch} from 'react-redux';
import {login} from "./Slices/userSlice";

function Login() {
    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [profilePic,setProfilePic]=useState('');

const loginToApp=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
        dispatch(
            login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            })
        )}).catch((error)=>alert(error));
     

}

    const Register=()=>{
        if(!name){
            return alert("Please enter a Full name");
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            }).then(()=>{ dispatch(
                login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                })
            )}).catch((error)=>alert(error));

        });

    }
    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0_Tl5uNJQ9iIn_q7p58IjqxGssHu8PPhfVncCh3chLAOUWVapOvpfes_abz-XtJRXnw&usqp=CAU" alt=""/> 


            <form>
                <input placeholder='Full Name (Required if registering)' value={name} onChange={(e)=>setName(e.target.value)} type='text'/>
                <input placeholder='Profile pic url(Optional)' value={profilePic} onChange={e=>setProfilePic(e.target.value)} type='text'/>
                <input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.vlaue)} type='email'/>
                <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? <span className='login__register' onClick={Register}>Register Now</span></p>
            
        </div>
    )
}

export default Login
