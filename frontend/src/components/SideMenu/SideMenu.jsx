import './SideMenu.sass';
import SideMenuLink from '../SideMenuItem/SideMenuLink';
import arrowIcon from '../../Images/arrow-icon.svg';
import vanacyIcon from '../../Images/vacancy-icon.svg';
import masterskayaIcon from '../../Images/masterskaya-icon.svg';
import dnenvinIcon from '../../Images/dnevnik-icon.svg';
import contactIcon from '../../Images/contact-icon.svg';
import lentaIcon from '../../Images/lenta-icon.svg';
import infoIcon from '../../Images/info-icon.svg';
import exitIcon from '../../Images/exit-icon.svg';
import Button from '../Button/Button';
function SideMenu(props) {
    return (
        <nav className="side-menu">
            <ul className="side-menu__list">
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Трек развития"
                        path="/tracking"
                        icon={arrowIcon}
                    />
                </li>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Вакансии"
                        path="/vacancy"
                        icon={vanacyIcon}
                    />
                </li>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Мастерская"
                        path="/masterskaya"
                        icon={masterskayaIcon}
                    />
                </li>
                <div className="side-menu__break-line"></div>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Дневник"
                        path="/diary"
                        icon={dnenvinIcon}
                    />
                </li>
                <div className="side-menu__break-line"></div>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Контакты"
                        path="/contact"
                        icon={contactIcon}
                    />
                </li>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Лента"
                        path="/lenta"
                        icon={lentaIcon}
                    />
                </li>
            </ul>
            <ul className="side-menu__list">
                <Button place="side-menu" textButton="Оффер принят" />
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Уйти в отпуск"
                        path="/vacation"
                        icon={lentaIcon}
                    />
                </li>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Инфо профиля"
                        path="/info"
                        icon={infoIcon}
                    />
                </li>
                <li className="side-menu__item">
                    <SideMenuLink
                        textContent="Выход"
                        path="/"
                        icon={exitIcon}
                    />
                </li>
            </ul>
        </nav>
    );
}
export default SideMenu;
