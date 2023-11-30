import './PromoNotification.sass';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PromoNotification() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const startButton = (
    <button
      className={`promo-notification__start-button${
        isExpanded ? ' promo-notification__start-button_place_bottom' : ''
      }`}
      type="button"
      onClick={() => navigate('/tracker')}
    >
      Начать
    </button>
  );

  return (
    <section
      className={`promo-notification${
        isExpanded ? ' promo-notification_style_background' : ''
      }`}
    >
      <div className="promo-notification__text-wrapper">
        <div className="promo-notification__header-wrapper">
          <div className="promo-notification__lightning-icon" />
          <h2 className="promo-notification__header">
            Мы добавили новую возможность - Трек развития
          </h2>
        </div>
        <p className="promo-notification__description">
          Попробуй сейчас и получи индивидуальные рекомендации по развитию
          карьеры
          {isExpanded && (
            <>
              .<br />
              Достаточно заполнить анкету, выбрать цель и начать прокачивать
              свои скиллы
            </>
          )}
        </p>
        {isExpanded && startButton}
      </div>
      <div className="promo-notification__button-wrapper">
        {!isExpanded && startButton}
        <button
          className="promo-notification__expand-button"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          style={isExpanded ? { transform: 'rotate(180deg)' } : {}}
          aria-label="Развернуть"
        />
      </div>
    </section>
  );
}

export { PromoNotification };
