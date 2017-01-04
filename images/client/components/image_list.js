import React from 'react';

import ImageDetail from './image_detail'

const ImageList = (props) => {
    const nonAlbumImgs = props.images.filter(image => !image.is_album);

    const renderImages = nonAlbumImgs.map((image) => {
        return <ImageDetail key={image.title} image={image} />
    });

    return (
        <ul className="media-list list-group">
            {renderImages}
        </ul>
    );
};

export default ImageList;
