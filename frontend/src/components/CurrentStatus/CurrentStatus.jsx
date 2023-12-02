import { Button } from '../Button/Button';
import './CurrentStatus.sass';

function CurrentStatus() {
  return (
    <section className="current-status">
      <h2 className="current-status__title">Текущий статус</h2>
      <ul className="current-status__list">
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Профессия</p>
          <h3 className="current-status__item-title">UX/UI дизайнер</h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Уровень</p>
          <h3 className="current-status__item-title">Junior</h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Соответствие</p>
          <h3 className="current-status__item-title">92%</h3>
        </li>
      </ul>
      <Button place="content" textButton="Начать учиться" />
    </section>
  );
}

export { CurrentStatus };
