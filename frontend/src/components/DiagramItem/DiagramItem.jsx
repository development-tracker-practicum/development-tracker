import './DiagramItem.sass';

function DiagramItem({ color, title, value, children }) {
  return (
    <li className="diagram-item">
      <div className="diagram-item__title-zone">
        <div
          className={`diagram-item__color-circle diagram-item__color-circle_${color}`}
        />
        <h3 className="diagram-item__title">
          {title}
          <span className="diagram-item__value">{value} %</span>
        </h3>
      </div>
      {children}
    </li>
  );
}

export { DiagramItem };
