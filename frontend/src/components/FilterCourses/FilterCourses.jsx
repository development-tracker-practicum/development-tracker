import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  resetFilters,
  setFilterCounter,
} from '../../store/FilterSlice';
import { DropDownMenuPrice } from '../DropDownMenuPrice/DropDownMenuPrice';
import { DropDownMenuDifficult } from '../DropDownMenuDifficult/DropDownMenuDifficult';
import { DropDownMenuDuration } from '../DropDownMenuDuration/DropDownMenuDuration';
import { DropDownMenuType } from '../DropDownMenuType/DropDownMenuType';
import { Button } from '../Button/Button';
import deleteIcon from '../../images/delete.svg';
import closeIcon from '../../images/close_mini.svg';
import './FilterCourses.sass';
import useFilter from '../../hooks/useFilter';
import { TYPE, LEVEL, DURATION, PRICE } from '../../constants/filterConstants';
function FilterCourses({ onClose, isOpen = false }) {
  const filter = useSelector((state) => state.filterCourses);
  const dispatch = useDispatch();
  const { values, openedMenus, changeValue, openTargetMenu } = useFilter({
    type: TYPE,
    level: LEVEL,
    duration: DURATION,
    price: PRICE,
  });
  function handleClick() {
    dispatch(setFilter(values));
    dispatch(setFilterCounter());
    onClose();
  }

  function handleReset() {
    console.log(filter);
  }

  return (
    <aside className={`filter-courses ${isOpen && 'filter-courses_open'}`}>
      <button
        onClick={onClose}
        style={{
          backgroundImage: `url(${closeIcon})`,
        }}
        className="filter-courses__close-btn"
      />
      <h3 className="filter-courses__title">Фильтры</h3>
      <ul className="filter-courses__form">
        <DropDownMenuDifficult
          isOpen={openedMenus.level}
          onMenu={openTargetMenu}
          onClick={changeValue}
          currentItem={values.level}
        />
        <DropDownMenuDuration
          isOpen={openedMenus.duration}
          onMenu={openTargetMenu}
          onClick={changeValue}
          currentItem={values.duration}
        />
        <DropDownMenuPrice
          isOpen={openedMenus.price}
          onMenu={openTargetMenu}
          onClick={changeValue}
          currentItem={values.price}
        />
        <DropDownMenuType
          isOpen={openedMenus.type}
          onMenu={openTargetMenu}
          onClick={changeValue}
          currentItem={values.type}
        />
      </ul>
      <button
        type="button"
        onClick={handleReset}
        className="filter-courses__reset"
      >
        <div
          style={{
            backgroundImage: `url(${deleteIcon})`,
          }}
          className="filter-courses__delete-icon"
        />
        Очистить фильтры
      </button>
      <Button
        place="content"
        textButton="Применить"
        type="button"
        onClick={handleClick}
      />
    </aside>
  );
}

export { FilterCourses };
