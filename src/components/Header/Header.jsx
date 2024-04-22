import React from 'react';
import logo from '../Header/imageLogo.svg';
import '../Header/Header.scss';
import Navbar from './../navBar/Navbar';

function Header() {
    return (
        <header className='header'>
            <img className='header_img_logo' src={logo} alt="Logo Kasa" />
            <Navbar />
        </header>
    );
}

export default Header;