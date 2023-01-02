import React, { useState } from "react";
import { getItem, setItem } from "../services/localStorageFuncs.js";
import { BsFillCartDashFill } from "react-icons/bs";
import classes from './Cart.module.css'




const Cart = (props) => {
  const [data, setData] = useState(getItem("carrinhoYt") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinhoYt", arrFilter);
  };

  const handleClick = () => {
    const {history: {push}} = props;
    push(`/payment/${subTotal}`)
    setItem('carrinhoYt', [])
  }

  const subTotal = data.reduce((acc, cur) => acc + cur.price ,0)
  return (
    <div >
      
      <h3>{`Subtotal:R$ ${subTotal}`}</h3>
      <div className={classes.cart}>
        {data.map((e) => (
          <div className={classes.child} key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>{`R$ ${e.price}`}</h4>
            <button className={classes.button} onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </div>
       <button
       disabled= {!subTotal > 0}
       onClick={handleClick}
       >Comprar</button>
       <br /><br />
    </div>
  );
};

export default Cart;
