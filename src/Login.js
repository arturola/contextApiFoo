import React from "react";
import { useStateValue } from "./StateProvider";

function Login({ setUser }) {
  const [state, dispatch] = useStateValue();

  const loginToApp = () => {
    dispatch({
      type: "SET_USER",
      user: "Arturo",
    });
  };

  return (
    <div>
      <h1>I am the Login</h1>
      <button onClick={loginToApp}>Login</button>
    </div>
  );
}

export default Login;
