import React from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import './../../pages/Home/Home.scss'

function Home() {
    return (
        <main className='home'>

            <Banner />
            <Card />

        </main>
    )
}

export default Home;