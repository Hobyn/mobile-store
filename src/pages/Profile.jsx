import React from "react";
import { getItem } from "../services/localStorageFuncs.js";

const Profile = (props) => {
  const user = getItem("usuario");

  const toProfileEdit = () => {
    const {
      history: { push },
    } = props;
    push("/profile/edit");
  };
  return (
    <div>
      <p>Seja bem vindo de volta {user.name}</p>
      <p>Seu cpf {user.cpf}</p>
      <p>seu email cadastrado {user.email}</p>
      <img src={user.image} alt="" />
      <br/><br/>
      <button onClick={toProfileEdit}>Editar Perfil</button>
    </div>
  );
};

export default Profile;
