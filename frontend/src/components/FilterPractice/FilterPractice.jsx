import React from 'react';
import './FilterPractice.sass';
import { Button } from '../Button/Button';

function FilterPractice() {
  return (
    <ul className="filter-practice">
      <li className="filter-practice__item">
        <Button
          modification="practice"
          textButton="Все"
          place="notification"
          type="button"
        />
      </li>
      <li className="filter-practice__item">
        <Button
          modification="practice"
          textButton="Хакатоны+"
          place="notification"
          type="button"
          isDisabled={true}
        />
      </li>

      <li className="filter-practice__item">
        <Button
          modification="practice"
          textButton="Хакатоны"
          place="notification"
          type="button"
          isDisabled={true}
        />
      </li>

      <li className="filter-practice__item">
        <Button
          modification="practice"
          textButton="Дизайн-спринты"
          place="notification"
          type="button"
          isDisabled={true}
        />
      </li>

      <li className="filter-practice__item">
        <Button
          modification="practice"
          textButton="Pet-проекты"
          place="notification"
          type="button"
          isDisabled={true}
        />
      </li>
      <li className="filter-practice__item">
        <Button
          modification="practice"
          textButton="Волонтерские проекты"
          place="notification"
          type="button"
          isDisabled={true}
        />
      </li>
    </ul>
  );
}
export default FilterPractice;
