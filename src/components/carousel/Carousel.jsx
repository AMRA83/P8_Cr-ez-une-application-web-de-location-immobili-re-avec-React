import React, { useState, useEffect } from 'react';
import '../carousel/carousel.scss';
import ArrowRight from '../../components/carousel/arrow_right.svg';
import ArrowLeft from '../../components/carousel/arrow_left.svg';

function Carousel({ imageSlider }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1);
    };

    return (
        <div className='carousel'>
            {imageSlider.length > 0 && (
                <>
                    <img
                        className='carousel_image'
                        src={imageSlider[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                    />
                    <img
                        className='carousel_arrow carousel_arrow_right'
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className='carousel_arrow carousel_arrow_left'
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    {isWideScreen && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}
                </>
            )}
        </div>
    );
}

export default Carousel;