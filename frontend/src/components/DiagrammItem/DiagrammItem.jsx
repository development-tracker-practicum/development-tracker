import './DiagrammItem.sass';

function DiagrammItem({ color, title, value }) {
    return (
        <div className="diagramm-item">
            <div
                className={`diagramm-item__color-circle diagramm-item__color-circle_${color}`}
            />
            <h3 className="diagramm-item__title">
                {title}
                <span className="diagramm-item__value">{value}</span>
            </h3>
        </div>
    );
}
export { DiagrammItem };
