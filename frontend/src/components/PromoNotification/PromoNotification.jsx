import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { Button } from '../Button/Button';
import { NotificationForm } from '../NotificationForm/NotificationForm';
import './PromoNotification.sass';
import closeIcon from '../../Images/closePromo.svg';
import { changeTarget } from '../../store/targetSlice';
function PromoNotification() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isTargetChanged, setIsTargetChanged] = useState(false);
  const isItProfileLocation = location.pathname.includes('/profile');
  const user = useSelector(state => state.user);
  const target = useSelector(state => state.target);
  function handleTargetButton() {
    setIsEditMode(true);
  }
  function handleCancel() {
    setIsEditMode(false);
  }
  function handleSubmit(info) {
    dispatch(changeTarget(info.profession));
    dispatch(setUser(info));
    setIsEditMode(false);
    setIsTargetChanged(true);
  }
  const title = target.isTargetChanged
    ? `Поставлена цель - ${user.currentProfession}`
    : isEditMode
      ? `Текущая профессия - ${user.currentProfession}`
      : isItProfileLocation
        ? 'Выбор карьерного трека'
        : '      Мы добавили новую возможность - Трек развития';
  const startButton = !isItProfileLocation ? (
    <Button
      place="notification"
      textButton="Начать"
      onClick={() => navigate('/track/profile')}
    />
  ) : !target.isTargetChanged ? (
    <Button
      place="notification"
      textButton="Выбрать цель"
      onClick={handleTargetButton}
    />
  ) : (
    <Button
      place="notification"
      textButton="Изменить цель"
      onClick={handleTargetButton}
    />
  );

  return (
    <section
      className={`promo-notification${
        isExpanded || isEditMode ? ' promo-notification_style_background' : ''
      }`}
    >
      <div className="promo-notification__text-wrapper">
        <div className="promo-notification__header-wrapper">
          <div className="promo-notification__lightning-icon" />
          <h2 className="promo-notification__header">{title}</h2>
          {isEditMode && (
            <button
              onClick={handleCancel}
              type="button"
              className="promo-notification__close"
              style={{
                backgroundImage: `url(${closeIcon})`,
              }}
            ></button>
          )}
          {(isEditMode || target.isTargetChanged) && (
            <>
              <p className="promo-notification__level">
                Уровень -
                <span className="promo-notification__level-value">
                  {` ${user.currentLevel}`}
                </span>
              </p>
              <p className="promo-notification__match">
                Соответствие -
                <span className="promo-notification__match-value">
                  {` ${user.currentLevel === 'Middle' ? '34%' :}`}
                </span>
              </p>
            </>
          )}
        </div>
        {isEditMode ? (
          <NotificationForm onCancel={handleCancel} onSubmit={handleSubmit} />
        ) : (
          !target.isTargetChanged && (
            <>
              <p
                className={`promo-notification__description${
                  isExpanded ? ' promo-notification__description_opened' : ''
                }`}
              >
                Попробуй сейчас и получи индивидуальные рекомендации по развитию
                карьеры
                {isExpanded &&
                  ' Достаточно заполнить анкету, выбрать цель и начать прокачивать свои скиллы'}
              </p>
              {isExpanded && startButton}
            </>
          )
        )}
      </div>
      {!isEditMode && (
        <div className="promo-notification__button-wrapper">
          {!isExpanded && startButton}
          {!isItProfileLocation && (
            <button
              className="promo-notification__expand-button"
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              style={isExpanded ? { transform: 'rotate(180deg)' } : {}}
              aria-label="Развернуть"
            />
          )}
        </div>
      )}
    </section>
  );
}

export { PromoNotification };
