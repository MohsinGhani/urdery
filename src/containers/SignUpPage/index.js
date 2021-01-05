import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../common/Button";
import InputField from "../../common/InputField";

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-heading">Create Account</h1>
      <div className="signup-fields">
        <InputField
          customClass="input-filed-width"
          type="text"
          Label="Name"
          placeholder="Random"
        />
        <InputField
          customClass="input-filed-width"
          type="email"
          Label="Email Adress"
          placeholder="random@notmail.com"
        />
      </div>
      <div className="signup-fields">
        <InputField
          customClass="input-filed-width"
          type="number"
          Label="Phone Number"
          placeholder="123 456 768"
        />
        <InputField
          customClass="input-filed-width"
          type="text"
          Label="Name of Business"
          placeholder="Something"
        />
      </div>
      <div className="signup-fields">
        <InputField
          customClass="input-filed-width"
          type="text"
          Label="Best Time to Ge Contacted"
          placeholder="11 pm"
        />
        <InputField
          customClass="input-filed-width"
          type="number"
          Label="Number of Locations"
          placeholder="2"
        />
      </div>
      <div className="signup-fields">
        <InputField
          customClass="input-filed-width"
          type="text"
          Label="Extra Information"
          placeholder="Be aware"
          textArea="textarea"
          rowNumber={3}
        />
        <InputField
          customClass="input-filed-width"
          type="password"
          Label="Password"
          placeholder="password"
        />
      </div>

      <Button className="primary" btnText="Sign Up" />
      <div className="signup-links-container">
        <p className="signup-link-text">Already Have an Account ?</p>
        <NavLink to="/sign-in" className="signup-link-ref">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default SignUpPage;
