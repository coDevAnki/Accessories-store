import React, { useState } from "react";
import { auth, siginWithGoogle } from "../../firebase/firebaseUtils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

const SignIn = () => {
  const [fields, setFields] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = fields;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFields({ email: "", password: "" });
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="form-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons">
          <Button type="submit">SIGN IN</Button>
          <Button onClick={siginWithGoogle}>SIGN IN WITH GOOGLE</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
