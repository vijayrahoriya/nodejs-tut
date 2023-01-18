import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate, useParams } from 'react-router-dom';//for getting params parameter

const UpdateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const parmas = useParams();
    const Navigate = useNavigate();

    useEffect(()=>{
        getProductDetails()
    },[])

    const getProductDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${parmas.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`//for adding token to the apis
            }
        })
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        // console.log(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${parmas.id}`,{
            method:'put',
            body: JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        Navigate('/')
    }

    return (
        <div className='addProduct'>
            <div className="add">
                <h1 className='heading'>Update Product</h1>

                <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter Product name' />

                <input type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder='Enter Product price' />

                <input type="text" onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder='Enter Product category' />

                <input type="text" onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder='Enter Product company' />

                <button onClick={updateProduct}>Update Product</button>
            </div>
        </div>
    )
}

export default UpdateProduct;