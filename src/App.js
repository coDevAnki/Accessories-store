import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import CheckoutPage from "./pages/Checkoutpage/CheckoutPage";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shoppage/ShopPage";
import SigninAndSignup from "./pages/SigninAndSignuppage/SigninAndSignup";
import { setUserAction } from "./redux/actions";
import { selectUser } from "./selectors/userSelectors";

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    let setteledAuth = auth.onAuthStateChanged(async (userAuth) => {
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
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SigninAndSignup />
          }
        />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { setCurrentUser: (user) => dispatch(setUserAction(user)) };
};
const mapStateToProps = (state) => {
  return { currentUser: selectUser(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
