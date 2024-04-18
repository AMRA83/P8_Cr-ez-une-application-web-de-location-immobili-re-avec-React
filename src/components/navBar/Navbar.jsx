import React from 'react';
import '../navBar/Navbar.scss';


import { NavLink } from 'react-router-dom';
function Navbar() {

    return (
        <nav>
            <ul className='nav-list'>
                <li> <NavLink to="/" >  Accueil</NavLink></li>
                <li> <NavLink to="/about"> À Propos</NavLink> </li>
            </ul>
        </nav>
    )

}

export default Navbar;