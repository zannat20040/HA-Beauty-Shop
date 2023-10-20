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
    const { loginUser,createUserByGoogle, googleSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
  

  const HandleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        
        const user = userCredential.user;
        console.log(user);
        swal("Welcome!", "You have logged in successfully!", "success");
        navigate(location?.state ?location.state : '/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        swal("Sorry!", errorMessage, "error");
      });
  };

  const GoogleSignInHandler = (e) => {
    e.preventDefault()
    // const provider = new GoogleAuthProvider();
    // const auth = getAuth(app);
    createUserByGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user)
        swal("Welcome!", "You have logged in successfully!", "success");
        navigate(location?.state ?location.state : '/')

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        swal("Sorry!", errorMessage, "error");
      });

      googleSignOut()
      .then((userCredential) => {
        e.target.reset();
        swal("Ops!",'You have logged out successfully' , "success");
        navigate("/");
        setLogin(true);
  
      })
      .catch((error) => {
        const errorMessage = error.message;
        swal("Sorry!", errorMessage, "error");
        setLogin(false);
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
