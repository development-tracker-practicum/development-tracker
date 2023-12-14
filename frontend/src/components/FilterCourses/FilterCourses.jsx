import { useDispatch } from 'react-redux';
import {
<<<<<<< HEAD
  setFilter,
=======
  changeFilter,
  getLenghtFilters,
  openMenu,
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
  resetFilters,
  setFilterCounter,
} from '../../store/FilterSlice';
import { DropDownMenuPrice } from '../DropDownMenuPrice/DropDownMenuPrice';
import { DropDownMenuDifficult } from '../DropDownMenuDifficult/DropDownMenuDifficult';
import { DropDownMenuDuration } from '../DropDownMenuDuration/DropDownMenuDuration';
import { DropDownMenuType } from '../DropDownMenuType/DropDownMenuType';
import { Button } from '../Button/Button';
import deleteIcon from '../../Images/delete.svg';
import closeIcon from '../../Images/close_mini.svg';
import './FilterCourses.sass';
import useFilter from '../../hooks/useFilter';
import { TYPE, LEVEL, DURATION, PRICE } from '../../constants/filterConstants';
function FilterCourses({ onClose, isOpen = false }) {
  const dispatch = useDispatch();
  const { values, openedMenus, changeValue, openTargetMenu, resetValues } =
    useFilter({
      type: TYPE,
      level: LEVEL,
      duration: DURATION,
      price: PRICE,
    });
  function handleClick() {
<<<<<<< HEAD
<<<<<<< HEAD
    dispatch(setFilter(values));
    dispatch(setFilterCounter());
    onClose();
=======
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
    dispatch(getLenghtFilters());
    onClose();
  }

  function handleMenu(event) {
    const id = event.currentTarget.id;
    dispatch(openMenu(id));
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
  }

  function handleReset() {
    dispatch(resetFilters());
    resetValues();
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
<<<<<<< HEAD
<<<<<<< HEAD
          onMenu={openTargetMenu}
          onClick={changeValue}
          currentItem={values.level}
=======
          onMenu={handleMenu}
          onClick={handleChangeFilter}
          currentItem={filtredProps.level}
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
=======
          onMenu={handleMenu}
          onClick={handleChangeFilter}
          currentItem={filtredProps.level}
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
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
