import { useContext, useEffect, useState } from 'react';
import { activePeaceContext } from '../App/App';
import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustration } from '../DiagramIllustration/DiagramIllustration';
import {
  UXSEARCHING,
  UIDESIGN,
  TOOLS,
  COMMUNICATION,
  TOGROWINGUP,
  PRODUCTORIENTATION,
  PROACTION,
  PEOPLEMANAGEMENT,
} from '../../constants/directionConstants';
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
import DiagrammAboutUXSearching from '../DiagrammAbout/DiagrammAboutUXSearching/DiagrammAboutUXSearching';
import { DiagrammAboutUIDesigh } from '../DiagrammAbout/DiagrammAboutUIDesigh/DiagrammAboutUIDesigh';
import { DiagrammAboutTools } from '../DiagrammAbout/DiagrammAboutTools/DiagrammAboutTools';
import DiagrammAboutCommunication from '../DiagrammAbout/DiagrammAboutCommunication/DiagrammAboutCommunication';
import DiagrammAboutPeopleManagement from '../DiagrammAbout/DiagrammAboutPeopleManagement/DiagrammAboutPeopleManagement';
import DiagrammAboutProAction from '../DiagrammAbout/DiagrammAboutProAction/DiagrammAboutProAction';
import DiagrammAboutProductOrientation from '../DiagrammAbout/DiagrammAboutProductOrientation/DiagrammAboutProductOrientation';
import DiagrammAboutToGrowingUp from '../DiagrammAbout/DiagrammAboutToGrowingUp/DiagrammAboutToGrowingUp';
function DiagramMiddle() {
  const { activePeace } = useContext(activePeaceContext);
  const [statistics, setStatistics] = useState({
    yellow: {
      name: UXSEARCHING,
      percent: '80%',
    },
    green: {
      name: UIDESIGN,
      percent: '47%',
    },
    blue: {
      name: TOOLS,
      percent: '60%',
    },
    gray: {
      name: COMMUNICATION,
      percent: '42%',
    },
    lightblue: {
      name: TOGROWINGUP,
      percent: '61%',
    },
    red: {
      name: PRODUCTORIENTATION,
      percent: '80%',
    },
    purple: {
      name: PROACTION,
      percent: '86%',
    },
    pink: {
      name: PEOPLEMANAGEMENT,
      percent: '20%',
    },
  });
  useEffect(() => {
    console.log(activePeace);
  }, [activePeace]);
  return (
    <Diagram>
      <DiagramIllustration statistics={statistics} />
      <DiagramList>
        {activePeace ? (
          <DiagramItem
            value={statistics[activePeace]?.percent}
            title={statistics[activePeace]?.name}
            color={activePeace}
            isActive={true}
          >
            {activePeace === YELLOW && <DiagrammAboutUXSearching />}
            {activePeace === GREEN && <DiagrammAboutUIDesigh />}
            {activePeace === BLUE && <DiagrammAboutTools />}
            {activePeace === GRAY && <DiagrammAboutCommunication />}
            {activePeace === LIGHTBLUE && <DiagrammAboutToGrowingUp />}
            {activePeace === RED && <DiagrammAboutProductOrientation />}
            {activePeace === PURPLE && <DiagrammAboutPeopleManagement />}
            {activePeace === PINK && <DiagrammAboutProAction />}
          </DiagramItem>
        ) : (
          <>
            <DiagramItem
              value={statistics.yellow.percent}
              title={UXSEARCHING}
              color={YELLOW}
            />
            <DiagramItem
              value={statistics.green.percent}
              title={UIDESIGN}
              color={GREEN}
            />
            <DiagramItem
              value={statistics.blue.percent}
              title={TOOLS}
              color={BLUE}
            />
            <DiagramItem
              value={statistics.red.percent}
              title={PRODUCTORIENTATION}
              color={RED}
            />
            <DiagramItem
              value={statistics.gray.percent}
              title={COMMUNICATION}
              color={GRAY}
            />
            <DiagramItem
              value={statistics.lightblue.percent}
              title={TOGROWINGUP}
              color={LIGHTBLUE}
            />
            <DiagramItem
              value={statistics.pink.percent}
              title={PROACTION}
              color={PINK}
            />
            <DiagramItem
              value={statistics.purple.percent}
              title={PEOPLEMANAGEMENT}
              color={PURPLE}
            />
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramMiddle };
