import React from "react";
import SignIn from "../../components/Signin/SignIn";
import SignUp from "../../components/Signup/SignUp";
import "./SigninAndSignup.scss";

const SigninAndSignup = () => {
  return (
    <div className="signin-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninAndSignup;
