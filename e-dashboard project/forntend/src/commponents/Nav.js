import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/singup')
    }
    return(
        <div>
            <img className='logo' src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000' alt='Logo'/>
            {
            auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to='/signup' onClick={logout}>Logout({JSON.parse(auth).name})</Link></li>
                {/* <li>{ auth ? <Link onClick={logout} to="/signup">Logout</Link> : <Link to="/signup">SignUp</Link>}
                </li> */}
                {/* <li><Link to='/login'>Login</Link></li> */}
            </ul>
            : 
            <ul className='nav-ul signpage'>
                <>
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    </>
            </ul>
            }

        </div>
    )
}

export default Nav;