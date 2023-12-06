function DropMenuItem({ onClick, text = 'Тип', type }) {
  return (
    <li type={type} id={text} onClick={onClick} className="dropdown__item">
      {' '}
      <h5 className="dropdown__title">{text}</h5>
    </li>
  );
}
export { DropMenuItem };
