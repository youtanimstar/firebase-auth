import React, { useState } from "react";
import { Style, auth } from "./Modules";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignupPage = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
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

    // firebase authentication

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: formData.name
        })
        console.log(userCredential);
        setOpen(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <form
      className={`${Style.Card} ${Style.signup} ${open ? Style.active : ""}`}
      onSubmit={submit}
    >
      <input
        type="text"
        name="name"
        className={Style.input}
        placeholder="Name"
        onChange={handleChanges}
      />
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
      <input type="submit" value="Signup" className={Style.button} />
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

export default SignupPage;
