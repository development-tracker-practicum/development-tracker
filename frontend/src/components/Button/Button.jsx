import './Button.sass';

function Button({ type = 'button', place, textButton, onClick }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`button button_place_${place}`}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
}

export { Button };
