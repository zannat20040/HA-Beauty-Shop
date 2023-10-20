import React from 'react';
import Update_design from './Update_design';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
  
    
    const dataFind = useLoaderData()
   console.log( dataFind)

    return (
        <div>
            <Update_design></Update_design>
        </div>
    );
};

export default Update;