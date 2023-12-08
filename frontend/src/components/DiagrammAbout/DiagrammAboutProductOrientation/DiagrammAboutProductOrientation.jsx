import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutProductOrientation(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem>
          Ориентир на то, чтобы делать дизайн для людей и для бизнеса, улучшать
          продукты, чтобы чинить боли пользователей, чтобы помогать бизнесам
          расти и быть успешнее;
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem>
          Собирать customer journey и любой landing именно с точки зрения нужд
          продукта (определять боли клиента, конкурентные преимущества
          продукта), выводить на сайт в понятной структуре и логике.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Понимать, что решения влияют на метрики, учитывать это при работе.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Без упадка сил и потери мотивации убирать те дизайн-решения, которые
          не решают задач продукта.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Проведить интервью с пользователями под присмотром старшего
          специалиста
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export default DiagrammAboutProductOrientation;
