import React from 'react';
import './Courses.sass';
import { FilterCourses } from '../../components/FilterCourses/FilterCourses';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TabMenu } from '../../components/TabMenu/TabMenu';
import { DropDownMenuDirection } from '../../components/DropDownMenuDirection/DropDownMenuDirection';
import { Button } from '../../components/Button/Button';
import { recommendationList } from '../../constants/recomendationsConstants';
import { Recommendations } from '../Reccommendations/Recommendations';
import CardList from '../../components/CardList/CardList';
import { CourseCard } from '../../components/CourseCard/CourseCard';
function Courses(props) {
  const initialCards = useSelector(state => state.courses.coursesList);
  const filterCount = useSelector(state => state.filterCourses.countFilter);
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const { middleStatistics } = useSelector(state => state.statistics);
  const [recommendFilter, setReccomendFilter] = useState({
    direction: middleStatistics?.[activePeaceDirection]?.name || 'Направление',
  });
  const dispatch = useDispatch();
  useEffect(() => console.log(middleStatistics?.[activePeaceDirection]), []);
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
      {/* <CoursesList coursesList={recommendationList} /> */}
      <CardList>
        {recommendationList.map((card, index) => (
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
