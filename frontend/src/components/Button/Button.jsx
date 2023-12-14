import './Button.sass';

function Button({
  type = 'button',
  place,
  textButton,
  onClick,
  modification = undefined,
  children,
<<<<<<< HEAD
<<<<<<< HEAD
  isDisabled,
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
=======
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
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
