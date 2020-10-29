import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shoppage/ShopPage";
import SigninAndSignup from "./pages/SigninAndSignuppage/SigninAndSignup";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
};

export default App;
