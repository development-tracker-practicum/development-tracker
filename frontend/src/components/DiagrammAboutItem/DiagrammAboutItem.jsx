function DiagrammAboutItem({ children, style, type = null }) {
  return (
    <li
      className={`diagramm-about__item ${
        style && 'diagramm-about__item_style_' + style
      } ${type && 'diagramm-about__item_type_' + type}`}
    >
      {children}
    </li>
  );
}
export default DiagrammAboutItem;
