import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartDesign from "../Component/My-Cart/CartDesign";
import Swal from "sweetalert2";

const Cart = () => {
  const cart = useLoaderData();
  const [afterDelete, setAfterDelete] = useState(cart);
  const Handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Removed!", "Your product has been deleted from the cart.", "success");
              const remaining = afterDelete.filter(item=>item._id !== id)
              setAfterDelete(remaining)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="container mx-auto px-6 grid gap-6 py-28 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {afterDelete.map((data) => (
          <CartDesign data={data} Handledelete={Handledelete}></CartDesign>
        ))}
      </div>
    </div>
  );
};

export default Cart;
