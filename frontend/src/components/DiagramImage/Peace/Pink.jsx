import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Pink({ radius }) {
  const { activePeace, handlePeace: onClick } = useContext(activePeaceContext);
  const isActive = activePeace === 'pink';
  const strokeColor = isActive ? '#FF40F8' : '#fff';

  function handleClick() {
    onClick('pink');
  }

  return (
    <svg
      onClick={handleClick}
      className={`peace peace_color_pink peace_radius_${radius}`}
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="38"
      viewBox="0 0 55 38"
      fill="none"
    >
      <mask id="path-1-inside-1_389_11072" fill="white">
        <path d="M10.89 0.620003C7.18441 -0.695999 3.07685 1.23633 2.13053 5.05313C-0.0509862 13.8518 -0.563009 22.983 0.621163 31.9704C1.13485 35.8691 5.00063 38.2485 8.83014 37.355L48.8527 28.0172C55.7763 26.4019 56.3174 16.753 49.6178 14.3737L10.89 0.620003Z" />
      </mask>
      <path
        d="M10.89 0.620003C7.18441 -0.695999 3.07685 1.23633 2.13053 5.05313C-0.0509862 13.8518 -0.563009 22.983 0.621163 31.9704C1.13485 35.8691 5.00063 38.2485 8.83014 37.355L48.8527 28.0172C55.7763 26.4019 56.3174 16.753 49.6178 14.3737L10.89 0.620003Z"
        fill="#FFBDE1"
        stroke={strokeColor}
        strokeWidth="4"
        mask="url(#path-1-inside-1_389_11072)"
      />
    </svg>
  );
}

export { Pink };
