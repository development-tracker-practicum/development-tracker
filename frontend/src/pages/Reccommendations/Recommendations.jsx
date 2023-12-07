import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { initialCards } from '../../constants/constants';
import { TabMenu } from '../../components/TabMenu/TabMenu';
import { FilterCourses } from '../../components/FilterCourses/FilterCourses';
import { DropDownMenuDirection } from '../../components/DropDownMenuDirection/DropDownMenuDirection';
import { ModuleCard } from '../../components/ModuleCard/ModuleCard';
import { Button } from '../../components/Button/Button';
import './Reccommendations.sass';

function Recommendations() {
  const initialCards = useSelector((state) => state.courses);
  const [recommendFilter, setRecommendFilter] = useState({
    direction: 'Направление',
  });
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function handleOpenFilter() {
    setIsOpenFilter(true);
  }

  function handleClose() {
    setIsOpenFilter(false);
  }

  function handleFilter(event) {
    setRecommendFilter((previous) => ({
      ...previous,
      [event.currentTarget.type]: event.currentTarget.id,
    }));
  }

  return (
    <main className="content content_recommendations">
      <section className="recommendations">
        <div className="recommendations__title-zone">
          <h2 className="recommendations__title recommendations__title_level">
            Middle
          </h2>
          <h2 className="recommendations__title recommendations__title_profession">
            Дизайнер
          </h2>
          <h2 className="recommendations__title recommendations__title_percent">
            55%
          </h2>
        </div>
        <TabMenu />
        <div className="recommendations__filter-zone">
          <DropDownMenuDirection
            currentItem={recommendFilter.direction}
            onClick={handleFilter}
          />
          <Button
            onClick={handleOpenFilter}
            place="notification"
            textButton="Фильтры"
          />
        </div>

        <ul className="courses-list">
          {initialCards.map((card, index) => (
            <li key={index} className="courses-list__item">
              <ModuleCard data={card} />
            </li>
          ))}
        </ul>
      </section>
      <div className="filter-wrapper">
        <FilterCourses onClose={handleClose} isOpen={isOpenFilter} />
      </div>
    </main>
  );
}

export { Recommendations };
