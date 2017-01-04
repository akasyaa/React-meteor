import React from 'react';

const ImageDetail = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.url} alt="img"/>
        </div>
    );
};

export default ImageDetail;
