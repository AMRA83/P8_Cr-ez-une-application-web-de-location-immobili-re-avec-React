import '../accommodation/accommodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data.json'

import Carousel from "../../components/carousel/Carousel";

import Dropdown from "../../components/dropdown/Dropdown";
import Error404 from "../Error404/Error404";
import Tag from "../../components/tag/Tag";
import Rating from '../../components/rating/Rating';

function Accommodation() {

    const [imageSlider, setImageSlider] = useState([]);

    const { id } = useParams();
    const dataCurrentAccommodation = datas.find(data => data.id === id);

    useEffect(() => {
        if (dataCurrentAccommodation) {
            setImageSlider(dataCurrentAccommodation.pictures);
        }
    }, [id, dataCurrentAccommodation]);

    if (!dataCurrentAccommodation) {
        return <Error404 />;
    }

    const name = dataCurrentAccommodation.host.name.split(' ');
    const rating = dataCurrentAccommodation.rating;
    const description = dataCurrentAccommodation.description;
    const equipments = dataCurrentAccommodation.equipments;

    return (
        <div className='accomodation_wrapper'>

            <Carousel imageSlider={imageSlider} />
            <main className="accomodation">
                <div className="accomodation_content">
                    <div className="accomodation_content_infos">
                        <h1>{dataCurrentAccommodation.title}</h1>
                        <p>{dataCurrentAccommodation.location}</p>
                        <div>
                            {dataCurrentAccommodation.tags.map((tag, index) =>
                                <Tag key={index} tag={tag} />
                            )}
                        </div>
                    </div>
                    <div className="accomodation_content_host">
                        <div>
                            <div className='accomodation_content_host_name'>
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataCurrentAccommodation.host.picture} alt="host of this accomodation" />
                        </div>

                        <div className="accomodation_content_host_stars">
                            <Rating rating={rating} />
                        </div>
                    </div>
                </div>
                <div className="accomodation_dropdown">
                    <div className="accomodation_dropdown_item">
                        <Dropdown title={'Description'} content={description} />
                    </div>
                    <div className="accomodation_dropdown_item">
                        <Dropdown title={'Équipements'} content={equipments} />
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Accommodation;