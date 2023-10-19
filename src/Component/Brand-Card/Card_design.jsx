import React from 'react';

const Card_design = ({brand}) => {
    // console.log(brand)
const  {brandName,image} = brand

    return (
        <div className=" bg-base-100 shadow-xl image-full rounded-none relative">
        <figure ><img src={image} alt="Shoes" className='w-full'/></figure>
        <div className="w-full h-full bg-black bg-opacity-40 flex-col items-start  rounded-none absolute bottom-0 flex justify-end left-0 right-0 bg-slate-800- p-5">
          <h2 className="card-title text-white">{brandName}</h2>
          <div className="card-actions w-36 mt-4 ">
            <button className=" btn py-3 bg-sky-200 border-0 px-8 font-bold w-full rounded-none">Visit</button>
          </div>
        </div>
      </div>
    );
};

export default Card_design;