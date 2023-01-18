import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`//for adding token to the apis
            }
        })
        result = await result.json();
        setProducts(result)
    }

    const deleteProduct = async (id) =>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:'delete',
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`//for adding token to the apis
            }
        })
        result = await result.json();
        if(result){
            getProducts();
        }
    }

    const searchProducts = async(e)=>{
        let key = e.target.value;
        // console.log(key)
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`//for adding token to the apis
                }
            })
            result = await result.json();
            if(result){
                setProducts(result)
            }
        }else{
            getProducts();
        }
    }

    // console.log(products)

    return (
        <div className="product-list">
            <h3>Products List</h3>
            <input type="text" className="searchInput" placeholder="Search product here" onChange={searchProducts} />
            <ul>
                <li>S.no.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? products.map((item,index) =>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li> ${item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                            <Link to={'/update/' + item._id}>Update</Link>
                        </li>
                    </ul>
                )
                : <h3>No result found</h3>
            }
        </div>
    )
}

export default Productlist