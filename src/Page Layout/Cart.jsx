import React from "react";
import { useLoaderData } from "react-router-dom";
import CartDesign from "../Component/My-Cart/CartDesign";
import Swal from 'sweetalert2';


const Cart = () => {
  const cart = useLoaderData();
  console.log(cart);
  const Handledelete=(id)=>{
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}

  return (
    <div>
      <div className="container mx-auto px-6 grid gap-6 py-28 grid-cols-4">
      {
        cart.map(data=>(
          <CartDesign data={data} Handledelete={Handledelete} ></CartDesign>
        ))
      }
      </div>
    </div>
  );
};

export default Cart;
