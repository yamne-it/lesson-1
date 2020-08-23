import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { imageUrl, price, quantity, name } }) => {
  const dispatch = useDispatch();

  const checkoutItemLayout = (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-button'>&#10005;</span>
    </div>
  );

  return checkoutItemLayout;
};

export default CheckoutItem;
