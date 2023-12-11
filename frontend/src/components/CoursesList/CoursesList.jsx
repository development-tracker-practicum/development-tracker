import './CoursesList.sass';
import { CourseCard } from '../CourseCard/CourseCard';
function CoursesList({ coursesList }) {
  return (
    <ul className="courses-list">
      {coursesList.map((card, index) => (
        <li key={index} className="courses-list__item">
          <CourseCard data={card} />
        </li>
      ))}
    </ul>
  );
}
export { CoursesList };
