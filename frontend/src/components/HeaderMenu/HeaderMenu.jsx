import { Link } from 'react-router-dom';
import HeaderLink from '../HeaderLink/HeaderLink';
import './HeaderMenu.sass';

function NavMenu(props) {
    return (
        <ul className="header__menu">
            <li className="header__menu__item">
                <HeaderLink text="Доска" path="/desk" isActive={true} />
            </li>
            <li>
                <HeaderLink text="Метрика" path="/desk" isActive={false} />
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
export default NavMenu;
