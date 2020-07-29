import React, { useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const setUser = useCallback((user) => dispatch(setCurrentUser(user)), [
    dispatch,
  ]);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setUser]);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  const appLayout = (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );

  return appLayout;
};

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default App; //connect(null, mapDispatchToProps)(App);
