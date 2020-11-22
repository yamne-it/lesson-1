import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { useParams, useRouteMatch } from "react-router-dom";

// import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from "../../redux/shop/shop.selectors"

import './collection.styles.scss'

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector(useMemo(() => selectCollection(collectionId), [collectionId]));
    // const match = useRouteMatch()

    console.log(collection)
    const collectionPageLayout = (
        <div className="collection-page">
            <h2>CATEGORY_PAGE</h2>
        </div>
    )
    return collectionPageLayout
}

export default CollectionPage