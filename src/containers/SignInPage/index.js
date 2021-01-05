import React from "react";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="signin-container">
      <h1 className="signin-heading">Welcome Back</h1>
      <div className="signin-fields">
        <InputField
          type="email"
          Label="Email Address"
          placeholder="random@notmail.com"
        />
        <InputField type="password" Label="Password" placeholder="password" />
      </div>
      <Button className="primary" btnText="Sign In" />
      <div className="signin-links-container">
        <p className="signin-link-text">Don't Have an Account ?</p>
        <NavLink to="/sign-up" className="signin-link-ref">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default SignInPage;
