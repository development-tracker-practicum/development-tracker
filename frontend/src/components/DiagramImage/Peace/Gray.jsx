import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Gray({ radius }) {
  const { activePeace, handlePeace: onClick } = useContext(activePeaceContext);
  const isActive = activePeace === 'gray';
  const strokeColor = isActive ? '#B4B4B4' : '#fff';

  function handleClick() {
    onClick('gray');
  }

  return (
    <svg
      onClick={handleClick}
      className={`peace peace_color_gray peace_radius_${radius}`}
      width="64"
      height="56"
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_389_11071" fill="white">
        <path d="M5.778 14.7968C1.99206 15.8599 -0.245706 19.8064 1.15589 23.4805C5.64342 35.2439 12.8969 45.758 22.3004 54.1299C25.2374 56.7448 29.7213 56.0541 32.0594 52.8923L62.1468 12.2053C66.1792 6.75217 61.0266 -0.716721 54.497 1.11675L5.778 14.7968Z" />
      </mask>
      <path
        d="M5.778 14.7968C1.99206 15.8599 -0.245706 19.8064 1.15589 23.4805C5.64342 35.2439 12.8969 45.758 22.3004 54.1299C25.2374 56.7448 29.7213 56.0541 32.0594 52.8923L62.1468 12.2053C66.1792 6.75217 61.0266 -0.716721 54.497 1.11675L5.778 14.7968Z"
        fill="#DDE0E4"
        stroke={strokeColor}
        strokeWidth="4"
        mask="url(#path-1-inside-1_389_11071)"
      />
    </svg>
  );
}

export { Gray };
