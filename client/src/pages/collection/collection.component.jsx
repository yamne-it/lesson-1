import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from "../../redux/shop/shop.selectors"

import './collection.styles.scss'

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector(useMemo(() => selectCollection(collectionId), [collectionId]));
    // const match = useRouteMatch()
    const { title, items } = collection

    const collectionPageLayout = (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (<CollectionItem key={item.id} item={item} />))}
            </div>
        </div>
    )
    return collectionPageLayout
}

export default CollectionPage