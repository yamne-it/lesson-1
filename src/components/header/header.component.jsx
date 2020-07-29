import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

// const Header = ({ currentUser }) => {
const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const headerLayout = (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );

  return headerLayout;
};

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

export default Header; //connect(mapStateToProps)(Header);
