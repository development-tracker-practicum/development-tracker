import React from 'react';
import './HeaderLink.sass';
import { Link } from 'react-router-dom';
function HeaderLink({ path, text, isActive }) {
    return (
        <Link
            className={`header-menu__link ${
                isActive && 'header-menu__link_active'
            }`}
            to="path"
        >
            {text}
        </Link>
    );
}
export default HeaderLink;
