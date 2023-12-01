import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Yellow({ radius }) {
    const { activePeace, handlePeace: onClick } =
        useContext(activePeaceContext);
    const isActive = activePeace === 'yellow';
    const strokeColor = isActive ? '#FCA53E' : '#fff';
    function handleClick() {
        onClick('yellow');
    }
    return (
        <svg
            onClick={handleClick}
            className={`peace peace_color_yellow peace_radius_${radius}`}
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="63"
            viewBox="0 0 58 63"
            fill="none"
        >
            <mask id="path-1-inside-1_389_11074" fill="white">
                <path d="M53.9027 38.0885C57.344 36.1856 58.6196 31.8285 56.3818 28.595C51.7338 21.879 45.9512 16.0003 39.2769 11.2313C32.6025 6.46238 25.1673 2.89669 17.3076 0.675637C13.5234 -0.393721 9.81473 2.22496 9.1296 6.09718L0.599312 54.3091C-0.444046 60.206 5.81537 64.6785 11.056 61.7806L53.9027 38.0885Z" />
            </mask>
            <path
                d="M53.9027 38.0885C57.344 36.1856 58.6196 31.8285 56.3818 28.595C51.7338 21.879 45.9512 16.0003 39.2769 11.2313C32.6025 6.46238 25.1673 2.89669 17.3076 0.675637C13.5234 -0.393721 9.81473 2.22496 9.1296 6.09718L0.599312 54.3091C-0.444046 60.206 5.81537 64.6785 11.056 61.7806L53.9027 38.0885Z"
                fill="#FFE1BD"
                stroke={strokeColor}
                strokeWidth="4"
                mask="url(#path-1-inside-1_389_11074)"
            />
        </svg>
    );
}
export default Yellow;
