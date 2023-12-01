import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Purple({ radius }) {
    const { activePeace, handlePeace: onClick } =
    useContext(activePeaceContext);
    const isActive = activePeace === 'purple';
    const strokeColor = isActive ? '#C25CFE' : '#fff';
    function handleClick() {
        onClick('purple');
    }
    return (
        <svg
            onClick={handleClick}
            className={`peace peace_color_purple peace_radius_${radius}`}
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="54"
            viewBox="0 0 57 54"
            fill="none"
        >
            <mask id="path-1-inside-1_389_11067" fill="white">
                <path d="M32.6785 4.16843C30.6895 0.776157 26.3023 -0.388603 23.1198 1.92123C13.8494 8.64963 6.2907 17.4679 1.059 27.6581C-0.737013 31.1564 1.08492 35.3139 4.74144 36.7607L46.7873 53.3978C53.0823 55.8886 58.9734 49.0159 55.5493 43.1757L32.6785 4.16843Z" />
            </mask>
            <path
                d="M32.6785 4.16843C30.6895 0.776157 26.3023 -0.388603 23.1198 1.92123C13.8494 8.64963 6.2907 17.4679 1.059 27.6581C-0.737013 31.1564 1.08492 35.3139 4.74144 36.7607L46.7873 53.3978C53.0823 55.8886 58.9734 49.0159 55.5493 43.1757L32.6785 4.16843Z"
                fill="#D8C2E5"
                stroke={strokeColor}
                strokeWidth="4"
                mask="url(#path-1-inside-1_389_11067)"
            />
        </svg>
    );
}
export default Purple;
