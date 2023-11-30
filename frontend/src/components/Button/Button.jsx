import './Button.sass';

function Button({ type = 'button', place, textButton }) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type} className={`button button_place_${place}`}>
            {textButton}
        </button>
    );
}

export { Button };
