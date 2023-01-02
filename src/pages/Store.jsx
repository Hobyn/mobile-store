
import React, { useEffect, useState } from "react";
import { BsCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, setItem } from "../services/localStorageFuncs.js";
import classes from './Cart.module.css'

const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinhoYt") || []);

  useEffect(() => {
    const FetchApi = async () => {
      const Url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(Url);
      const ObjJson = await response.json();
      setData(ObjJson.results);
    };
    FetchApi();
  }, []);

  const handleClick = (obj) => {
    const Element = cart.find((e) => e.id === obj.id);
    if (Element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinhoYt", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinhoYt", [...cart, obj]);
    }
  };
  return (
    <div>
      
      <div className={classes.cart}>
        {data.map((e) => (
           <div className={classes.child} key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{`R$ ${e.price}`}</h4>
            <button className={classes.button} onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
