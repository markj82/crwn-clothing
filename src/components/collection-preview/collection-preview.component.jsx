import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

// this can be a performance concern
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    //            destructure here
                    .map(({ id, ...otherItemProps }) => (
                        //                              and spread
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;