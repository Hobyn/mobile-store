import React, { useState } from "react";
import { getItem } from "../services/localStorageFuncs.js";
import { AiFillCheckCircle } from "react-icons/ai";
import classes from "./Cart.module.css";
import Loading from "../components/Loading.jsx";

const Payment = (props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2500);
  const {
    params: { price },
  } = props.match;
  const user = getItem("usuario");
  return (
    <>
      {loading ? 
        <Loading />
       : (
        <div>
          <h2>Sua compra foi concluída com sucesso!!!</h2>
          <span>
            <AiFillCheckCircle className={classes.circle} />
          </span>
          <h3>{`Valor:R$  ${price}`}</h3>
          <h3>{`Comprador : ${user.name}`}</h3>
          <h3>{`Prazo: ${Math.ceil(Math.random() * 20) + 1} Dias`}</h3>
        </div>
      )}
    </>
  );
};

export default Payment;
