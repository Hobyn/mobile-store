import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";



const Header = () => {


  return (
    <header className={classes.header}>
      <Link className={classes.a} to="/store">
        Store
      </Link>
      <Link className={classes.a} to="/cart">
        Cart
      </Link>
      <Link to="profile">My Profile</Link>
    </header>
  );
};

export default Header;
