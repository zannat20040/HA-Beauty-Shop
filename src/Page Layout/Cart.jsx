import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartDesign from "../Component/My-Cart/CartDesign";
import Swal from "sweetalert2";
import { AuthContext } from "../Component/Auth-Component/AuthProvider";
import axios from "axios";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const cart = useLoaderData();
  const filteredCart = cart.filter((data) => data.currentUser == user.email);

  const [afterDelete, setAfterDelete] = useState(filteredCart);
  const Handledelete = (id) => {
    console.log(id)
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
        axios
          .delete(`https://ha-beauty-server.vercel.app/cart/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire(
              "Removed!",
              "Your product has been deleted from the cart.",
              "success"
            );
            const remaining = afterDelete.filter((item) => item._id !== id);
            setAfterDelete(remaining);
          })
          .catch((err) => {
            console.log(err);
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
