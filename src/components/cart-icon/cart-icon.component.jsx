import React, { useCallback } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const toggleCart = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch,
  ]);

  const cartIconLayout = (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
  return cartIconLayout;
};

export default CartIcon;
