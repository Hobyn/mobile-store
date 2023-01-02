import React, { useState } from "react";
import { setItem } from "../services/localStorageFuncs.js";
import { getItem } from "../services/localStorageFuncs.js";

const Login = (props) => {
  const user = getItem("usuario");
  const [name, setName] = useState(user.name || "");
  const [password, setPass] = useState(user.password || "");
  const [passwordInc, setPassInc] = useState(false)

  const cond = name.length > 3 && password.length > 5;

  const saveUser = (name, password) => {
    const {
      history: { push },
    } = props;
    if (name === user.name && password === user.pass) {
      push("/store");
      return
    }else if(name === user.name && password !== user.pass){
      setPassInc(true)
      return
    }
    setItem("usuario", { name, password });
    push("/store");
  };
  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        onChange={({ target: { value } }) => setName(value)}
        value={name}
      />

      <p>Password</p>
      <input
        type="password"
        onChange={({ target: { value } }) => setPass(value)}
        value={password}
      />
      {
        passwordInc && <p>Password incorrect</p>
      }

      <br />
      <br />
      <button
        type="button"
        onClick={() => saveUser(name, password)}
        disabled={!cond}
      >
        Sing in
      </button>
      <p>Nome + de 3 caracteres e Senha + de 5 caracteres</p>
    </div>
  );
};

export default Login;
