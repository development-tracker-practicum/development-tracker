import { useLocation } from 'react-router-dom';
import { HeaderLink } from '../HeaderLink/HeaderLink';
import './HeaderMenu.sass';

function HeaderMenu(properties) {
    const location = useLocation();
    const isItDiaryLocation = location.pathname.includes('diary');
    return (
        <ul className="header__menu">
            {isItDiaryLocation && (
                <>
                    {' '}
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
                </>
            )}
            {!isItDiaryLocation && (
                <>
                    {' '}
                    <li className="header__menu__item">
                        <HeaderLink
                            text="Профиль"
                            path="/track/profile"
                            isActive={location.pathname === '/track/profile'}
                        />
                    </li>
                    <li>
                        <HeaderLink
                            text="Рекомендации"
                            path="/track/recomendation"
                            isActive={
                                location.pathname === '/track/recomendation'
                            }
                        />
                    </li>
                    <li>
                        <HeaderLink
                            text="Аналитики"
                            path="/track/analyzings"
                            isActive={location.pathname === '/track/analyzings'}
                        />
                    </li>
                </>
            )}
        </ul>
    );
}

export { HeaderMenu };
