import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutCommunication(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem>
          Укрепление доверия, эффективное разъяснение своих дизайн-решений,
          учитывая потребности заинтересованных сторон.
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem>
          Уметь презентовать свой опыт/свою работу.
        </DiagrammAboutItem>
        <DiagrammAboutItem>Системно выстраивать свою речь.</DiagrammAboutItem>
        <DiagrammAboutItem>
          Вести прозрачную, своевременную и логичную коммуникацию — вовремя
          предупреждать о проблемах, сдвигающихся сроках.
        </DiagrammAboutItem>
        <DiagrammAboutItem>
          Общаться с клиентом напрямую: участвовать/проводить бриф с заказчиком.
          Уметь презентовать решения.
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export default DiagrammAboutCommunication;
