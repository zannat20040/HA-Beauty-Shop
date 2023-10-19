import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowProduct = () => {
    const { brandName } = useParams();
    console.log(brandName)
    const serviceData = useLoaderData();

    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        fetch(`https://brand-shop-server-hwael8aj0-zannat20040.vercel.app/${brandName}/products`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[brandName])
    return (
        <div>
            
        </div>
    );
};

export default ShowProduct;