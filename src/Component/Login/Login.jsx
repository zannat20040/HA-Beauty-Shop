import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import swal from "sweetalert";
import app from "../../../Firebase/Firebase.config";
import { AuthContext } from "../Auth-Component/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, createUserByGoogle, googleSignOut } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const HandleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        swal("Welcome!", "You have logged in successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal("Sorry!", errorMessage, "error");
      });
  };

  const GoogleSignInHandler = (e) => {
    e.preventDefault();

    createUserByGoogle()
      .then((result) => {
        const user = result.user;
        swal("Welcome!", "You have logged in successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });

    googleSignOut()
      .then((userCredential) => {
        navigate("/");
        swal("Ops!", "You have logged out from this successfully", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <LoginForm
        HandleLogin={HandleLogin}
        GoogleSignInHandler={GoogleSignInHandler}
      ></LoginForm>
    </div>
  );
};

export default Login;
