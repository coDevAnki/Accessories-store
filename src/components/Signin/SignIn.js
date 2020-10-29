import React, { useState } from "react";
import FormInput from "../FromInput/FormInput";
import Button from "../Button/Button"
import "./SignIn.scss"

const SignIn = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFields({ email: "", password: "" });
    console.log(fields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Already have an account</h1>
      <p>Sign in with your email and password</p>
      <div className="form-container">
      <FormInput
        name="email"
        id="useremail"
        type="email"
        label="Email"
        value={fields.email}
        handleChange={handleChange}
      />

      <FormInput
        name="password"
        id="userpassword"
        type="text"
        label="Password"
        value={fields.password}
        handleChange={handleChange}
      />
      <Button type="submit">submit</Button>
      </div>
    </form>
  );
};

export default SignIn;
