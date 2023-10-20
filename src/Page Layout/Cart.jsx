import React from "react";
import { useLoaderData } from "react-router-dom";
import Card_design from "../Component/Brand-Card/Card_design";
import CartDesign from "../Component/My-Cart/CartDesign";

const Cart = () => {
  const cart = useLoaderData();
  console.log(cart);

  const Handledelete=()=>{

  }
  return (
    <div>
      <div className="container mx-auto px-6 grid gap-6 py-28 grid-cols-4">
      {
        cart.map(data=>(
          <CartDesign data={data} Handledelete={Handledelete}></CartDesign>
        ))
      }
      </div>
    </div>
  );
};

export default Cart;
