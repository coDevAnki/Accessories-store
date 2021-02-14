import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useLocalStorage from "./custom-hooks/useLocalStorage";
import { auth, createUserProfile } from "./firebase/firebaseUtils";
import CheckoutPage from "./pages/Checkoutpage/CheckoutPage";
import CollectionPage from "./pages/Collectionpage/CollectionPage";
import ContactPage from "./pages/Contactpage/ContactPage";
import HomePage from "./pages/Homepage/HomePage";
import ItemPage from "./pages/Itempage/ItemPage";
import ShopPage from "./pages/Shoppage/ShopPage";
import SigninAndSignup from "./pages/SigninAndSignuppage/SigninAndSignup";
import {
  setCartAction,
  setUserAction,
  updateCollection,
} from "./redux/actions";
import { selectCartItems } from "./selectors/cartSelectors";
import { selectUser } from "./selectors/userSelectors";

const App = ({
  user,
  setCurrentUser,
  setCart,
  cartItems,
  updateCollection,
}) => {
  const [storedCart, setStoredCart] = useLocalStorage(
    "accessories_cart",
    cartItems
  );
  const [storedShop] = useLocalStorage("accessories_shop");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    console.log(storedShop);
    if (storedShop) updateCollection(storedShop);
    let setteledAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        try {
          let userRef = await createUserProfile(userAuth);
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
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
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/signin"
          render={() =>
            user.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
          }
        />
        <Route path="/checkout" render={() => <CheckoutPage />} />
        <Route
          exact
          path="/shop"
          render={({ match }) => <ShopPage match={match} />}
        />
        <Route
          exact
          path="/shop/:category"
          render={({ match: { params } }) => <CollectionPage {...params} />}
        />
        <Route
          path="/shop/:category/:nameId"
          render={({ match: { params } }) => <ItemPage params={params} />}
        />
        <Route path="/contact" render={() => <ContactPage />} />
      </Switch>
      <Footer />
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
  updateCollection: updateCollection,
})(App);
