import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import './CurrentStatus.sass';
import { useEffect, useState } from 'react';

function CurrentStatus() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const statistics = useSelector(state => state.statistics);
  const middlePercent = Object.entries(statistics?.middleStatistics);
  const juniorPercent = Object.entries(statistics?.juniorStatistics);
  const [match, setMatch] = useState(0);
  useEffect(() => {
    if (user?.currentLevel === 'Junior')
      setMatch(
        parseInt(
          juniorPercent.reduce((acc, [color, { percent }]) => {
            return (acc += parseInt(percent));
          }, 0) / 6,
        ),
      );
    else
      setMatch(
        parseInt(
          middlePercent.reduce((acc, [color, { percent }]) => {
            return (acc += parseInt(percent));
          }, 0) / 8,
        ),
      );
  }, [statistics]);
  function handleButton() {
    navigate('/track/recommendations/courses');
  }
  return (
    <section className="current-status">
      <h2 className="current-status__title">Текущий статус</h2>
      <ul className="current-status__list">
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Профессия</p>
          <h3 className="current-status__item-title">
            {user?.currentProfession}
          </h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Уровень</p>
          <h3 className="current-status__item-title">{user?.currentLevel}</h3>
        </li>
        <li className="current-status__item">
          <p className="current-status__item-subtitle">Соответствие</p>
          <h3 className="current-status__item-title">{match}%</h3>
        </li>
      </ul>
      <Button onClick={handleButton} place="content" textButton="Прокачаться" />
    </section>
  );
}

export { CurrentStatus };
