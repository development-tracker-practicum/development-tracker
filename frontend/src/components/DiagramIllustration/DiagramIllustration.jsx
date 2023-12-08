import { useContext } from 'react';
import { activePeaceContext } from '../App/App';
import { Circle } from './Circle/Circle';
import { Gray } from './Peace/Gray';
import { Red } from './Peace/Red';
import { Pink } from './Peace/Pink';
import { LightBlue } from './Peace/LightBlue';
import { Yellow } from './Peace/Yellow';
import { Green } from './Peace/Green';
import { Blue } from './Peace/Blue';
import { Purple } from './Peace/Purple';
import './Peace/Peace.sass';

function DiagramIllustration({ statistics }) {
  const { handlePeace } = useContext(activePeaceContext);
  const bluePercent = parseInt(statistics.blue.percent);
  const lightbluePercent = parseInt(statistics.lightblue.percent);
  const grayPercent = parseInt(statistics.gray.percent);
  const yellowPercent = parseInt(statistics.yellow.percent);
  const greenPercent = parseInt(statistics.green.percent);
  const redPercent = parseInt(statistics.red.percent);
  const pinkPercent = parseInt(statistics.pink.percent);
  const purplePercent = parseInt(statistics.purple.percent);
  return (
    <Circle radius="first">
      {pinkPercent === 100 && <Pink onClick={handlePeace} radius="first" />}
      {grayPercent === 100 && <Gray onClick={handlePeace} radius="first" />}
      {redPercent === 100 && <Red onClick={handlePeace} radius="first" />}
      {lightbluePercent === 100 && (
        <LightBlue onClick={handlePeace} radius="first" />
      )}
      {yellowPercent === 100 && <Yellow onClick={handlePeace} radius="first" />}
      {greenPercent === 100 && <Green onClick={handlePeace} radius="first" />}
      {bluePercent === 100 && <Blue onClick={handlePeace} radius="first" />}
      {purplePercent === 100 && <Purple onClick={handlePeace} radius="first" />}
      <Circle radius="second">
        {pinkPercent >= 80 && <Pink onClick={handlePeace} radius="second" />}
        {grayPercent >= 80 && <Gray onClick={handlePeace} radius="second" />}
        {redPercent >= 80 && <Red onClick={handlePeace} radius="second" />}
        {lightbluePercent >= 80 && (
          <LightBlue onClick={handlePeace} radius="second" />
        )}
        {yellowPercent >= 80 && (
          <Yellow onClick={handlePeace} radius="second" />
        )}
        {greenPercent >= 80 && <Green onClick={handlePeace} radius="second" />}
        {bluePercent >= 80 && <Blue onClick={handlePeace} radius="second" />}
        {purplePercent >= 80 && (
          <Purple onClick={handlePeace} radius="second" />
        )}
        <Circle radius="third">
          {pinkPercent >= 60 && <Pink onClick={handlePeace} radius="third" />}
          {grayPercent >= 60 && <Gray onClick={handlePeace} radius="third" />}
          {redPercent >= 60 && <Red onClick={handlePeace} radius="third" />}
          {lightbluePercent >= 60 && (
            <LightBlue onClick={handlePeace} radius="third" />
          )}
          {yellowPercent >= 60 && (
            <Yellow onClick={handlePeace} radius="third" />
          )}
          {greenPercent >= 60 && <Green onClick={handlePeace} radius="third" />}
          {bluePercent >= 60 && <Blue onClick={handlePeace} radius="third" />}
          {purplePercent >= 60 && (
            <Purple onClick={handlePeace} radius="third" />
          )}
          <Circle radius="fourth">
            {pinkPercent >= 40 && (
              <Pink onClick={handlePeace} radius="fourth" />
            )}
            {grayPercent >= 40 && (
              <Gray onClick={handlePeace} radius="fourth" />
            )}
            {redPercent >= 40 && <Red onClick={handlePeace} radius="fourth" />}
            {lightbluePercent >= 40 && (
              <LightBlue onClick={handlePeace} radius="fourth" />
            )}
            {yellowPercent >= 40 && (
              <Yellow onClick={handlePeace} radius="fourth" />
            )}
            {greenPercent >= 40 && (
              <Green onClick={handlePeace} radius="fourth" />
            )}
            {bluePercent >= 40 && (
              <Blue onClick={handlePeace} radius="fourth" />
            )}
            {purplePercent >= 40 && (
              <Purple onClick={handlePeace} radius="fourth" />
            )}
            <Circle onClick={handlePeace} radius="fifth">
              {pinkPercent >= 20 && (
                <Pink onClick={handlePeace} radius="fifth" />
              )}
              {grayPercent >= 20 && (
                <Gray onClick={handlePeace} radius="fifth" />
              )}
              {redPercent >= 20 && <Red onClick={handlePeace} radius="fifth" />}
              {lightbluePercent >= 20 && (
                <LightBlue onClick={handlePeace} radius="fifth" />
              )}
              {yellowPercent >= 20 && (
                <Yellow onClick={handlePeace} radius="fifth" />
              )}
              {greenPercent >= 20 && (
                <Green onClick={handlePeace} radius="fifth" />
              )}
              {bluePercent >= 20 && (
                <Blue onClick={handlePeace} radius="fifth" />
              )}
              {purplePercent >= 20 && (
                <Purple onClick={handlePeace} radius="fifth" />
              )}
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustration };
