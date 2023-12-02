import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Blue({ radius }) {
  const { activePeace, handlePeace: onClick } = useContext(activePeaceContext);
  const isActive = activePeace === 'blue';
  const strokeColor = isActive ? '#1E75FF' : '#fff';

  function handleClick() {
    onClick('blue');
  }

  return (
    <svg
      onClick={handleClick}
      className={`peace peace_color_blue peace_radius_${radius}`}
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="59"
      viewBox="0 0 63 59"
      fill="none"
    >
      <mask id="path-1-inside-1_389_11069" fill="white">
        <path d="M24.0768 54.3562C25.9283 57.8254 30.266 59.1657 33.5324 56.9762C40.3167 52.4286 46.2808 46.7341 51.1485 40.1314C56.0161 33.5287 59.692 26.1473 62.0297 18.3215C63.1552 14.5536 60.592 10.8064 56.7304 10.0638L8.65063 0.81749C2.7699 -0.313446 -1.79517 5.87877 1.02441 11.1619L24.0768 54.3562Z" />
      </mask>
      <path
        d="M24.0768 54.3562C25.9283 57.8254 30.266 59.1657 33.5324 56.9762C40.3167 52.4286 46.2808 46.7341 51.1485 40.1314C56.0161 33.5287 59.692 26.1473 62.0297 18.3215C63.1552 14.5536 60.592 10.8064 56.7304 10.0638L8.65063 0.81749C2.7699 -0.313446 -1.79517 5.87877 1.02441 11.1619L24.0768 54.3562Z"
        fill="#ACCCFF"
        stroke={strokeColor}
        strokeWidth="4"
        mask="url(#path-1-inside-1_389_11069)"
      />
    </svg>
  );
}

export { Blue };
