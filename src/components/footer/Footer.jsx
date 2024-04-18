import React from 'react';
import '../footer/Footer.scss';
import ImageLogo from '../footer/imageLogoFooter.svg';

function Footer() {
    return (
        <footer className="footer">
            <img className='footer_img' src={ImageLogo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;