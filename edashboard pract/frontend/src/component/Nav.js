import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    let auth = localStorage.getItem('customer')
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            {auth ? <ul className='nav-ul'>
                <li><Link to='/'>Products</Link> </li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li onClick={logout}><Link to='/signup'>Logout({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='nav-ul'>
                <li><Link to='/signup'>Signup</Link></li> 
                <li><Link to='/login'>Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;