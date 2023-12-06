import './FilterCourses.sass';
import closeIcon from '../../Images/close_mini.svg';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
function FilterCourses(props) {
  return (
    <aside className="filter-courses">
      <button
        style={{
          backgroundImage: `url(${closeIcon})`,
        }}
        className="filter-courses__close-btn"
      ></button>
      <h3 className="filter-courses__title">Фильтры</h3>
      <ul className="filter-courses__form"></ul>
    </aside>
  );
}
export { FilterCourses };
