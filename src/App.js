import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shoppage/ShopPage";
import SigninAndSignup from "./pages/SigninAndSignuppage/SigninAndSignup";
import { setUserAction } from "./redux/actions";

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    let setteledAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        try {
          let userRef = await createUserProfile(userAuth);
          userRef.onSnapshot((snapShop) => {
            setCurrentUser({
              id: snapShop.id,
              ...snapShop.data(),
            });
          });
        } catch (error) {
          console.log("error: ", error);
        }
      } else setCurrentUser(userAuth);
    });

    return setteledAuth;
  }, []);

  return (
    <div>
      <Header />
      {/* {currentUser?.email} */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { setCurrentUser: (user) => dispatch(setUserAction(user)) };
};

export default connect(null, mapDispatchToProps)(App);
