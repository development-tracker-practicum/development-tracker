import { useEffect, useState } from 'react';
import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustrationForJunior } from '../DiagramIllustration/DiagramIllustrationForJunior';
import './DiagramJunior.sass';
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
  RED,
  YELLOW,
} from '../../constants/colorConstants';
import { useSelector } from 'react-redux';
function DiagramJunior() {
  const { juniorStatistics } = useSelector(state => state.statistics);
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  return (
    <Diagram>
      <DiagramIllustrationForJunior statistics={juniorStatistics} />
      <DiagramList>
        {activePeaceDirection ? (
          <DiagramItem
            value={juniorStatistics?.[activePeaceDirection]?.percent}
            title={juniorStatistics?.[activePeaceDirection]?.name}
            color={activePeaceDirection}
            isActive={true}
          >
            {activePeaceDirection === YELLOW && <DiagrammAboutUXSearching />}
            {activePeaceDirection === GREEN && <DiagrammAboutUIDesigh />}
            {activePeaceDirection === BLUE && <DiagrammAboutTools />}
            {activePeaceDirection === GRAY && <DiagrammAboutCommunication />}
            {activePeaceDirection === LIGHTBLUE && <DiagrammAboutToGrowingUp />}
            {activePeaceDirection === RED && (
              <DiagrammAboutProductOrientation />
            )}
          </DiagramItem>
        ) : (
          <>
            <DiagramItem
              value={juniorStatistics?.yellow?.percent}
              title={juniorStatistics?.yellow?.name}
              color={YELLOW}
            />
            <DiagramItem
              value={juniorStatistics?.green?.percent}
              title={juniorStatistics?.green?.name}
              color={GREEN}
            />
            <DiagramItem
              value={juniorStatistics?.blue?.percent}
              title={juniorStatistics?.blue?.name}
              color={BLUE}
            />
            <DiagramItem
              value={juniorStatistics?.red?.percent}
              title={juniorStatistics?.red?.name}
              color={RED}
            />
            <DiagramItem
              value={juniorStatistics?.gray?.percent}
              title={juniorStatistics?.gray?.name}
              color={GRAY}
            />
            <DiagramItem
              value={juniorStatistics?.lightblue?.percent}
              title={juniorStatistics?.lightblue?.name}
              color={LIGHTBLUE}
            />
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramJunior };
