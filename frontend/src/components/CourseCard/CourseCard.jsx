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
      {!course?.monthlyPrice && (
        <p className="course-card__price course-card__price_type_no-monthly-price">
          {typeof course?.price === 'number' && course?.price !== 0
            ? `${course?.price.toLocaleString('ru-RU')} ₽`
            : 'Бесплатно'}
        </p>
      )}
      {course?.monthlyPrice && (
        <div className="course-card__price-wrapper">
          <p className="course-card__price">
            от {course?.monthlyPrice.toLocaleString('ru-RU')} ₽/месяц
          </p>
          <p className="course-card__full-price">
            или сразу {course?.price.toLocaleString('ru-RU')}
          </p>
        </div>
      )}
    </article>
  );
}

export { CourseCard };
