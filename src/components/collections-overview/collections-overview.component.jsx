import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss'

const CollectionsOverview = () => {
    const shopCollections = useSelector(selectCollectionsForPreview)

    const collectionsOverviewLayout = (
        <div className="collections-overview">
            {shopCollections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )

    return collectionsOverviewLayout
}

export default CollectionsOverview