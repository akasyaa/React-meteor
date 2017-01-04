import React from 'react';

import ImageDetail from './image_detail'

const IMAGES = [
    { title: 'Pen', url: 'http://dummyimage.com/600x400' },
    { title: 'Pine Tree', url: 'http://dummyimage.com/600x400' },
    { title: 'Mug', url: 'http://dummyimage.com/600x400' }
]

const ImageList = () => {
    const renderImages = IMAGES.map(({ title, url }) => {
        return <ImageDetail key={title} title={title} url={url} />
    })

    return (
        <ul className="media-list list-group">
            {renderImages}
        </ul>
    );
};

export default ImageList;
