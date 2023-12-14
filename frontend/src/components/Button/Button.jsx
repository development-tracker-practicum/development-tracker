import './Button.sass';

function Button({
  type = 'button',
  place,
  textButton,
  onClick,
  modification = undefined,
  children,
  isDisabled,
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`button button_place_${place} button_${modification} ${
        isDisabled && 'button_disabled'
      }`}
      onClick={onClick}
    >
      {textButton}
      {children}
    </button>
  );
}

export { Button };
