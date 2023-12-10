import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import icon from '../../Images/icon.svg';
import './Header.sass';

function Header() {
  return (
    <header className="header">
      <HeaderMenu />
      <img src={icon} alt="иконка серого колокольчика" />
    </header>
  );
}

export { Header };
