import React from "react";
import locations from "../../data/data.json";
import '../card/card.scss';
import { Link } from "react-router-dom";

function Card() {
    return (
        <div className="gallery">
            {locations.map((location) => (
                <div className="card" key={location.id}>
                    <h2>{location.title}</h2>
                    <Link to={`/accommodation/${location.id}`}>
                        <img
                            className="card_img"
                            src={location.cover}
                            alt={`Cover of ${location.title}`}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Card;