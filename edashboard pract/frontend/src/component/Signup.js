import React,{useEffect} from 'react'
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate();
  useEffect(()=>{
    let auth = localStorage.getItem('customer');
    if(auth){
      navigate('/')
    }
  })

  const collectData = async() =>{
    let result = fetch('http://localhost:5000/register',{
      method:'post',
      body: JSON.stringify({name,email,pass}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    result = await result.JSON();
    localStorage.setItem('customer',JSON.stringify(result));
    navigate('/')
  }

  return (
    <div className='signup'>
      <h2>Register here</h2>
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter your name' />
      <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter your email' />
      <input type="password" onChange={(e)=>setPass(e.target.pass)} value={pass} placeholder='Enter your password' />
      <button onClick={collectData}>SingUp</button>
    </div>
  )
}
