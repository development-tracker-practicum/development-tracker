import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenuLink.sass';

function SideMenuLink({ path, textContent, icon }) {
    return (
        <Link className="side-menu__link" to={path}>
            <div
                className="side-menu__link-image"
                style={{
                    backgroundImage: `url(${icon})`,
                }}
            ></div>
            <p className="side-menu__link-text">{textContent}</p>
        </Link>
    );
}
export default SideMenuLink;
