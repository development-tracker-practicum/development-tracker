import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutToGrowingUp(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem>
          Продолжать учиться, развивать себя как специалиста
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Самостоятельно нарабатывать насмотренность.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Активно изучать литературу, знать популярных дизайнеров.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Участвовать в челленджах/хакатонах и других дизайнерских активностях.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Получать обратную связь, уметь делать выводы
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Выявлять пробелы в своих навыках. Честно признаваться себе, в чем вы
          сильны, а над чем еще предстоит поработать.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Найти наставника, что поможет выявить ваши слабые стороны и
          предоставить ресурсы, возможности для их развития.
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export default DiagrammAboutToGrowingUp;
