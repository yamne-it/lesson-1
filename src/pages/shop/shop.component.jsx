import React, { useState, useCallback, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.components'

import './shop.styles.scss'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = () => {
  // const history = useHistory
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const updateCollectionsToDB = useCallback((collectionsMap) => dispatch(updateCollections(collectionsMap)), [
    dispatch,
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const unsubscribeFromSnapshot = null
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsToDB(collectionsMap)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  const shopLayout = (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
    </div>
  );

  return shopLayout;
};


export default ShopPage;
