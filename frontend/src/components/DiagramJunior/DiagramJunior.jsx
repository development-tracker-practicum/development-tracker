import { useContext, useEffect, useState } from 'react';
import { activePeaceContext } from '../App/App';
import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustrationForJunior } from '../DiagramIllustration/DiagramIllustrationForJunior';
import './DiagramJunior.sass';
import {
  UXSEARCHING,
  UIDESIGN,
  TOOLS,
  COMMUNICATION,
  TOGROWINGUP,
  PRODUCTORIENTATION,
} from '../../constants/directionConstants';
import DiagrammAboutCommunication from '../DiagrammAbout/DiagrammAboutCommunication/DiagrammAboutCommunication';
import { DiagrammAboutUIDesigh } from '../DiagrammAbout/DiagrammAboutUIDesigh/DiagrammAboutUIDesigh';
import { DiagrammAboutTools } from '../DiagrammAbout/DiagrammAboutTools/DiagrammAboutTools';
import DiagrammAboutProductOrientation from '../DiagrammAbout/DiagrammAboutProductOrientation/DiagrammAboutProductOrientation';
import DiagrammAboutToGrowingUp from '../DiagrammAbout/DiagrammAboutToGrowingUp/DiagrammAboutToGrowingUp';
import DiagrammAboutUXSearching from '../DiagrammAbout/DiagrammAboutUXSearching/DiagrammAboutUXSearching';
import {
  BLUE,
  GRAY,
  GREEN,
  LIGHTBLUE,
  PINK,
  PURPLE,
  RED,
  YELLOW,
} from '../../constants/colorConstants';
function DiagramJunior() {
  const { activePeace } = useContext(activePeaceContext);
  const [statistics, setStatistics] = useState({
    yellow: {
      name: UXSEARCHING,
      percent: '100%',
    },
    green: {
      name: UIDESIGN,
      percent: '90%',
    },
    blue: {
      name: TOOLS,
      percent: '60%',
    },
    gray: {
      name: COMMUNICATION,
      percent: '80%',
    },
    lightblue: {
      name: TOGROWINGUP,
      percent: '100%',
    },
    red: {
      name: PRODUCTORIENTATION,
      percent: '100%',
    },
  });
  useEffect(() => {
    console.log(activePeace);
  }, [activePeace]);

  return (
    <Diagram>
      <DiagramIllustrationForJunior statistics={statistics} />
      <DiagramList>
        {activePeace ? (
          <DiagramItem
            value={statistics[activePeace].percent}
            title={statistics[activePeace].name}
            color={activePeace}
            isActive={true}
          >
            {activePeace === YELLOW && <DiagrammAboutUXSearching />}
            {activePeace === GREEN && <DiagrammAboutUIDesigh />}
            {activePeace === BLUE && <DiagrammAboutTools />}
            {activePeace === GRAY && <DiagrammAboutCommunication />}
            {activePeace === LIGHTBLUE && <DiagrammAboutToGrowingUp />}
            {activePeace === RED && <DiagrammAboutProductOrientation />}
          </DiagramItem>
        ) : (
          <>
            <DiagramItem
              value={statistics.yellow.percent}
              title={statistics.yellow.name}
              color={YELLOW}
            />
            <DiagramItem
              value={statistics.green.percent}
              title={statistics.green.name}
              color={GREEN}
            />
            <DiagramItem
              value={statistics.blue.percent}
              title={statistics.blue.name}
              color={BLUE}
            />
            <DiagramItem
              value={statistics.red.percent}
              title={statistics.red.name}
              color={RED}
            />
            <DiagramItem
              value={statistics.gray.percent}
              title={statistics.gray.name}
              color={GRAY}
            />
            <DiagramItem
              value={statistics.lightblue.percent}
              title={statistics.lightblue.name}
              color={LIGHTBLUE}
            />
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramJunior };
