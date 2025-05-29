import React, { use } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/register.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import SocialLogIn from "../Shared/SocialLogIn";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/*Lottie Animation*/}
          <Lottie
            style={{ width: "300px" }}
            animationData={registerLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Registration Now!</h1>
            <form onSubmit={handleRegister}>
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
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            {/*Social LogIn */}
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
