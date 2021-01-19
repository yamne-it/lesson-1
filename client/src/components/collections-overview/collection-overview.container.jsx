import { compose } from 'redux'
import { useSelector } from 'react-redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.components'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)

const CollectionsOverviewContainer = compose(
    useSelector(selectIsCollectionsFetching),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer