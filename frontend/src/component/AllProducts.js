import React, { useState, useEffect } from "react";
import axios from "axios";


export default function AllProducts() {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        function getProducts() {
            axios.get("http://localhost:8070/product/").then((res) => {
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
            
        </div>



    )



}
