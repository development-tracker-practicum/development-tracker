import './DropMenuItem.sass';

function DropMenuItem({ onClick, text = 'Тип', percent }) {
  const handleClick = e => {
    onClick(e.currentTarget.id);
  };
  return (
    <li id={text} onClick={handleClick} className="dropdown__item">
      {' '}
      <h5 className="dropdown__title">
        {text} {percent && <span className="dropdown__percent">{percent}</span>}
      </h5>
    </li>
  );
}
export { DropMenuItem };
