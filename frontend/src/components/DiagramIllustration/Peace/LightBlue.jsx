import { useContext } from 'react';
import { activePeaceContext } from '../../App/App';

function LightBlue({ radius, onClick, level = 'middle' }) {
  const { activePeace } = useContext(activePeaceContext);
  const isActive = activePeace === 'lightblue';
  const strokeColor = isActive ? '#37ABFF' : '#fff';

  function handleClick() {
    onClick('lightblue');
  }

  return (
    <>
      {radius === 'fifth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="47"
          height="59"
          viewBox="0 0 47 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_12009" fill="white">
            <path d="M47 8C47 3.58172 43.4063 -0.0473044 39.0168 0.456461C26.0276 1.94719 13.7091 7.04969 3.47025 15.1803C0.0102158 17.9279 0.0351925 23.0352 3.15939 26.1594L33.3431 56.3431C38.3829 61.3829 47 57.8135 47 50.6863V8Z" />
          </mask>
          <path
            d="M47 8C47 3.58172 43.4063 -0.0473044 39.0168 0.456461C26.0276 1.94719 13.7091 7.04969 3.47025 15.1803C0.0102158 17.9279 0.0351925 23.0352 3.15939 26.1594L33.3431 56.3431C38.3829 61.3829 47 57.8135 47 50.6863V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_12009)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11989" fill="white">
            <path d="M76 8C76 3.58172 72.4133 -0.0300392 68.0065 0.287962C44.1408 2.01014 21.4604 11.4047 3.36705 27.0625C0.0261002 29.9537 0.0438194 35.0438 3.16801 38.168L62.3431 97.3431C67.3829 102.383 76 98.8135 76 91.6863V8Z" />
          </mask>
          <path
            d="M76 8C76 3.58172 72.4133 -0.0300392 68.0065 0.287962C44.1408 2.01014 21.4604 11.4047 3.36705 27.0625C0.0261002 29.9537 0.0438194 35.0438 3.16801 38.168L62.3431 97.3431C67.3829 102.383 76 98.8135 76 91.6863V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11989)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="103"
          height="139"
          viewBox="0 0 103 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11999" fill="white">
            <path d="M103 8C103 3.58172 99.4151 -0.0222595 95.0031 0.213118C60.7907 2.03832 28.2218 15.5288 2.73937 38.43C-0.546822 41.3833 -0.53334 46.4666 2.59085 49.5908L89.3431 136.343C94.3829 141.383 103 137.814 103 130.686V8Z" />
          </mask>
          <path
            d="M103 8C103 3.58172 99.4151 -0.0222595 95.0031 0.213118C60.7907 2.03832 28.2218 15.5288 2.73937 38.43C-0.546822 41.3833 -0.53334 46.4666 2.59085 49.5908L89.3431 136.343C94.3829 141.383 103 137.814 103 130.686V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11999)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="131"
          height="178"
          viewBox="0 0 131 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_730_11973" fill="white">
            <path d="M131 8C131 3.58173 127.415 -0.0176652 123.001 0.169166C78.443 2.05503 35.9734 19.6465 3.13255 49.8203C-0.12096 52.8096 -0.1105 57.8895 3.01369 61.0136L117.343 175.343C122.383 180.383 131 176.814 131 169.686V8Z" />
          </mask>
          <path
            d="M131 8C131 3.58173 127.415 -0.0176652 123.001 0.169166C78.443 2.05503 35.9734 19.6465 3.13255 49.8203C-0.12096 52.8096 -0.1105 57.8895 3.01369 61.0136L117.343 175.343C122.383 180.383 131 176.814 131 169.686V8Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_730_11973)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'middle' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="159"
          height="218"
          viewBox="0 0 159 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_729_11984" fill="white">
            <path d="M159 8.00001C159 3.58173 155.415 -0.0145756 151 0.139631C95.8313 2.06629 43.2007 23.8666 2.82825 61.5143C-0.403076 64.5276 -0.394768 69.6052 2.72943 72.7294L145.343 215.343C150.383 220.383 159 216.814 159 209.686V8.00001Z" />
          </mask>
          <path
            d="M159 8.00001C159 3.58173 155.415 -0.0145756 151 0.139631C95.8313 2.06629 43.2007 23.8666 2.82825 61.5143C-0.403076 64.5276 -0.394768 69.6052 2.72943 72.7294L145.343 215.343C150.383 220.383 159 216.814 159 209.686V8.00001Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_729_11984)"
          />
        </svg>
      )}
      {radius === 'fifth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="65"
          height="58"
          viewBox="0 0 65 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_898" fill="white">
            <path d="M38.9786 4.31881C36.7679 0.493355 31.841 -0.850816 28.2926 1.78168C20.7044 7.41126 14.3113 14.5364 9.52512 22.7468C4.73894 30.9572 1.68896 40.0312 0.529254 49.4082C-0.0130464 53.7931 3.58427 57.418 8.00238 57.4567L55.9964 57.8773C62.1871 57.9315 66.0907 51.2352 62.9931 45.8748L38.9786 4.31881Z" />
          </mask>
          <path
            d="M38.9786 4.31881C36.7679 0.493355 31.841 -0.850816 28.2926 1.78168C20.7044 7.41126 14.3113 14.5364 9.52512 22.7468C4.73894 30.9572 1.68896 40.0312 0.529254 49.4082C-0.0130464 53.7931 3.58427 57.418 8.00238 57.4567L55.9964 57.8773C62.1871 57.9315 66.0907 51.2352 62.9931 45.8748L38.9786 4.31881Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_898)"
          />
        </svg>
      )}
      {radius === 'fourth' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="106"
          height="94"
          viewBox="0 0 106 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_890" fill="white">
            <path d="M59.4644 4.81997C57.2537 0.994507 52.3413 -0.338116 48.6849 2.14228C34.9708 11.4457 23.4841 23.723 15.1041 38.0985C6.7241 52.4739 1.70057 68.5189 0.362447 85.0368C0.00568935 89.4407 3.58585 93.0587 8.00395 93.0974L96.9964 93.8773C103.187 93.9315 107.091 87.2352 103.993 81.8748L59.4644 4.81997Z" />
          </mask>
          <path
            d="M59.4644 4.81997C57.2537 0.994507 52.3413 -0.338116 48.6849 2.14228C34.9708 11.4457 23.4841 23.723 15.1041 38.0985C6.7241 52.4739 1.70057 68.5189 0.362447 85.0368C0.00568935 89.4407 3.58585 93.0587 8.00395 93.0974L96.9964 93.8773C103.187 93.9315 107.091 87.2352 103.993 81.8748L59.4644 4.81997Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_890)"
          />
        </svg>
      )}
      {radius === 'third' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="145"
          height="127"
          viewBox="0 0 145 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_882" fill="white">
            <path d="M78.9509 4.05277C76.7402 0.227308 71.8334 -1.09961 68.1312 1.31183C48.5634 14.0575 32.2089 31.2188 20.411 51.4574C8.61304 71.6961 1.73822 94.3835 0.289093 117.691C0.014922 122.101 3.58734 125.717 8.00545 125.756L135.996 126.877C142.187 126.932 146.091 120.235 142.993 114.875L78.9509 4.05277Z" />
          </mask>
          <path
            d="M78.9509 4.05277C76.7402 0.227308 71.8334 -1.09961 68.1312 1.31183C48.5634 14.0575 32.2089 31.2188 20.411 51.4574C8.61304 71.6961 1.73822 94.3835 0.289093 117.691C0.014922 122.101 3.58734 125.717 8.00545 125.756L135.996 126.877C142.187 126.932 146.091 120.235 142.993 114.875L78.9509 4.05277Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_882)"
          />
        </svg>
      )}
      {radius === 'second' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="184"
          height="161"
          viewBox="0 0 184 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_874" fill="white">
            <path d="M98.4374 4.28557C96.2267 0.460112 91.3229 -0.863245 87.5944 1.50731C62.1639 17.6759 40.9334 39.7149 25.7178 65.8163C10.5023 91.9178 1.7855 121.252 0.246614 151.348C0.0209895 155.76 3.58884 159.375 8.00695 159.414L174.996 160.877C181.187 160.932 185.091 154.235 181.993 148.875L98.4374 4.28557Z" />
          </mask>
          <path
            d="M98.4374 4.28557C96.2267 0.460112 91.3229 -0.863245 87.5944 1.50731C62.1639 17.6759 40.9334 39.7149 25.7178 65.8163C10.5023 91.9178 1.7855 121.252 0.246614 151.348C0.0209895 155.76 3.58884 159.375 8.00695 159.414L174.996 160.877C181.187 160.932 185.091 154.235 181.993 148.875L98.4374 4.28557Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_874)"
          />
        </svg>
      )}
      {radius === 'first' && level === 'junior' && (
        <svg
          onClick={handleClick}
          className={`peace peace_level_${level} peace_color_light-blue peace_radius_${radius}`}
          width="224"
          height="196"
          viewBox="0 0 224 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1302_866" fill="white">
            <path d="M118.424 4.65255C116.213 0.827087 111.311 -0.493916 107.565 1.849C76.1172 21.5185 49.8814 48.5574 31.1607 80.6717C12.44 112.786 1.8388 148.939 0.218589 185.996C0.0255979 190.41 3.59038 194.025 8.00849 194.063L214.996 195.877C221.187 195.932 225.091 189.235 221.993 183.875L118.424 4.65255Z" />
          </mask>
          <path
            d="M118.424 4.65255C116.213 0.827087 111.311 -0.493916 107.565 1.849C76.1172 21.5185 49.8814 48.5574 31.1607 80.6717C12.44 112.786 1.8388 148.939 0.218589 185.996C0.0255979 190.41 3.59038 194.025 8.00849 194.063L214.996 195.877C221.187 195.932 225.091 189.235 221.993 183.875L118.424 4.65255Z"
            fill="#C1E0E4"
            stroke={strokeColor}
            strokeWidth="4"
            mask="url(#path-1-inside-1_1302_866)"
          />
        </svg>
      )}
    </>
  );
}

export { LightBlue };
