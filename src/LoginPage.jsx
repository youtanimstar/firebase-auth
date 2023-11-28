import React, { useState } from "react";
import { Style, auth } from "./Modules";
import {  signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const LoginPage = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.reset();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form
      className={`${Style.Card} ${Style.login} ${open ? Style.active : ""}`}
      onSubmit={submit}
    >
      <input
        type="email"
        name="email"
        className={Style.input}
        placeholder="example@mail.com"
        onChange={handleChanges}
      />
      <input
        type="password"
        name="password"
        className={Style.input}
        placeholder="Password"
        onChange={handleChanges}
      />
      <input type="submit" value="Login" className={Style.button} />
      <button
        className={Style.button}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        Close
      </button>
    </form>
  );
};

export default LoginPage;
