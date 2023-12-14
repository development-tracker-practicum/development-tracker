import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutPeopleManagement(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem type="accent">
          Продолжать учиться, развивать себя, как специалиста
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem>
          Уметь оценить масштаб работы над проектом.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Делегировать часть работы на специалиста уровня junior, в соответствии
          с навыками.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Оценить количество времени затраченного на выполнение и заменеджерить
          его.
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export default DiagrammAboutPeopleManagement;
