import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function LightBlue({ radius }) {
  const { activePeace, handlePeace: onClick } = useContext(activePeaceContext);
  const isActive = activePeace === 'light-blue';
  const strokeColor = isActive ? '#37ABFF' : '#fff';

  function handleClick() {
    onClick('light-blue');
  }

  return (
    <svg
      onClick={handleClick}
      className={`peace peace_color_light-blue peace_radius_${radius}`}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="58"
      viewBox="0 0 43 58"
      fill="none"
    >
      <mask id="path-1-inside-1_389_11068" fill="white">
        <path d="M42.0425 8.02437C42.6091 4.10079 39.9409 0.401495 36.0486 0.204586C25.1518 -0.346687 14.2855 1.69073 4.31417 6.15471C0.752516 7.74921 -0.417578 12.1682 1.51085 15.6239L22.7049 53.6037C26.0249 59.5531 34.8394 57.9004 35.8149 51.1456L42.0425 8.02437Z" />
      </mask>
      <path
        d="M42.0425 8.02437C42.6091 4.10079 39.9409 0.401495 36.0486 0.204586C25.1518 -0.346687 14.2855 1.69073 4.31417 6.15471C0.752516 7.74921 -0.417578 12.1682 1.51085 15.6239L22.7049 53.6037C26.0249 59.5531 34.8394 57.9004 35.8149 51.1456L42.0425 8.02437Z"
        fill="#C2E1E5"
        stroke={strokeColor}
        strokeWidth="4"
        mask="url(#path-1-inside-1_389_11068)"
      />
    </svg>
  );
}

export { LightBlue };
