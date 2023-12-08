import './DiagrammAboutList.sass';

function DiagrammAboutList({ children, start }) {
  return (
    <ol start={start} className={`diagramm-about__list`}>
      {children}
    </ol>
  );
}
export default DiagrammAboutList;
