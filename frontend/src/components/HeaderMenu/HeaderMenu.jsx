import { useLocation } from 'react-router-dom';
import { HeaderLink } from '../HeaderLink/HeaderLink';
import './HeaderMenu.sass';

function HeaderMenu(properties) {
    const location = useLocation();
    return (
        <ul className="header__menu">
            <li className="header__menu__item">
                <HeaderLink
                    text="Доска"
                    path="/diary/desk"
                    isActive={location.pathname === '/diary/desk'}
                />
            </li>
            <li>
                <HeaderLink
                    text="Метрика"
                    path="/diary/metrika"
                    isActive={location.pathname === '/diary/metrika'}
                />
            </li>

            {/* <Link
                className="nav-menu__link nav-menu__link_name_desk nav-menu__link_active"
                to="/desk"
            >
                Доска
            </Link>
            <Link
                className="nav-menu__link nav-menu__link_name_metric"
                to="/metric"
            >
                Метрики
            </Link> */}
        </ul>
    );
}

export { HeaderMenu };
