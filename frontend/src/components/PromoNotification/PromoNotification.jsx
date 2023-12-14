import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { Button } from '../Button/Button';
import { NotificationForm } from '../NotificationForm/NotificationForm';
import './PromoNotification.sass';
import closeIcon from '../../Images/closePromo.svg';
import { editStatus, setStatus } from '../../store/currentStatusSlice';
// import { totalMatchJunior, totalMatchMiddle } from '../../store/statusSlice';
function PromoNotification() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const matchJunior = useSelector(totalMatchJunior);
  //   const matchMiddle = useSelector(totalMatchMiddle);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const isItProfileLocation = location.pathname.includes('/profile');
  const status = useSelector(state => state.status);
  function handleTargetButton() {
    setIsEditMode(true);
  }
  function handleCancel() {
    setIsEditMode(false);
  }
  function handleSubmit(info) {
    dispatch(editStatus({ data: { level_id: info.level }, id: '1' }));
    setIsEditMode(false);
  }
  const title = status.isChanged
    ? `Поставлена цель - ${status.profession}`
    : isEditMode
      ? `Текущая профессия - ${status.profession}`
      : isItProfileLocation
        ? 'Выбор карьерного трека'
        : '      Мы добавили новую возможность - Трек развития';
  const startButton = !isItProfileLocation ? (
    <Button
      place="notification"
      textButton="Начать"
      onClick={() => navigate('/track/profile')}
    />
  ) : !status.isChanged ? (
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
          {(isEditMode || status.isChanged) && (
            <>
              <p className="promo-notification__level">
                Уровень -
                <span className="promo-notification__level-value">
                  {` ${status.level}`}
                </span>
              </p>
              <p className="promo-notification__match">
                Соответствие -
                <span className="promo-notification__match-value">
                  {/* {` ${
                    status.level === 'Middle' ? matchMiddle : matchJunior
                  } %`} */}
                </span>
              </p>
            </>
          )}
        </div>
        {isEditMode ? (
          <NotificationForm onCancel={handleCancel} onSubmit={handleSubmit} />
        ) : (
          !status.isChanged && (
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
