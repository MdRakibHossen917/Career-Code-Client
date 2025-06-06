import React, { use, useState } from "react";
import signInLottieFile from "../../assets/SignIn.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import SocialLogIn from "../Shared/SocialLogIn";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser,setLoading } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  console.log('Location in sign in page',location)

  const [errorMessage,setErrorMessage]=useState()
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    //SignIn user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from)
        // alert("login successful");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/*Lottie Animation*/}
          <Lottie
            style={{ width: "300px" }}
            animationData={signInLottieFile}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold">SignIn Now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <p className="text-orange-600">{errorMessage}</p>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            {/*from kon jayga theke eseche seta k props kore pathacchi */}
            <SocialLogIn from={from}></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
