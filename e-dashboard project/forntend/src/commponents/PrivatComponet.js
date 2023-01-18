import React from "react";
import {Navigate, Outlet} from 'react-router-dom'//outlet props ko handle karega

const PrivatComponent = ()=>{
    const auth = localStorage.getItem('user');
    return auth? <Outlet/> : <Navigate to='/signup'></Navigate>
}

export default PrivatComponent;