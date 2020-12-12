import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/Header/Header";
import useLocalStorage from "./custom-hooks/useLocalStorage";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import CheckoutPage from "./pages/Checkoutpage/CheckoutPage";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shoppage/ShopPage";
import SigninAndSignup from "./pages/SigninAndSignuppage/SigninAndSignup";
import { setCartAction, setUserAction } from "./redux/actions";
import { selectCartItems } from "./selectors/cartSelectors";
import { selectUser } from "./selectors/userSelectors";

const App = ({ user, setCurrentUser, setCart, cartItems }) => {
  const [storedCart, setStoredCart] = useLocalStorage(
    "accessories_cart",
    cartItems
  );
  const [firstRender, setFirstRender] = useState(true);
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

  useEffect(() => {
    if (!user.currentUser) {
      setCart([]);
    }
    if (user.currentUser) {
      setCart(storedCart);
    }
    return () => {
      setFirstRender(false);
    };
  }, [user.currentUser]);

  useEffect(() => {
    if (!firstRender && user.currentUser) setStoredCart(cartItems);
  }, [cartItems]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <HomePage doTransition={true} />} />
        <Route
          path="/shop"
          render={({ match }) => <ShopPage  match={match} doTransition={true}/>}
        />
        <Route
          exact
          path="/signin"
          render={() =>
            user.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
          }
        />
        <Route path="/checkout" render={() => <CheckoutPage />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, {
  setCurrentUser: setUserAction,
  setCart: setCartAction,
})(App);
