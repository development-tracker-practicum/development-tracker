import { Link } from 'react-router-dom';
import './PopupNotification.sass';

function PopupNotification({ onPopupCloseClick }) {
    
  function handleCloseClick() {
    onPopupCloseClick();
  }

  return (
    <dialog className="popup-notification popup-notification_opened">
      <div className="popup-notification__container">
        <div className="popup-notification__icon" />
        <div>
          <h3 className="popup-notification__title">
            Определить уровень и скорректировать цель развития в профессии
          </h3>
          <Link to="/make-appointment" className="popup-notification__link">
            Назначить звонок с наставником
          </Link>
        </div>
        <button
          className="popup-notification__close-button"
          aria-label="Закрыть"
          type="button"
          onClick={handleCloseClick}
        />
      </div>
    </dialog>
  );
}

export { PopupNotification };
