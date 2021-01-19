import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { imageUrl, price, quantity, name } = item;
  const dispatch = useDispatch();
  const clearItem = useCallback((item) => dispatch(clearItemFromCart(item)), [
    dispatch,
  ]);
  const addItemToCart = useCallback((item) => dispatch(addItem(item)), [
    dispatch,
  ]);
  const removeItemFromCart = useCallback((item) => dispatch(removeItem(item)), [
    dispatch,
  ]);

  const checkoutItemLayout = (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );

  return checkoutItemLayout;
};

export default CheckoutItem;
