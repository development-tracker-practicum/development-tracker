import { useContext, useEffect } from 'react';
import { activePeaceContext } from '../App/App';
import { Circle } from './Circle/Circle';
import { Gray } from './Peace/Gray';
import { Red } from './Peace/Red';
import { Blue } from './Peace/Blue';
import { Yellow } from './Peace/Yellow';
import { Green } from './Peace/Green';
import './Peace/Peace.sass';
import { LightBlue } from './Peace/LightBlue';

function DiagramIllustrationForJunior({ statistics }) {
  const { handlePeace, activePeace, resetPeaces } =
    useContext(activePeaceContext);
  const bluePercent = parseInt(statistics.blue.percent);
  const lightbluePercent = parseInt(statistics.lightblue.percent);
  const grayPercent = parseInt(statistics.gray.percent);
  const yellowPercent = parseInt(statistics.yellow.percent);
  const greenPercent = parseInt(statistics.green.percent);
  const redPercent = parseInt(statistics.red.percent);
  useEffect(() => {
    resetPeaces();
  }, []);
  return (
    <Circle radius="first">
      {bluePercent === 100 && (
        <Blue onClick={handlePeace} radius="first" level="junior" />
      )}
      {grayPercent === 100 && (
        <Gray onClick={handlePeace} radius="first" level="junior" />
      )}
      {redPercent === 100 && (
        <Red onClick={handlePeace} radius="first" level="junior" />
      )}
      {yellowPercent === 100 && (
        <Yellow onClick={handlePeace} radius="first" level="junior" />
      )}
      {greenPercent === 100 && (
        <Green onClick={handlePeace} radius="first" level="junior" />
      )}
      {lightbluePercent === 100 && (
        <LightBlue onClick={handlePeace} radius="first" level="junior" />
      )}
      <Circle radius="second">
        {bluePercent >= 80 && (
          <Blue onClick={handlePeace} radius="second" level="junior" />
        )}
        {grayPercent >= 80 && (
          <Gray onClick={handlePeace} radius="second" level="junior" />
        )}
        {redPercent >= 80 && (
          <Red onClick={handlePeace} radius="second" level="junior" />
        )}
        {yellowPercent >= 80 && (
          <Yellow onClick={handlePeace} radius="second" level="junior" />
        )}
        {greenPercent >= 80 && (
          <Green onClick={handlePeace} radius="second" level="junior" />
        )}
        {lightbluePercent >= 80 && (
          <LightBlue onClick={handlePeace} radius="second" level="junior" />
        )}
        <Circle radius="third">
          {bluePercent >= 60 && (
            <Blue onClick={handlePeace} radius="third" level="junior" />
          )}
          {grayPercent >= 60 && (
            <Gray onClick={handlePeace} radius="third" level="junior" />
          )}
          {redPercent >= 60 && (
            <Red onClick={handlePeace} radius="third" level="junior" />
          )}
          {yellowPercent >= 60 && (
            <Yellow onClick={handlePeace} radius="third" level="junior" />
          )}
          {greenPercent >= 60 && (
            <Green onClick={handlePeace} radius="third" level="junior" />
          )}
          {lightbluePercent >= 60 && (
            <LightBlue onClick={handlePeace} radius="third" level="junior" />
          )}
          <Circle radius="fourth">
            {bluePercent >= 40 && (
              <Blue onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {grayPercent >= 40 && (
              <Gray onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {redPercent >= 40 && (
              <Red onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {yellowPercent >= 40 && (
              <Yellow onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {greenPercent >= 40 && (
              <Green onClick={handlePeace} radius="fourth" level="junior" />
            )}
            {lightbluePercent >= 40 && (
              <LightBlue onClick={handlePeace} radius="fourth" level="junior" />
            )}
            <Circle onClick={handlePeace} radius="fifth">
              {bluePercent >= 20 && (
                <Blue onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {grayPercent >= 20 && (
                <Gray onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {redPercent >= 20 && (
                <Red onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {yellowPercent >= 20 && (
                <Yellow onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {greenPercent >= 20 && (
                <Green onClick={handlePeace} radius="fifth" level="junior" />
              )}
              {lightbluePercent >= 20 && (
                <LightBlue
                  onClick={handlePeace}
                  radius="fifth"
                  level="junior"
                />
              )}
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustrationForJunior };
