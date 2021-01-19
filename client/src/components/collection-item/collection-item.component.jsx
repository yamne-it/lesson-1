import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
// import './collection-item.styles.scss';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();
  const addItemToCart = useCallback((item) => dispatch(addItem(item)), [
    dispatch,
  ]);

  const collectionItemLayout = (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItemToCart(item)} inverted>
          Add to cart
        </AddButton>
    </CollectionItemContainer>
  );

  return collectionItemLayout;
};

export default CollectionItem;
