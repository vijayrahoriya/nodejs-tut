import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const SignUp = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/')//this stops sign up page to show if user sign in already
        }
    })

    const collectData = async()=>{
        // console.log(name,email,pass)
        let result = await fetch('http://localhost:5000/register', {
            method : 'post',
            body : JSON.stringify({name,email,pass}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result  = await result.json()
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result.result)) //to save data
        localStorage.setItem('token',JSON.stringify(result.auth)) //to save data
            navigate('/')
    }
    return(
        <div className="sign">
            <h1 className="heading">Register</h1>
            <input type="text" onChange={(e)=> setName(e.target.value)} value={name} placeholder="Enter your Name" />
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Enter your Email" />
            <input type="password" onChange={(e)=> setPass(e.target.value)} value={pass} placeholder="Enter your Password" />
            <button type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;