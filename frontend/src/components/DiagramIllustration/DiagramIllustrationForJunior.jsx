import { Circle } from './Circle/Circle';
import { Gray } from './Peace/Gray';
import { Red } from './Peace/Red';
import { Pink } from './Peace/Pink';
import { Yellow } from './Peace/Yellow';
import { Green } from './Peace/Green';
import { Purple } from './Peace/Purple';
import './Peace/Peace.sass';

function DiagramIllustrationForJunior({ onHandlePeace }) {
  const handlePeace = (activePeace) => {
    onHandlePeace(activePeace);
  };

  return (
    <Circle radius="first">
      <Pink onClick={handlePeace} radius="first" level="junior" />
      <Gray onClick={handlePeace} radius="first" level="junior" />
      <Red onClick={handlePeace} radius="first" level="junior" />
      <Yellow onClick={handlePeace} radius="first" level="junior" />
      <Green onClick={handlePeace} radius="first" level="junior" />
      <Purple onClick={handlePeace} radius="first" level="junior" />
      <Circle radius="second">
        <Pink onClick={handlePeace} radius="second" level="junior" />
        <Gray onClick={handlePeace} radius="second" level="junior" />
        <Red onClick={handlePeace} radius="second" level="junior" />
        <Yellow onClick={handlePeace} radius="second" level="junior" />
        <Green onClick={handlePeace} radius="second" level="junior" />
        <Purple onClick={handlePeace} radius="second" level="junior" />
        <Circle radius="third">
          <Pink onClick={handlePeace} radius="third" level="junior" />
          <Gray onClick={handlePeace} radius="third" level="junior" />
          <Red onClick={handlePeace} radius="third" level="junior" />
          <Yellow onClick={handlePeace} radius="third" level="junior" />
          <Green onClick={handlePeace} radius="third" level="junior" />
          <Purple onClick={handlePeace} radius="third" level="junior" />
          <Circle radius="fourth">
            <Pink onClick={handlePeace} radius="fourth" level="junior" />
            <Gray onClick={handlePeace} radius="fourth" level="junior" />
            <Red onClick={handlePeace} radius="fourth" level="junior" />
            <Yellow onClick={handlePeace} radius="fourth" level="junior" />
            <Green onClick={handlePeace} radius="fourth" level="junior" />
            <Purple onClick={handlePeace} radius="fourth" level="junior" />
            <Circle onClick={handlePeace} radius="fifth">
              <Pink onClick={handlePeace} radius="fifth" level="junior" />
              <Gray onClick={handlePeace} radius="fifth" level="junior" />
              <Red onClick={handlePeace} radius="fifth" level="junior" />
              <Yellow onClick={handlePeace} radius="fifth" level="junior" />
              <Green onClick={handlePeace} radius="fifth" level="junior" />
              <Purple onClick={handlePeace} radius="fifth" level="junior" />
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </Circle>
  );
}

export { DiagramIllustrationForJunior };
