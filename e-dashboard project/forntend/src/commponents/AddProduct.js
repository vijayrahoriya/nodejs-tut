import React, { useState } from 'react';
import '../App.css'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [error, setError] = useState(false)

    const AddProduct = async () => {
        console.log(name, price, category, company)
        const userId = JSON.parse(localStorage.getItem('user'))._id
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
        })
        result = await result.json();
        alert('Your product has been added')
        setName('')
        setPrice('')
        setCategory('')
        setCompany('')
        // console.log(userId, result)
    }

    return (
        <div className='addProduct'>
            <div className="add">
                <h1 className='heading'>Add Product</h1>

                <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter Product name' />
                {error && !name && <span className="invalid-input price">Enter valid name</span>}

                <input type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} placeholder='Enter Product price' />
                {error && !price && <span className="invalid-input price">Enter valid price</span>}

                <input type="text" onChange={(e) => { setCategory(e.target.value) }} value={category} placeholder='Enter Product category' />
                {error && !category && <span className="invalid-input">Enter valid category</span>}

                <input type="text" onChange={(e) => { setCompany(e.target.value) }} value={company} placeholder='Enter Product company' />
                {error && !company && <span className="invalid-input">Enter valid company</span>}

                <button onClick={AddProduct}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct;