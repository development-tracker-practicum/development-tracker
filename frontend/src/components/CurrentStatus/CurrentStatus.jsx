import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import './CurrentStatus.sass';
import { totalMatchJunior, totalMatchMiddle } from '../../store/trackerSlice';

function CurrentStatus() {
  const navigate = useNavigate();
  const status = useSelector(state => state.status);
  const middleMatch = useSelector(totalMatchMiddle);
  const juniorMatch = useSelector(totalMatchJunior);

  function handleButton() {
    navigate('/track/recommendations/courses');
  }
  return (
    <section className="current-status">
      <h2 className="current-status__title">Текущий статус</h2>
      <ul className="current-status__list">
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Профессия</p>
          <h3 className="current-status__item-title">{status?.profession}</h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Уровень</p>
          <h3 className="current-status__item-title">{status?.level}</h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Соответствие</p>
          <h3 className="current-status__item-title">
            {status.level === 'Middle' ? middleMatch : juniorMatch} %
          </h3>
        </li>
      </ul>
      <Button onClick={handleButton} place="content" textButton="Прокачаться" />
    </section>
  );
}

export { CurrentStatus };
