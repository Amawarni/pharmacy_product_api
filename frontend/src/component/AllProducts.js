import React, { useState, useEffect } from "react";
import axios from "axios";


export default function AllProducts() {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        function getProducts() {
            axios.get("http://localhost:8071/product/").then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err.message);
            })

        }
        
        
        getProducts();

    }, [])



    return(

        <div className= "container">
            <h1>All Products</h1>
            <a href ='#' className= 'btn btn-info'> Edit</a>
            <a href ='#' className= 'btn btn-danger ml-3'> Delete</a>
        </div>



    )



}
