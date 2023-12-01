import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Red({ radius }) {
    const { activePeace, handlePeace: onClick } =
        useContext(activePeaceContext);
    const isActive = activePeace === 'red';
    const strokeColor = isActive ? '#FF6442' : '#fff';
    function handleClick() {
        onClick('red');
    }
    return (
        <svg
            onClick={handleClick}
            name="red"
            className={`peace peace_color_red peace_radius_${radius}`}
            width="59"
            height="64"
            viewBox="0 0 59 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_389_11070" fill="white">
                <path d="M1.33187 49.5362C-0.468058 53.0324 0.89723 57.3615 4.55311 58.8099C12.3539 61.9006 20.6494 63.6204 29.0723 63.8744C37.4952 64.1284 45.8793 62.9116 53.8521 60.2967C57.5887 59.0712 59.2123 54.8322 57.6263 51.2339L37.2748 5.05919C34.8596 -0.420644 27.17 -0.652543 24.4289 4.67179L1.33187 49.5362Z" />
            </mask>
            <path
                d="M1.33187 49.5362C-0.468058 53.0324 0.89723 57.3615 4.55311 58.8099C12.3539 61.9006 20.6494 63.6204 29.0723 63.8744C37.4952 64.1284 45.8793 62.9116 53.8521 60.2967C57.5887 59.0712 59.2123 54.8322 57.6263 51.2339L37.2748 5.05919C34.8596 -0.420644 27.17 -0.652543 24.4289 4.67179L1.33187 49.5362Z"
                fill="#FFC9BD"
                stroke={strokeColor}
                strokeWidth="4"
                mask="url(#path-1-inside-1_389_11070)"
            />
        </svg>
    );
}

export default Red;
