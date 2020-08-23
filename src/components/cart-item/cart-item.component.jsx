import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, quantity, name } }) => {
  const cartIemLayout = (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );

  return cartIemLayout;
};

export default CartItem;
