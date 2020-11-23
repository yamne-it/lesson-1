import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => {
  // const history = useHistory
  const match = useRouteMatch();

  const shopLayout = (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );

  return shopLayout;
};

export default ShopPage;
