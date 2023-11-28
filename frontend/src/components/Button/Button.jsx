import './Button.sass';

function Button({ type = 'button', place, textButton }) {
    return (
        <button type={type} className={`button button_place_${place}`}>
            {textButton}
        </button>
    );
}
export default Button;
