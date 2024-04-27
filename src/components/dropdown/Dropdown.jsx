import React, { useState } from 'react';
import '../dropdown/dropdown.scss';
import arrow_icon from '../dropdown/arrow.svg';

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className="dropdown-container ">
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="dropdown-title">{title}</span>
                <img
                    src={arrow_icon}
                    alt="Arrow Icon"
                    className={`dropdown-arrow ${isOpen ? 'rotated' : ""}`}
                />
            </button>
            <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
                {content}
            </div>
        </main>
    )
}

export default Dropdown