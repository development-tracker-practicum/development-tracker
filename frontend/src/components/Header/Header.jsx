import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import icon from '../../images/icon.svg';
import './Header.sass';

function Header(properties) {
    return (
        <header className="header">
            <HeaderMenu />
            <img src={icon} alt="иконка серого колокольчика" />
        </header>
    );
}

export { Header };
