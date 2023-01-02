import React, { useState } from "react";
import { getItem, setItem } from "../services/localStorageFuncs.js";
const ProfileEdit = (props) => {
  const user = getItem('usuario')
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email ||"");
  const [password, setPassword] = useState(user.password ||"");
  const [image, setImage] = useState(user.image ||"");
  const [cpf, setCpf] = useState(user.cpf ||"");

  const cond =(
    name.length > 3 &&
    (email.includes("@") &&
    email.length > 8) &&
    password.length > 8 &&
    image.length > 4 &&
    cpf.length === 11
  )

  const saveChanges = () => {
    setItem('usuario', {name, email, password, image, cpf})
    const {history: {push}} = push
    push('/profile')
  }

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />

      <p>Email</p>
      <input
        type="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />

      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />

      <p>Image Url</p>
      <input
        type="text"
        value={image}
        onChange={({ target: { value } }) => setImage(value)}
      />

      <p>CPF</p>
      <input
        type="number"
        value={cpf}
        onChange={({ target: { value } }) => setCpf(value)}
      />
      <br />
      <br />
      <button disabled={!cond}
        onClick={saveChanges}
      >Save Changes</button>
    </div>
  );
};

export default ProfileEdit;
