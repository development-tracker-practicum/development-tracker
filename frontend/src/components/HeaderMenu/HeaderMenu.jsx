import { useLocation } from 'react-router-dom';
import { HeaderLink } from '../HeaderLink/HeaderLink';

import './HeaderMenu.sass';

function HeaderMenu() {
  const location = useLocation();
  const isItDiaryLocation = location.pathname.includes('diary');
  return (
    <ul className="header__menu">
      {isItDiaryLocation && (
        <>
          <li className="header__menu__item">
            <HeaderLink
              text="Доска"
              path="/diary/desk"
              isActive={location.pathname.includes('desk')}
            />
          </li>
          <li>
            <HeaderLink
              text="Метрика"
              path=""
              isActive={location.pathname.includes('metrika')}
            />
          </li>
        </>
      )}
      {!isItDiaryLocation && (
        <>
          <li className="header__menu__item">
            <HeaderLink
              text="Профиль"
              path="/track/profile"
              isActive={location.pathname.includes('profile')}
            />
          </li>
          <li>
            <HeaderLink
              text="Рекомендации"
              path="/track/recommendations/courses"
              isActive={location.pathname.includes('recommendations')}
            />
          </li>
          <li>
            <HeaderLink
              text="Аналитики"
              path=""
              isActive={location.pathname.includes('analyzings')}
            />
          </li>
        </>
      )}
    </ul>
  );
}

export { HeaderMenu };
