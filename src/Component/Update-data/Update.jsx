import React from 'react';
import Update_design from './Update_design';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const { _id } = useParams();
    const updatedProduct = useLoaderData();

    console.log(_id)
    console.log(updatedProduct)
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      },[]);

    return (
        <div>
            <Update_design></Update_design>
        </div>
    );
};

export default Update;