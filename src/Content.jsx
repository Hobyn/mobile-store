import { Switch, Route } from "react-router-dom";
import React from "react";
import Store from "./pages/Store.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";
import Payment from "./pages/Payment.jsx";
const Content = () => {
  return (
    <Switch>
      <Route path={'/payment/:price'} component={Payment} />
      <Route path="/profile/edit" component={ProfileEdit}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/cart" component={Cart} />
      <Route path="/store" component={Store} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Content;
