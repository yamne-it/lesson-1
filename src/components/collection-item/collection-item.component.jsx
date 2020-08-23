import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();
  const addItemToCart = useCallback((item) => dispatch(addItem(item)), [
    dispatch,
  ]);

  const collectionItemLayout = (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );

  return collectionItemLayout;
};

export default CollectionItem;
