import Home from "./Home";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { Style } from "./Modules";
import { useState } from "react";
function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  
  return (
    <>
      <div className={Style.container}>
        <Home setSignup={setSignup} setLogin={setLogin}/>
        <SignupPage open={signup} setOpen={setSignup}/>
        <LoginPage open={login} setOpen={setLogin}/>
      </div>
    </>
  );
}

export default App;
