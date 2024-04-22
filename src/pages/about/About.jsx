import React from "react"
import Dropdown from "../../components/dropdown/Dropdown"
import Banner from "../../components/banner/Banner"
import imageBannerAbout from "../../components/banner/ImageAbout.jpg"

import "../about/About.scss"

function About() {
    return (
        <>
            <main>
                <Banner
                    imageSrc={imageBannerAbout}
                    altText="Forêt et montagnes enneigées"
                />
                <div className="about-content">
                    <Dropdown title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                    <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <Dropdown title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <Dropdown title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </main>



        </>
    );
}

export default About;