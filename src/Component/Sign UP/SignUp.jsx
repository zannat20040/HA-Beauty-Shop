import React, { useContext } from "react";
import SignupForm from "./SignupForm";
import { getAuth, updateProfile } from "firebase/auth";
import swal from "sweetalert";
import app from "../../../Firebase/Firebase.config";
import { AuthContext } from "../Auth-Component/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const HandleRegister = (e) => {
    e.preventDefault();
    const strongPass = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])/;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;

    if (password.length < 6) {
      swal("Password length should be more than 6 character.");

      return;
    } else if (!strongPass.test(password)) {
      swal(
        "Password should be contains capital letter and special character must."
      );
      return;
    }

    // const auth = getAuth(app);
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        e.target.reset();
        updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("User profile updated successfully.");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });

        swal("Great!", "You have created an account successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errormsg = error.message;
        swal("Ops, Sorry!", errormsg, "error");
      });
  };

  return (
    <div>
      <SignupForm HandleRegister={HandleRegister}></SignupForm>
    </div>
  );
};

export default SignUp;
