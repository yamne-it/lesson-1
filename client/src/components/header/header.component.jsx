import React, { useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions'

// import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles'
// const Header = ({ currentUser }) => {
const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch()
  const executeSignOutStart = useCallback(() => dispatch(signOutStart()), [
    dispatch,
  ])

  const headerLayout = (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={executeSignOutStart}>
            SIGN OUT
          </OptionDiv>
        ) : (
            <OptionLink to='/signin'>
              SIGN IN
            </OptionLink>
          )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );

  return headerLayout;
};

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

export default Header; //connect(mapStateToProps)(Header);
