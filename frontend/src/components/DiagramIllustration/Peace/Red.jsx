import { useDispatch, useSelector } from 'react-redux';
import { setActivePeace } from '../../../store/DiagrammDirectionSlice';

function Red({ radius, level = 'middle' }) {
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setActivePeace('red'));
  }
  const isActive = activePeaceDirection === 'red';
  const strokeColor = isActive ? '#FF6363' : '#fff';

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12005" fill="white">
            <path d="M0 51C0 55.4183 3.59321 59.0472 7.98267 58.5434C14.4342 57.8028 20.7644 56.1666 26.7878 53.6716C32.8113 51.1766 38.4444 47.8574 43.53 43.8192C46.9901 41.0716 46.9648 35.9648 43.8406 32.8406L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371V51Z" />
          </mask>
          <path
            d="M0 51C0 55.4183 3.59321 59.0472 7.98267 58.5434C14.4342 57.8028 20.7644 56.1666 26.7878 53.6716C32.8113 51.1766 38.4444 47.8574 43.53 43.8192C46.9901 41.0716 46.9648 35.9648 43.8406 32.8406L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371V51Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12005)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11985" fill="white">
            <path d="M-7.62939e-06 92C-7.62939e-06 96.4183 3.58634 100.03 7.99315 99.7118C19.8337 98.857 31.4783 96.1068 42.4779 91.5506C53.4774 86.9945 63.6561 80.7052 72.6331 72.9371C75.9741 70.046 75.9562 64.9562 72.832 61.832L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371L-7.62939e-06 92Z" />
          </mask>
          <path
            d="M-7.62939e-06 92C-7.62939e-06 96.4183 3.58634 100.03 7.99315 99.7118C19.8337 98.857 31.4783 96.1068 42.4779 91.5506C53.4774 86.9945 63.6561 80.7052 72.6331 72.9371C75.9741 70.046 75.9562 64.9562 72.832 61.832L13.6569 2.65685C8.61713 -2.38287 0 1.18647 0 8.31371L-7.62939e-06 92Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11985)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11995" fill="white">
            <path d="M0 131C0 135.418 3.58435 139.022 7.99634 138.787C24.9618 137.881 41.6703 134.098 57.4025 127.582C73.1347 121.065 87.6241 111.925 100.261 100.569C103.547 97.6163 103.533 92.5334 100.409 89.4092L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371V131Z" />
          </mask>
          <path
            d="M0 131C0 135.418 3.58435 139.022 7.99634 138.787C24.9618 137.881 41.6703 134.098 57.4025 127.582C73.1347 121.065 87.6241 111.925 100.261 100.569C103.547 97.6163 103.533 92.5334 100.409 89.4092L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371V131Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11995)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace  peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11969" fill="white">
            <path d="M-1.52588e-05 170C-1.52588e-05 174.418 3.58347 178.018 7.99779 177.831C30.0872 176.895 51.8628 172.09 72.3271 163.613C92.7916 155.137 111.587 143.137 127.868 128.179C131.122 125.19 131.111 120.111 127.986 116.986L13.6569 2.65686C8.61714 -2.38286 0 1.18646 0 8.31371L-1.52588e-05 170Z" />
          </mask>
          <path
            d="M-1.52588e-05 170C-1.52588e-05 174.418 3.58347 178.018 7.99779 177.831C30.0872 176.895 51.8628 172.09 72.3271 163.613C92.7916 155.137 111.587 143.137 127.868 128.179C131.122 125.19 131.111 120.111 127.986 116.986L13.6569 2.65686C8.61714 -2.38286 0 1.18646 0 8.31371L-1.52588e-05 170Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11969)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11980" fill="white">
            <path d="M-1.52588e-05 210C-1.52588e-05 214.418 3.58293 218.015 7.9985 217.86C35.3425 216.905 62.3167 211.055 87.6345 200.568C112.952 190.081 136.162 175.144 156.173 156.484C159.404 153.471 159.395 148.395 156.271 145.271L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371L-1.52588e-05 210Z" />
          </mask>
          <path
            d="M-1.52588e-05 210C-1.52588e-05 214.418 3.58293 218.015 7.9985 217.86C35.3425 216.905 62.3167 211.055 87.6345 200.568C112.952 190.081 136.162 175.144 156.173 156.484C159.404 153.471 159.395 148.395 156.271 145.271L13.6568 2.65685C8.61713 -2.38287 0 1.18646 0 8.31371L-1.52588e-05 210Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11980)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="66"
          height="62"
          viewBox="0 0 66 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2893" fill="white">
            <path d="M2.00741 45.6979C-0.201202 49.5245 1.09685 54.4637 5.15039 56.2215C13.9121 60.021 23.3861 61.999 32.9926 62C42.599 62.001 52.0734 60.0251 60.836 56.2274C64.8899 54.4705 66.189 49.5315 63.9812 45.7044L39.9279 4.00919C36.8497 -1.32672 29.1489 -1.32754 26.0695 4.00772L2.00741 45.6979Z" />
          </mask>
          <path
            d="M2.00741 45.6979C-0.201202 49.5245 1.09685 54.4637 5.15039 56.2215C13.9121 60.021 23.3861 61.999 32.9926 62C42.599 62.001 52.0734 60.0251 60.836 56.2274C64.8899 54.4705 66.189 49.5315 63.9812 45.7044L39.9279 4.00919C36.8497 -1.32672 29.1489 -1.32754 26.0695 4.00772L2.00741 45.6979Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2893)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="106"
          height="103"
          viewBox="0 0 106 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2885" fill="white">
            <path d="M1.51231 81.2077C-0.696301 85.0344 0.604538 89.9553 4.58029 91.8826C19.6381 99.1822 36.1854 102.998 52.9882 103C69.7911 103.002 86.3391 99.1893 101.399 91.8929C105.375 89.9664 106.677 85.0458 104.469 81.2186L59.9279 4.00919C56.8497 -1.32672 49.1489 -1.32754 46.0695 4.00772L1.51231 81.2077Z" />
          </mask>
          <path
            d="M1.51231 81.2077C-0.696301 85.0344 0.604538 89.9553 4.58029 91.8826C19.6381 99.1822 36.1854 102.998 52.9882 103C69.7911 103.002 86.3391 99.1893 101.399 91.8929C105.375 89.9664 106.677 85.0458 104.469 81.2186L59.9279 4.00919C56.8497 -1.32672 49.1489 -1.32754 46.0695 4.00772L1.51231 81.2077Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2885)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="146"
          height="142"
          viewBox="0 0 146 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2877" fill="white">
            <path d="M2.01697 114.985C-0.191643 118.812 1.11131 123.725 5.05025 125.727C26.0648 136.405 49.3372 141.997 72.9841 142C96.631 142.003 119.905 136.415 140.921 125.741C144.861 123.741 146.165 118.828 143.957 115L79.9279 4.0092C76.8497 -1.32671 69.1489 -1.32755 66.0695 4.00772L2.01697 114.985Z" />
          </mask>
          <path
            d="M2.01697 114.985C-0.191643 118.812 1.11131 123.725 5.05025 125.727C26.0648 136.405 49.3372 141.997 72.9841 142C96.631 142.003 119.905 136.415 140.921 125.741C144.861 123.741 146.165 118.828 143.957 115L79.9279 4.0092C76.8497 -1.32671 69.1489 -1.32755 66.0695 4.00772L2.01697 114.985Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2877)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="184"
          height="181"
          viewBox="0 0 184 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2869" fill="white">
            <path d="M1.52163 148.763C-0.686981 152.59 0.617599 157.499 4.53426 159.543C31.4933 173.617 61.4895 180.997 91.9799 181C122.47 181.003 152.468 173.63 179.43 159.562C183.347 157.518 184.653 152.609 182.445 148.782L98.9279 4.0092C95.8497 -1.32672 88.1489 -1.32755 85.0695 4.00772L1.52163 148.763Z" />
          </mask>
          <path
            d="M1.52163 148.763C-0.686981 152.59 0.617599 157.499 4.53426 159.543C31.4933 173.617 61.4895 180.997 91.9799 181C122.47 181.003 152.468 173.63 179.43 159.562C183.347 157.518 184.653 152.609 182.445 148.782L98.9279 4.0092C95.8497 -1.32672 88.1489 -1.32755 85.0695 4.00772L1.52163 148.763Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2869)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_red peace_radius_${radius}`}
          width="224"
          height="221"
          viewBox="0 0 224 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2861" fill="white">
            <path d="M1.52641 183.407C-0.682198 187.233 0.623352 192.139 4.5248 194.213C37.5746 211.779 74.4665 220.996 111.976 221C149.485 221.004 186.379 211.795 219.432 194.236C223.334 192.163 224.641 187.257 222.433 183.43L118.928 4.0092C115.85 -1.32672 108.149 -1.32755 105.07 4.00772L1.52641 183.407Z" />
          </mask>
          <path
            d="M1.52641 183.407C-0.682198 187.233 0.623352 192.139 4.5248 194.213C37.5746 211.779 74.4665 220.996 111.976 221C149.485 221.004 186.379 211.795 219.432 194.236C223.334 192.163 224.641 187.257 222.433 183.43L118.928 4.0092C115.85 -1.32672 108.149 -1.32755 105.07 4.00772L1.52641 183.407Z"
            fill="#FFC9BD"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2861)"
          />
        </svg>
      )}
    </>
  );
}

export { Red };
