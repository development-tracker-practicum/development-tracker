import { Link } from 'react-router-dom';
import arrowDown from '../../Images/arrow_right.svg';
import './SideCurrentStage.sass';
import { useSelector } from 'react-redux';

function SideCurrentStage() {
  const user = useSelector(state => state.user);
  return (
    <div className="side-current-stage">
      <div className="side-current-stage__top-zone">
        <div
          style={{
            backgroundImage: `url(${user.avatar})`,
          }}
          className="side-current-stage__avatar"
        />
        <p className="side-current-stage__name">{user.username}</p>
      </div>
      <div className="side-current-stage__bottom-zone">
        <div className="side-current-stage__column">
          <p className="side-current-stage__subtitle">Текущий этап</p>
          <Link
            to="/track/recommendations"
            className="side-current-stage__link"
          >
            Акселерация
          </Link>
        </div>
        <button
          style={{ backgroundImage: `url(${arrowDown})` }}
          className="side-current-stage__arrow"
          type="button"
          aria-label="Открыть"
        />
      </div>
    </div>
  );
}

export { SideCurrentStage };
