import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutProAction(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem type="accent">
          Продолжать учиться, развивать себя, как специалиста
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Стабильно показывать результат в работе над текущими проектами.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Оценивать, сколько нужно времени на задачу и выполнять ее в
          поставленный срок
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export default DiagrammAboutProAction;
