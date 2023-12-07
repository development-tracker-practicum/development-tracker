import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  getLenghtFilters,
  openMenu,
  resetFilters,
} from '../../store/filterCoursesSlice';
import { DropDownMenuPrice } from '../DropDownMenuPrice/DropDownMenuPrice';
import { DropDownMenuDifficult } from '../DropDownMenuDifficult/DropDownMenuDifficult';
import { DropDownMenuDuration } from '../DropDownMenuDuration/DropDownMenuDuration';
import { DropDownMenuType } from '../DropDownMenuType/DropDownMenuType';
import { Button } from '../Button/Button';
import deleteIcon from '../../images/delete.svg';
import closeIcon from '../../images/close_mini.svg';
import './FilterCourses.sass';

function FilterCourses({ onClose, isOpen = false }) {
  const { filtredProps, openedMenus } = useSelector(
    (state) => state.filterCourses,
  );
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(getLenghtFilters());
    onClose();
  }

  function handleMenu(event) {
    const id = event.currentTarget.id;
    dispatch(openMenu(id));
  }

  function handleReset() {
    dispatch(resetFilters());
  }

  function handleChangeFilter(event) {
    const { id, type } = event.currentTarget;
    dispatch(changeFilter({ id, type }));
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
          onMenu={handleMenu}
          onClick={handleChangeFilter}
          currentItem={filtredProps.level}
        />
        <DropDownMenuDuration
          isOpen={openedMenus.duration}
          onMenu={handleMenu}
          onClick={handleChangeFilter}
          currentItem={filtredProps.duration}
        />
        <DropDownMenuPrice
          isOpen={openedMenus.price}
          onMenu={handleMenu}
          onClick={handleChangeFilter}
          currentItem={filtredProps.price}
        />
        <DropDownMenuType
          isOpen={openedMenus.type}
          onMenu={handleMenu}
          onClick={handleChangeFilter}
          currentItem={filtredProps.type}
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
