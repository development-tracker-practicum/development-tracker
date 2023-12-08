import DiagrammAboutItem from '../../DiagrammAboutItem/DiagrammAboutItem';
import DiagrammAbout from '../DiagrammAboutList';

function DiagrammAboutTools(props) {
  return (
    <>
      <DiagrammAbout>
        <DiagrammAboutItem>
          Figma – при&shy;ло&shy;же&shy;ние, ис&shy;поль&shy;зу&shy;е&shy;мое
          для вы&shy;пол&shy;не&shy;ния всех ви&shy;дов
          гра&shy;фи&shy;чес&shy;ких ра&shy;бот: от со&shy;зда&shy;ния
          ма&shy;ке&shy;тов сай&shy;тов до раз&shy;ра&shy;бот&shy;ки
          ин&shy;тер&shy;фей&shy;сов мо&shy;биль&shy;ных
          при&shy;ло&shy;же&shy;ний и
          про&shy;то&shy;ти&shy;пи&shy;ро&shy;ва&shy;ния.
        </DiagrammAboutItem>
      </DiagrammAbout>
      <DiagrammAbout start="0">
        <DiagrammAboutItem type="title">Задачи:</DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Прототипировать, понимать важность прототипа и уместность его
          использования.
        </DiagrammAboutItem>
        <DiagrammAboutItem style="number">
          Создавать анимацию так, чтобы команде разработки было понятно.
        </DiagrammAboutItem>
      </DiagrammAbout>
    </>
  );
}
export { DiagrammAboutTools };
