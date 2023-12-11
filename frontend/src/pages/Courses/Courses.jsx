import React from 'react';
import './Courses.sass';
import { FilterCourses } from '../../components/FilterCourses/FilterCourses';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DropDownMenuDirection } from '../../components/DropDownMenuDirection/DropDownMenuDirection';
import { Button } from '../../components/Button/Button';
import { Recommendations } from '../Reccommendations/Recommendations';
import CardList from '../../components/CardList/CardList';
import { CourseCard } from '../../components/CourseCard/CourseCard';
function Courses() {
  const filterCount = useSelector(state => state.filterCourses.countFilter);
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const { middleStatistics } = useSelector(state => state.statistics);
  const [recommendFilter, setReccomendFilter] = useState({
    direction: middleStatistics?.[activePeaceDirection]?.name || 'Направление',
  });
  const user = useSelector(state => state.user);
  const recommendations = useSelector(state => state.recommendations);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function handleOpenFilter() {
    setIsOpenFilter(true);
  }

  function handleClose() {
    setIsOpenFilter(false);
  }

  function handleFilter(event) {
    setReccomendFilter(previous => ({
      ...previous,
      [event.currentTarget.type]: event.currentTarget.id,
    }));
  }
  return (
    <Recommendations>
      <div className="recommendations__filter-zone">
        <DropDownMenuDirection
          currentItem={recommendFilter.direction}
          onClick={handleFilter}
        />
        <Button
          onClick={handleOpenFilter}
          place="notification"
          textButton="Фильтр"
          modification="filter"
        >
          {filterCount !== 0 && (
            <span className="recommendations__filter-count">{filterCount}</span>
          )}
        </Button>
      </div>
      <CardList>
        {user.currentLevel === 'Junior'
          ? recommendations.list.coursesListForJunior.map((card, index) => (
              <CourseCard key={index} course={card} />
            ))
          : recommendations.list.coursesList.map((card, index) => (
              <CourseCard key={index} course={card} />
            ))}
      </CardList>
      <div className="filter-wrapper">
        <FilterCourses onClose={handleClose} isOpen={isOpenFilter} />
      </div>
    </Recommendations>
  );
}
export default Courses;
