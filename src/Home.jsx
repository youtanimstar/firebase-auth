import React, { useEffect, useState } from "react";
import { Style, auth } from "./Modules";

const Home = ({setSignup, setLogin}) => {
  const [name, setName] = useState("");
    useEffect(() => {
      auth.onAuthStateChanged((user)=>{
        if(user)
        {
          setName(user.displayName);

        }
        else{
          setName("");
        }
      })
    }, [auth]);

const displayMessage = ()=>{
  if(name)
  {
    return `Welcome back ${name}`
  }
  else{
    return `Please Login / Signup
    to Continue`
  }
}
  return (
    <>
      <h1 className={Style.heading}>
        {
         displayMessage()
        }

        
      </h1>
      <div className={Style.buttonSection}>
        <button className={Style.button} onClick={()=>setLogin(true)}>Login</button>
        <button className={Style.button} onClick={()=>setSignup(true)}>Signup</button>
      </div>
    </>
  );
};

export default Home;
