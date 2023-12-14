import { setActivePeace } from '../../../store/diagrammDirectionSlice';
import { useDispatch, useSelector } from 'react-redux';
function Gray({ radius, level = 'middle' }) {
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setActivePeace('gray'));
  }
  const isActive = activePeaceDirection === 'gray';
  const strokeColor = isActive ? '#697F9C' : '#fff';

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12006" fill="white">
            <path d="M3.15938 32.8406C0.0351849 35.9648 0.0102043 41.0721 3.47024 43.8197C13.7091 51.9503 26.0276 57.0528 39.0168 58.5435C43.4063 59.0473 47 55.4183 47 51V8.31371C47 1.18647 38.3829 -2.38287 33.3431 2.65685L3.15938 32.8406Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M3.15938 32.8406C0.0351849 35.9648 0.0102043 41.0721 3.47024 43.8197C13.7091 51.9503 26.0276 57.0528 39.0168 58.5435C43.4063 59.0473 47 55.4183 47 51V8.31371C47 1.18647 38.3829 -2.38287 33.3431 2.65685L3.15938 32.8406Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12006)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11986" fill="white">
            <path d="M3.168 61.832C0.043808 64.9562 0.0260887 70.0463 3.36704 72.9375C21.4604 88.5953 44.1408 97.9899 68.0065 99.712C72.4133 100.03 76 96.4183 76 92L76 8.31371C76 1.18646 67.3829 -2.38287 62.3431 2.65685L3.168 61.832Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M3.168 61.832C0.043808 64.9562 0.0260887 70.0463 3.36704 72.9375C21.4604 88.5953 44.1408 97.9899 68.0065 99.712C72.4133 100.03 76 96.4183 76 92L76 8.31371C76 1.18646 67.3829 -2.38287 62.3431 2.65685L3.168 61.832Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11986)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11996" fill="white">
            <path d="M2.59084 89.4092C-0.533356 92.5334 -0.546841 97.6167 2.73935 100.57C28.2218 123.471 60.7907 136.962 95.0031 138.787C99.4151 139.022 103 135.418 103 131V8.31371C103 1.18646 94.3829 -2.38286 89.3431 2.65686L2.59084 89.4092Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M2.59084 89.4092C-0.533356 92.5334 -0.546841 97.6167 2.73935 100.57C28.2218 123.471 60.7907 136.962 95.0031 138.787C99.4151 139.022 103 135.418 103 131V8.31371C103 1.18646 94.3829 -2.38286 89.3431 2.65686L2.59084 89.4092Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11996)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11970" fill="white">
            <path d="M3.01368 116.986C-0.110519 120.111 -0.120987 125.19 3.13252 128.18C35.9734 158.353 78.443 175.945 123.001 177.831C127.415 178.018 131 174.418 131 170L131 8.31371C131 1.18648 122.383 -2.38286 117.343 2.65686L3.01368 116.986Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M3.01368 116.986C-0.110519 120.111 -0.120987 125.19 3.13252 128.18C35.9734 158.353 78.443 175.945 123.001 177.831C127.415 178.018 131 174.418 131 170L131 8.31371C131 1.18648 122.383 -2.38286 117.343 2.65686L3.01368 116.986Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11970)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11981" fill="white">
            <path d="M2.7294 145.271C-0.394791 148.395 -0.403099 153.472 2.82823 156.486C43.2007 194.133 95.8313 215.934 151 217.86C155.415 218.015 159 214.418 159 210L159 8.31371C159 1.18646 150.383 -2.38286 145.343 2.65686L2.7294 145.271Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M2.7294 145.271C-0.394791 148.395 -0.403099 153.472 2.82823 156.486C43.2007 194.133 95.8313 215.934 151 217.86C155.415 218.015 159 214.418 159 210L159 8.31371C159 1.18646 150.383 -2.38286 145.343 2.65686L2.7294 145.271Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11981)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="64"
          height="58"
          viewBox="0 0 64 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2894" fill="white">
            <path d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0472237 3.59323 0.456631 7.98269C1.5335 17.3641 4.50105 26.4594 9.21044 34.7078C13.9198 42.9561 20.244 50.135 27.7756 55.831C31.2996 58.4962 36.2386 57.1975 38.4845 53.3926L62.8776 12.0665C66.0255 6.73356 62.1809 0 55.9883 0L8 -7.62939e-06Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0472237 3.59323 0.456631 7.98269C1.5335 17.3641 4.50105 26.4594 9.21044 34.7078C13.9198 42.9561 20.244 50.135 27.7756 55.831C31.2996 58.4962 36.2386 57.1975 38.4845 53.3926L62.8776 12.0665C66.0255 6.73356 62.1809 0 55.9883 0L8 -7.62939e-06Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2894)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="105"
          height="93"
          viewBox="0 0 105 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2886" fill="white">
            <path d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0300029 3.58652 0.28815 7.99332C1.48085 24.5137 6.3591 40.5939 14.6051 55.0366C22.8511 69.4792 34.2193 81.8541 47.8399 91.2787C51.4732 93.7928 56.3977 92.5056 58.6436 88.7007L103.878 12.0665C107.025 6.73356 103.181 0 96.9883 0L8 -7.62939e-06Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M8 -7.62939e-06C3.58172 -7.62939e-06 -0.0300029 3.58652 0.28815 7.99332C1.48085 24.5137 6.3591 40.5939 14.6051 55.0366C22.8511 69.4792 34.2193 81.8541 47.8399 91.2787C51.4732 93.7928 56.3977 92.5056 58.6436 88.7007L103.878 12.0665C107.025 6.73356 103.181 0 96.9883 0L8 -7.62939e-06Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2886)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="144"
          height="127"
          viewBox="0 0 144 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2878" fill="white">
            <path d="M8 -1.52588e-05C3.58172 -1.52588e-05 -0.0222497 3.58449 0.213267 7.99649C1.45746 31.3043 8.12713 54.0401 19.7366 74.3738C31.3462 94.7075 47.5353 112.008 66.9748 124.927C70.6546 127.373 75.5734 126.091 77.8193 122.286L142.878 12.0665C146.025 6.73357 142.181 0 135.988 0L8 -1.52588e-05Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M8 -1.52588e-05C3.58172 -1.52588e-05 -0.0222497 3.58449 0.213267 7.99649C1.45746 31.3043 8.12713 54.0401 19.7366 74.3738C31.3462 94.7075 47.5353 112.008 66.9748 124.927C70.6546 127.373 75.5734 126.091 77.8193 122.286L142.878 12.0665C146.025 6.73357 142.181 0 135.988 0L8 -1.52588e-05Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2878)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="183"
          height="160"
          viewBox="0 0 183 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2870" fill="white">
            <path d="M8 -1.52588e-05C3.58173 -1.52588e-05 -0.0176725 3.58369 0.169276 7.99802C1.44375 38.0915 9.89544 67.4867 24.8682 93.711C39.8409 119.935 60.8591 142.156 86.1269 158.55C89.8334 160.955 94.7492 159.677 96.995 155.872L181.878 12.0665C185.025 6.73357 181.181 0 174.988 0L8 -1.52588e-05Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M8 -1.52588e-05C3.58173 -1.52588e-05 -0.0176725 3.58369 0.169276 7.99802C1.44375 38.0915 9.89544 67.4867 24.8682 93.711C39.8409 119.935 60.8591 142.156 86.1269 158.55C89.8334 160.955 94.7492 159.677 96.995 155.872L181.878 12.0665C185.025 6.73357 181.181 0 174.988 0L8 -1.52588e-05Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2870)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          className={`peace peace_level_${level} peace_color_gray peace_radius_${radius}`}
          width="223"
          height="195"
          viewBox="0 0 223 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_2862" fill="white">
            <path d="M8.00001 -1.52588e-05C3.58173 -1.52588e-05 -0.0145945 3.58307 0.139708 7.99866C1.43449 45.0508 11.7092 81.2782 30.1313 113.544C48.5534 145.81 74.5287 173.073 105.779 193.022C109.503 195.399 114.417 194.124 116.662 190.319L221.878 12.0665C225.025 6.73355 221.181 0 214.988 0L8.00001 -1.52588e-05Z" />
          </mask>
          <path
            onClick={handleClick}
            d="M8.00001 -1.52588e-05C3.58173 -1.52588e-05 -0.0145945 3.58307 0.139708 7.99866C1.43449 45.0508 11.7092 81.2782 30.1313 113.544C48.5534 145.81 74.5287 173.073 105.779 193.022C109.503 195.399 114.417 194.124 116.662 190.319L221.878 12.0665C225.025 6.73355 221.181 0 214.988 0L8.00001 -1.52588e-05Z"
            fill="#DDE0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_2862)"
          />
        </svg>
      )}
    </>
  );
}

export { Gray };
