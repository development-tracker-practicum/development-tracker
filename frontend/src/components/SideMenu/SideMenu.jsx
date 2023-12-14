import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
import { SideMenuLink } from '../SideMenuLink/SideMenuLink';
import { Button } from '../Button/Button';
import arrowIcon from '../../Images/arrow-icon.svg';
import vanacyIcon from '../../Images/vacancy-icon.svg';
import masterskayaIcon from '../../Images/masterskaya-icon.svg';
import dnenvinIcon from '../../Images/dnevnik-icon.svg';
import contactIcon from '../../Images/contact-icon.svg';
import lentaIcon from '../../Images/lenta-icon.svg';
import infoIcon from '../../Images/info-icon.svg';
import exitIcon from '../../Images/exit-icon.svg';
import './SideMenu.sass';
import { useEffect } from 'react';

function SideMenu() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isDiaryLocation = location.pathname.includes('/diary');
  const isTrackLocation = location.pathname.includes('/track');

  function handleLogout() {
    dispatch(logout());
<<<<<<< HEAD
    navigate('/signin', { replace: true });
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
    localStorage.removeItem('isLogged');
  }
  useEffect(() => {});
  return (
    <nav className="side-menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Трек развития"
            path="/track/profile"
            icon={arrowIcon}
            isActive={isTrackLocation}
          />
        </li>
        <li className="side-menu__item">
          <SideMenuLink textContent="Вакансии" path="" icon={vanacyIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Мастерская"
            path=""
            icon={masterskayaIcon}
          />
        </li>
        <div className="side-menu__break-line" />
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Дневник"
            path="/diary/desk"
            icon={dnenvinIcon}
            isActive={isDiaryLocation}
          />
        </li>
        <div className="side-menu__break-line" />
        <li className="side-menu__item">
          <SideMenuLink textContent="Контакты" path="" icon={contactIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink textContent="Лента" path="" icon={lentaIcon} />
        </li>
      </ul>
      <ul className="side-menu__list">
        <Button place="side-menu" textButton="Оффер принят" />
        <li className="side-menu__item">
          <SideMenuLink textContent="Уйти в отпуск" path="" icon={lentaIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink textContent="Инфо профиля" path="" icon={infoIcon} />
        </li>
        <li className="side-menu__item">
          <SideMenuLink
            textContent="Выход"
            path="/signin"
            icon={exitIcon}
            onClick={handleLogout}
          />
        </li>
      </ul>
    </nav>
  );
}

export { SideMenu };
