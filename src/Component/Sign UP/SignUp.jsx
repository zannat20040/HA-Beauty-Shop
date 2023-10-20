import React from "react";
import SignupForm from "./SignupForm";
import auth from "../../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import swal from "sweetalert";
import app from "../../../Firebase/Firebase.config";

const SignUp = () => {
  const HandleRegister = (e) => {
    e.preventDefault();
    const strongPass = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])/;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;

    // console.log(email, password, name, image);

    if (password.length < 6) {
      swal("Password length should be more than 6 character.");

      return;
    } else if (!strongPass.test(password)) {
        swal("Password should be contains capital letter and special character must.");
      return;
    }
    const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    e.target.reset();
    console.log(user)
     user.displayName = name
     user.photoURL = image
     swal("Great!", "You have created an account successfully!", "success");
  })
  .catch((error) => {
    console.log(error)
    const errormsg = error.message
    swal('Ops, Sorry!', errormsg, "error");

  });

  };
  // const registerSuccess=()=>{
  //     console.log('word')
  // }
  return (
    <div>
      <SignupForm HandleRegister={HandleRegister}></SignupForm>
    </div>
  );
};

export default SignUp;
