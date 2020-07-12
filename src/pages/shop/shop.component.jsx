import React, { useState } from 'react'

import SHOP_DATA from './shop.data.js'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = (props) => {
    const [collections, setCollections] = useState(SHOP_DATA)

    const shopLayout = (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )

    return shopLayout
}

export default ShopPage;
