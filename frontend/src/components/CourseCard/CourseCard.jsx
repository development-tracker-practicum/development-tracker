import './CourseCard.sass';

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card__top-wrapper">
        <p className="course-card__occupation">{course?.profession}</p>
        <div className="course-card__separator" />
        <p className="course-card__type">{course?.type}</p>
        <div className="course-card__separator" />
        <p className="course-card__level">{course?.level}</p>
      </div>
      <h2 className="course-card__title">{course?.title}</h2>
      <img
        src={course?.image}
        alt={`Изображение к модулю «${course?.title}»`}
        className="course-card__image"
      />
      <p className="course-card__price">
        {course.price !== 0 ? `${course.price} ₽` : 'Бесплатно'}
      </p>
    </article>
  );
}

export { CourseCard };
