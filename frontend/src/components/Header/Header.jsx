import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';
import './Header.sass';
import icon from './../../Images/icon.svg';
function Header(props) {
    return (
        <header className="header">
            <HeaderMenu />
            <img src={icon} alt="иконка серого колокольчика" />
        </header>
    );
}
export default Header;
