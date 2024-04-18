import React from 'react';
import StarInactive from '../rating/star-inactive.png';
import StarActive from '../rating/star-active.png';

function Rating({ rating }) {
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? StarActive : StarInactive} alt="star" />
                );
            })}
        </div>
    );
}

export default Rating;