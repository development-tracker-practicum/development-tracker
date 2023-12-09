import { useContext, useEffect, useState } from 'react';
import { activePeaceContext } from '../App/App';
import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustration } from '../DiagramIllustration/DiagramIllustration';
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
import { useSelector } from 'react-redux';
function DiagramMiddle() {
  const { activePeace } = useContext(activePeaceContext);
  const { middleStatistics } = useSelector(state => state.statistics);
  return (
    <Diagram>
      <DiagramIllustration statistics={middleStatistics} />
      <DiagramList>
        {activePeace ? (
          <DiagramItem
            value={middleStatistics?.[activePeace]?.percent}
            title={middleStatistics?.[activePeace]?.name}
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
              value={middleStatistics?.yellow?.percent}
              title={middleStatistics?.yellow?.name}
              color={YELLOW}
            />
            <DiagramItem
              value={middleStatistics?.green?.percent}
              title={middleStatistics?.green?.name}
              color={GREEN}
            />
            <DiagramItem
              value={middleStatistics?.blue?.percent}
              title={middleStatistics?.blue?.name}
              color={BLUE}
            />
            <DiagramItem
              value={middleStatistics?.red?.percent}
              title={middleStatistics?.red?.name}
              color={RED}
            />
            <DiagramItem
              value={middleStatistics?.gray?.percent}
              title={middleStatistics?.gray?.name}
              color={GRAY}
            />
            <DiagramItem
              value={middleStatistics?.lightblue?.percent}
              title={middleStatistics?.lightblue?.name}
              color={LIGHTBLUE}
            />
            <DiagramItem
              value={middleStatistics?.pink?.percent}
              title={middleStatistics?.pink?.name}
              color={PINK}
            />
            <DiagramItem
              value={middleStatistics?.purple?.percent}
              title={middleStatistics?.purple?.name}
              color={PURPLE}
            />
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramMiddle };
