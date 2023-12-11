import { setActivePeace } from '../../../store/DiagrammDirectionSlice';
import { useDispatch, useSelector } from 'react-redux';
function Blue({ radius, level = 'middle' }) {
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setActivePeace('blue'));
  }
  const isActive = activePeaceDirection === 'blue';
  const strokeColor = isActive ? '#2D77F5' : '#fff';

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="59"
          height="47"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12004" fill="white">
            <path d="M32.8406 43.8406C35.9648 46.9648 41.0716 46.9901 43.8192 43.53C47.8574 38.4444 51.1766 32.8113 53.6716 26.7878C56.1666 20.7644 57.8028 14.4342 58.5434 7.98267C59.0472 3.59322 55.4183 0 51 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L32.8406 43.8406Z" />
          </mask>
          <path
            d="M32.8406 43.8406C35.9648 46.9648 41.0716 46.9901 43.8192 43.53C47.8574 38.4444 51.1766 32.8113 53.6716 26.7878C56.1666 20.7644 57.8028 14.4342 58.5434 7.98267C59.0472 3.59322 55.4183 0 51 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L32.8406 43.8406Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12004)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="100"
          height="76"
          viewBox="0 0 100 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11984" fill="white">
            <path d="M61.832 72.832C64.9562 75.9562 70.046 75.9741 72.9371 72.6331C80.7052 63.6561 86.9944 53.4774 91.5506 42.4779C96.1068 31.4783 98.857 19.8337 99.7118 7.99316C100.03 3.58635 96.4183 0 92 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L61.832 72.832Z" />
          </mask>
          <path
            d="M61.832 72.832C64.9562 75.9562 70.046 75.9741 72.9371 72.6331C80.7052 63.6561 86.9944 53.4774 91.5506 42.4779C96.1068 31.4783 98.857 19.8337 99.7118 7.99316C100.03 3.58635 96.4183 0 92 0H8.31371C1.18647 0 -2.38287 8.61713 2.65685 13.6569L61.832 72.832Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11984)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="139"
          height="103"
          viewBox="0 0 139 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11994" fill="white">
            <path d="M89.4092 100.409C92.5334 103.533 97.6163 103.547 100.569 100.261C111.925 87.6241 121.065 73.1347 127.582 57.4025C134.098 41.6704 137.881 24.9618 138.787 7.99635C139.022 3.58435 135.418 0 131 0H8.31371C1.18646 0 -2.38287 8.61714 2.65685 13.6569L89.4092 100.409Z" />
          </mask>
          <path
            d="M89.4092 100.409C92.5334 103.533 97.6163 103.547 100.569 100.261C111.925 87.6241 121.065 73.1347 127.582 57.4025C134.098 41.6704 137.881 24.9618 138.787 7.99635C139.022 3.58435 135.418 0 131 0H8.31371C1.18646 0 -2.38287 8.61714 2.65685 13.6569L89.4092 100.409Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11994)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="178"
          height="131"
          viewBox="0 0 178 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11968" fill="white">
            <path d="M116.986 127.986C120.111 131.111 125.19 131.122 128.179 127.868C143.137 111.587 155.137 92.7916 163.613 72.3272C172.09 51.8628 176.895 30.0872 177.831 7.9978C178.018 3.58348 174.418 0 170 0H8.31371C1.18648 0 -2.38286 8.61714 2.65686 13.6569L116.986 127.986Z" />
          </mask>
          <path
            d="M116.986 127.986C120.111 131.111 125.19 131.122 128.179 127.868C143.137 111.587 155.137 92.7916 163.613 72.3272C172.09 51.8628 176.895 30.0872 177.831 7.9978C178.018 3.58348 174.418 0 170 0H8.31371C1.18648 0 -2.38286 8.61714 2.65686 13.6569L116.986 127.986Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11968)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="218"
          height="159"
          viewBox="0 0 218 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_8711" fill="white">
            <path d="M145.271 156.271C148.395 159.395 153.471 159.404 156.484 156.173C175.144 136.162 190.081 112.952 200.568 87.6345C211.055 62.3167 216.905 35.3425 217.86 7.99852C218.015 3.58293 214.418 0 210 0H8.31371C1.18646 0 -2.38286 8.61714 2.65686 13.6569L145.271 156.271Z" />
          </mask>
          <path
            d="M145.271 156.271C148.395 159.395 153.471 159.404 156.484 156.173C175.144 136.162 190.081 112.952 200.568 87.6345C211.055 62.3167 216.905 35.3425 217.86 7.99852C218.015 3.58293 214.418 0 210 0H8.31371C1.18646 0 -2.38286 8.61714 2.65686 13.6569L145.271 156.271Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_8711)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="65"
          height="58"
          viewBox="0 0 65 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2892" fill="white">
            <path d="M26.4623 53.424C28.7043 57.2312 33.6421 58.5347 37.1687 55.8731C44.7142 50.1783 51.051 42.9964 55.7702 34.7417C60.4893 26.4869 63.4633 17.3824 64.5424 7.99091C65.0468 3.60152 61.4183 0.00785065 57 0.00733185L8.99746 0.00165558C2.80791 0.000923157 -1.03783 6.72791 2.1031 12.0613L26.4623 53.424Z" />
          </mask>
          <path
            d="M26.4623 53.424C28.7043 57.2312 33.6421 58.5347 37.1687 55.8731C44.7142 50.1783 51.051 42.9964 55.7702 34.7417C60.4893 26.4869 63.4633 17.3824 64.5424 7.99091C65.0468 3.60152 61.4183 0.00785065 57 0.00733185L8.99746 0.00165558C2.80791 0.000923157 -1.03783 6.72791 2.1031 12.0613L26.4623 53.424Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2892)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="106"
          height="93"
          viewBox="0 0 106 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2884" fill="white">
            <path d="M47.2679 88.7528C49.51 92.5599 54.4332 93.8521 58.069 91.3417C71.7125 81.9213 83.1019 69.5427 91.3642 55.0903C99.6264 40.638 104.515 24.543 105.711 8.00643C106.03 3.59966 102.418 0.0127029 98 0.0121765L8.99746 0.00165558C2.80791 0.000923157 -1.03783 6.72791 2.1031 12.0613L47.2679 88.7528Z" />
          </mask>
          <path
            d="M47.2679 88.7528C49.51 92.5599 54.4332 93.8521 58.069 91.3417C71.7125 81.9213 83.1019 69.5427 91.3642 55.0903C99.6264 40.638 104.515 24.543 105.711 8.00643C106.03 3.59966 102.418 0.0127029 98 0.0121765L8.99746 0.00165558C2.80791 0.000923157 -1.03783 6.72791 2.1031 12.0613L47.2679 88.7528Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2884)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="145"
          height="127"
          viewBox="0 0 145 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2876" fill="white">
            <path d="M67.0587 122.358C69.3008 126.165 74.2184 127.452 77.9006 125.01C97.3715 112.098 113.59 94.793 125.222 74.4464C136.854 54.0998 143.538 31.3441 144.786 8.01422C145.022 3.60225 141.418 0.0173187 137 0.0167847L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L67.0587 122.358Z" />
          </mask>
          <path
            d="M67.0587 122.358C69.3008 126.165 74.2184 127.452 77.9006 125.01C97.3715 112.098 113.59 94.793 125.222 74.4464C136.854 54.0998 143.538 31.3441 144.786 8.01422C145.022 3.60225 141.418 0.0173187 137 0.0167847L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L67.0587 122.358Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2876)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="184"
          height="160"
          viewBox="0 0 184 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2868" fill="white">
            <path d="M86.8495 155.964C89.0916 159.771 94.0061 161.054 97.715 158.653C123.023 142.268 144.078 120.043 159.08 93.8025C174.081 67.5621 182.551 38.1416 183.83 8.02037C184.017 3.60606 180.418 0.0219269 176 0.0214081L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L86.8495 155.964Z" />
          </mask>
          <path
            d="M86.8495 155.964C89.0916 159.771 94.0061 161.054 97.715 158.653C123.023 142.268 144.078 120.043 159.08 93.8025C174.081 67.5621 182.551 38.1416 183.83 8.02037C184.017 3.60606 180.418 0.0219269 176 0.0214081L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L86.8495 155.964Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2868)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_blue peace_radius_${radius}`}
          width="224"
          height="195"
          viewBox="0 0 224 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2860" fill="white">
            <path d="M107.148 190.431C109.39 194.238 114.302 195.519 118.029 193.145C149.327 173.209 175.348 145.94 193.805 113.655C212.262 81.3698 222.559 45.1116 223.859 8.02573C224.014 3.61015 220.418 0.0266571 216 0.0261383L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L107.148 190.431Z" />
          </mask>
          <path
            d="M107.148 190.431C109.39 194.238 114.302 195.519 118.029 193.145C149.327 173.209 175.348 145.94 193.805 113.655C212.262 81.3698 222.559 45.1116 223.859 8.02573C224.014 3.61015 220.418 0.0266571 216 0.0261383L8.99747 0.00164795C2.80792 0.000930786 -1.03783 6.72791 2.10309 12.0613L107.148 190.431Z"
            fill="#ACCCFF"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2860)"
          />
        </svg>
      )}
    </>
  );
}

export { Blue };
