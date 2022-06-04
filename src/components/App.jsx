import React, {useState} from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import axios from "axios"

function App() {

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null)

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register"
    })
      .then((res) => console.log(res));
  }
  
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login"
    })
      .then((res) => console.log(res));
  }


  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user"
    })
        .then((res) => setData(res.data));
  }
  
  
  return (
    <div className="App">
      <div>
        <h1> register</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h1> login</h1>
        <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1> get user</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1> welcome {data.username} </h1>: null } 
      </div>

    </div>
  );
}

export default App;
