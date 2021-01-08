import { useState } from "react";
import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <h1>Im Your App</h1>
      <h3>{user ? `The user is ${user}` : "No user Logged In"}</h3>
      <Login />
    </div>
  );
}

export default App;
