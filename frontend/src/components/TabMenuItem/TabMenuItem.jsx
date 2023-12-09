import './TabMenuItem.sass';
import { Link } from 'react-router-dom';
function TabMenuItem({ isActive, isDisabled, text, path }) {
  return (
    <Link
      to={path}
      className={`tab-menu__item ${isActive && 'tab-menu__item_active'} ${
        isDisabled && 'tab-menu__item_disabled'
      }`}
    >
      {text}
    </Link>
  );
}
export { TabMenuItem };
