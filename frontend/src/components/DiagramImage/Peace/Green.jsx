import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function Green({ radius }) {
  const { activePeace, handlePeace: onClick } = useContext(activePeaceContext);
  const isActive = activePeace === 'green';
  const strokeColor = isActive ? '#4B9F68' : '#fff';

  function handleClick() {
    onClick('green');
  }

  return (
    <svg
      onClick={handleClick}
      name="green"
      className={`peace peace_color_green peace_radius_${radius}`}
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="41"
      viewBox="0 0 56 41"
      fill="none"
    >
      <mask id="path-1-inside-1_389_11073" fill="white">
        <path d="M48.0859 40.5003C51.969 41.1208 55.658 38.4738 55.8838 34.548C56.4794 24.1924 54.782 13.8304 50.9133 4.20615C49.4466 0.557537 45.1059 -0.774052 41.6238 1.05297L4.47378 20.5448C-1.59135 23.7271 -0.105034 32.8001 6.65844 33.8808L48.0859 40.5003Z" />
      </mask>
      <path
        d="M48.0859 40.5003C51.969 41.1208 55.658 38.4738 55.8838 34.548C56.4794 24.1924 54.782 13.8304 50.9133 4.20615C49.4466 0.557537 45.1059 -0.774052 41.6238 1.05297L4.47378 20.5448C-1.59135 23.7271 -0.105034 32.8001 6.65844 33.8808L48.0859 40.5003Z"
        fill="#C2E5CE"
        stroke={strokeColor}
        strokeWidth="4"
        mask="url(#path-1-inside-1_389_11073)"
      />
    </svg>
  );
}

export { Green };
