import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutUIDesigh(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem>
          UI-дизайн (User Interface — «пользовательский интерфейс») отвечает за
          то, как интерфейс выглядит.
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Определять цветовую гамму, шрифты, размер элементов.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Разрабатывать фирменный стиль бренда, UI-кит, дизайн-систему.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          style Адаптировать все элементы интерфейса под разные устройства.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Готовить анимацию и статичные элементы — изображения, таблицы, кнопки,
          слайдеры, формы.
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export { DiagrammAboutUIDesigh };
