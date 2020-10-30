import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebaseUtils";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shoppage/ShopPage";
import SigninAndSignup from "./pages/SigninAndSignuppage/SigninAndSignup";

const App = () => {
  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let stteledAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        let { displayName, email } = user;
        setCurrentUser({ name: displayName, email: email });
      } else setCurrentUser(null);
    });

    return stteledAuth;
  }, [currentUser]);

  return (
    <div>
      <Header isSignedIn={!!currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
};

export default App;
