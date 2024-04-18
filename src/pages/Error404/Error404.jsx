import React from 'react';
import './Error404.scss';

import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className='Error404'>

            <div className="Error404_infos">
                <h1 className='Error404_infos_title'>404</h1>
                <p className='Error404_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='Error404_infos_return' to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error404;

