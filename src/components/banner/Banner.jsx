import React from 'react';

import './../banner/Banner.scss';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Banner() {

    const [aboutPage, setAboutPage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            setAboutPage(true)
        };

    }, [])

    return (
        <section className={aboutPage ? 'banner_about' : 'banner'}>
            {!aboutPage && <h2 className='banner_title'>Chez vous, partout et ailleurs</h2>}
        </section>
    )
}

export default Banner;