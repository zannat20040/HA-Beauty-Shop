import React, { useEffect, useState } from 'react';
import Card_design from './Card_design';

const Card = () => {
    const [allBrands, setAllBrand] = useState([])
    useEffect(()=>{
        fetch('https://brand-shop-server-9mwhof67g-zannat20040.vercel.app/')
        .then(res=>res.json())
        .then(data=>setAllBrand(data))
    },[])
    return (
        <>
        <p className=" mt-10 text-sm uppercase tracking-[10px] text-center">visit our shop</p>
        <h1 className=' text-center mb-10 text-5xl uppercase text-slate-800 '>Choose Your Brand</h1>
         <div className='grid grid-cols-3 gap-5 container mx-auto justify-between'>
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