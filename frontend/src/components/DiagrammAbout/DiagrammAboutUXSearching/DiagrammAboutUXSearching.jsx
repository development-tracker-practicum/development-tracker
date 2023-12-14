import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutUXSearching(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem>
          UX-(User Experience — «пользовательский опыт») отвечает за то, как
          интерфейс работает.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          UX-исследования — это инструмент, который помогает команде понять
          потребности пользователей продукта (их чувства, эмоции, мотивы
          поведения).
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Цель UX-анализа — выявить барьеры и слабые места, а затем исправить
          их: устранить несоответствие между ожиданиями пользователя
          и функциональностью продукта, снизить когнитивную нагрузку и сократить
          путь достижения цели.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Всё это помогает улучшать экономические показатели.
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export default DiagrammAboutUXSearching;
