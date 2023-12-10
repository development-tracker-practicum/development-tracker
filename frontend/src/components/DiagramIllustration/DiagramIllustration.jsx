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
  const bluePercent = parseInt(statistics?.blue?.percent);
  const lightbluePercent = parseInt(statistics?.lightblue?.percent);
  const grayPercent = parseInt(statistics?.gray?.percent);
  const yellowPercent = parseInt(statistics?.yellow?.percent);
  const greenPercent = parseInt(statistics?.green?.percent);
  const redPercent = parseInt(statistics?.red?.percent);
  const pinkPercent = parseInt(statistics?.pink?.percent);
  const purplePercent = parseInt(statistics?.purple?.percent);
  return (
    <Circle radius="first">
      {pinkPercent === 100 && <Pink radius="first" />}
      {grayPercent === 100 && <Gray radius="first" />}
      {redPercent === 100 && <Red radius="first" />}
      {lightbluePercent === 100 && <LightBlue radius="first" />}
      {yellowPercent === 100 && <Yellow radius="first" />}
      {greenPercent === 100 && <Green radius="first" />}
      {bluePercent === 100 && <Blue radius="first" />}
      {purplePercent === 100 && <Purple radius="first" />}
      <Circle radius="second">
        {pinkPercent >= 80 && <Pink radius="second" />}
        {grayPercent >= 80 && <Gray radius="second" />}
        {redPercent >= 80 && <Red radius="second" />}
        {lightbluePercent >= 80 && <LightBlue radius="second" />}
        {yellowPercent >= 80 && <Yellow radius="second" />}
        {greenPercent >= 80 && <Green radius="second" />}
        {bluePercent >= 80 && <Blue radius="second" />}
        {purplePercent >= 80 && <Purple radius="second" />}
        <Circle radius="third">
          {pinkPercent >= 60 && <Pink radius="third" />}
          {grayPercent >= 60 && <Gray radius="third" />}
          {redPercent >= 60 && <Red radius="third" />}
          {lightbluePercent >= 60 && <LightBlue radius="third" />}
          {yellowPercent >= 60 && <Yellow radius="third" />}
          {greenPercent >= 60 && <Green radius="third" />}
          {bluePercent >= 60 && <Blue radius="third" />}
          {purplePercent >= 60 && <Purple radius="third" />}
          <Circle radius="fourth">
            {pinkPercent >= 40 && <Pink radius="fourth" />}
            {grayPercent >= 40 && <Gray radius="fourth" />}
            {redPercent >= 40 && <Red radius="fourth" />}
            {lightbluePercent >= 40 && <LightBlue radius="fourth" />}
            {yellowPercent >= 40 && <Yellow radius="fourth" />}
            {greenPercent >= 40 && <Green radius="fourth" />}
            {bluePercent >= 40 && <Blue radius="fourth" />}
            {purplePercent >= 40 && <Purple radius="fourth" />}
            <Circle radius="fifth">
              {pinkPercent >= 20 && <Pink radius="fifth" />}
              {grayPercent >= 20 && <Gray radius="fifth" />}
              {redPercent >= 20 && <Red radius="fifth" />}
              {lightbluePercent >= 20 && <LightBlue radius="fifth" />}
              {yellowPercent >= 20 && <Yellow radius="fifth" />}
              {greenPercent >= 20 && <Green radius="fifth" />}
              {bluePercent >= 20 && <Blue radius="fifth" />}
              {purplePercent >= 20 && <Purple radius="fifth" />}
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustration };
