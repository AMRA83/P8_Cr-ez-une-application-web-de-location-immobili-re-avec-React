import React from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import './../../pages/Home/Home.scss'
import imageHome from "../../components/banner/ImageHome.png"

function Home() {
    return (
        <main className='home'>

            <Banner picture={imageHome}
                alt="Image de falaise"
                title="Chez vous, partout et ailleurs" />
            <Card />

        </main>
    )
}

export default Home;