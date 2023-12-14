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
  const bluePercent = parseInt(statistics?.blue?.percent);
  const lightbluePercent = parseInt(statistics?.lightblue?.percent);
  const grayPercent = parseInt(statistics?.gray?.percent);
  const yellowPercent = parseInt(statistics?.yellow?.percent);
  const greenPercent = parseInt(statistics?.green?.percent);
  const redPercent = parseInt(statistics?.red?.percent);

  return (
    <Circle radius="first">
      {bluePercent === 100 && <Blue radius="first" level="junior" />}
      {grayPercent === 100 && <Gray radius="first" level="junior" />}
      {redPercent === 100 && <Red radius="first" level="junior" />}
      {yellowPercent === 100 && <Yellow radius="first" level="junior" />}
      {greenPercent === 100 && <Green radius="first" level="junior" />}
      {lightbluePercent === 100 && <LightBlue radius="first" level="junior" />}
      <Circle radius="second">
        {bluePercent >= 80 && <Blue radius="second" level="junior" />}
        {grayPercent >= 80 && <Gray radius="second" level="junior" />}
        {redPercent >= 80 && <Red radius="second" level="junior" />}
        {yellowPercent >= 80 && <Yellow radius="second" level="junior" />}
        {greenPercent >= 80 && <Green radius="second" level="junior" />}
        {lightbluePercent >= 80 && <LightBlue radius="second" level="junior" />}
        <Circle radius="third">
          {bluePercent >= 60 && <Blue radius="third" level="junior" />}
          {grayPercent >= 60 && <Gray radius="third" level="junior" />}
          {redPercent >= 60 && <Red radius="third" level="junior" />}
          {yellowPercent >= 60 && <Yellow radius="third" level="junior" />}
          {greenPercent >= 60 && <Green radius="third" level="junior" />}
          {lightbluePercent >= 60 && (
            <LightBlue radius="third" level="junior" />
          )}
          <Circle radius="fourth">
            {bluePercent >= 40 && <Blue radius="fourth" level="junior" />}
            {grayPercent >= 40 && <Gray radius="fourth" level="junior" />}
            {redPercent >= 40 && <Red radius="fourth" level="junior" />}
            {yellowPercent >= 40 && <Yellow radius="fourth" level="junior" />}
            {greenPercent >= 40 && <Green radius="fourth" level="junior" />}
            {lightbluePercent >= 40 && (
              <LightBlue radius="fourth" level="junior" />
            )}
            <Circle radius="fifth">
              {bluePercent >= 20 && <Blue radius="fifth" level="junior" />}
              {grayPercent >= 20 && <Gray radius="fifth" level="junior" />}
              {redPercent >= 20 && <Red radius="fifth" level="junior" />}
              {yellowPercent >= 20 && <Yellow radius="fifth" level="junior" />}
              {greenPercent >= 20 && <Green radius="fifth" level="junior" />}
              {lightbluePercent >= 20 && (
                <LightBlue radius="fifth" level="junior" />
              )}
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustrationForJunior };
