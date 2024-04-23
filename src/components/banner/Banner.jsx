import React from 'react';

import './../banner/Banner.scss';

function Banner({ picture, alt, title }) {
    return (
        <div className="banner">
            <img className="banner_img" src={picture} alt={alt} />
            <h1 className="banner_title">{title}</h1>
        </div>
    )
}

export default Banner;