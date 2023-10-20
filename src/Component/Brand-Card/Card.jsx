import React, { useEffect, useState } from 'react';
import Card_design from './Card_design';

const Card = () => {
    const [allBrands, setAllBrand] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setAllBrand(data))
    },[])


    return (
        <>
        <p className=" mt-5 text-sm uppercase tracking-[10px] text-center">visit our shop</p>
        <h1 className=' text-center mb-10 text-5xl uppercase text-blue-950 font-semibold'>Choose Your Brand</h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-6 container mx-auto justify-between'>
         {
            allBrands.map(brand=>(
                <Card_design brand={brand} key={brand._id}></Card_design>
            ))
         }
         </div>
        </>   

    );
};

export default Card;