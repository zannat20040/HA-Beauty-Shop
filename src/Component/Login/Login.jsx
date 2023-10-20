import React from "react";
import LoginForm from "./LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";
import app from "../../../Firebase/Firebase.config";

const Login = () => {
  const HandleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        swal("Welcome!", "You have logged in successfully!", "success");

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        swal('Sorry!', errorMessage, "error");

      });
  };
  return (
    <div>
      <LoginForm HandleLogin={HandleLogin}></LoginForm>
    </div>
  );
};

export default Login;
