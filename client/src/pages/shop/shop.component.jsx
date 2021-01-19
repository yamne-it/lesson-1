import React, { useCallback, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// import CollectionPage from '../collection/collection.component'
import CollectionPageContainer from '../collection/collection.container'
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.component'
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
// import { updateCollections } from '../../redux/shop/shop.actions';
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// import WithSpinner from '../../components/with-spinner/with-spinner.components'

import './shop.styles.scss'

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = () => {
  // const history = useHistory
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const fetchCollectionStart = useCallback(() => dispatch(fetchCollectionsStart()), [dispatch]);

  useEffect(() => {
    fetchCollectionStart()
    // eslint-disable-next-line
  }, [])

  const shopLayout = (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} 
             component={CollectionsOverviewContainer}
      // render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} 
      />
      <Route exact path={`${match.path}/:collectionId`} 
             component={CollectionPageContainer}
      // render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} 
      />
    </div>
  );

  return shopLayout;
};


export default ShopPage;
