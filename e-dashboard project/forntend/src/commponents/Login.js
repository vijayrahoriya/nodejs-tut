import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import '../App.css';

const Login = ()=>{
    const [email , setEmail] = useState("")
    const [pass , setPass] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        let auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])
    const handleLogin = async()=>{
        // console.log(email, pass)
        let result = await fetch('http://localhost:5000/login',{
            method : "POST",
            body: JSON.stringify({email, pass}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        if(result.auth){
            localStorage.setItem('user',JSON.stringify(result.user))
            localStorage.setItem('token',JSON.stringify(result.auth))
            navigate('/')
        }else{
            alert('Please enter valid details')
        }
        console.log(result)
    }
    return(
        <div className="login">
            <h1 className="heading">LogIn</h1>
            <input type="text" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
            <input type="password" placeholder="Enter Password" onChange={(e)=>{setPass(e.target.value)}} value={pass} />
            <button onClick={handleLogin} type="button">Login</button>
        </div>
    )
}

export default Login