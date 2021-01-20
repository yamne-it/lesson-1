import React, { useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
// import { auth, createUserProfileDocument, /*addCollectionAndItems*/ } from './firebase/firebase.utils';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const executeCheckUserSession = useCallback(() => dispatch(checkUserSession()), [
    dispatch,
  ]);
  // const collectionArray = useSelector(selectCollectionsForPreview);

  useEffect(() => {
    executeCheckUserSession()
  //   const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     //
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot((snapShot) => {
  //         setUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //     } else {
  //       setUser(userAuth);
  //     }
  //   });

  //   return () => {
  //     unsubscribeFromAuth();
  //   };
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  // useEffect(() => {
  //   addCollectionAndItems('collections', collectionArray.map(({title, items}) => ({title, items})));
  //   // eslint-disable-next-line 
  // }, [])

  const appLayout = (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );

  return appLayout;
};

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default App; //connect(null, mapDispatchToProps)(App);
