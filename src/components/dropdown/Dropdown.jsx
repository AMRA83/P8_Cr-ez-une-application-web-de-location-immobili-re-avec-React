import React, { useState } from 'react';
import '../dropdown/dropdown.scss';
import arrow from '../dropdown/arrow.svg';

function Dropdown({ title, content }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="dropdown">
            <h3 className='dropdown_title' onClick={() => setToggle(!toggle)}>
                {title}
                <img
                    className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                    src={arrow}
                    alt="show content"
                />
            </h3>
            <div className={toggle ? 'dropdown_content' : 'dropdown_content_hidden'}>
                {Array.isArray(content) ? content.map((item, index) => (
                    <p key={index}>{item}</p>
                )) : content}
            </div>
        </div>
    );
}

export default Dropdown;