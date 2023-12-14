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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetActivePeace } from '../../store/diagrammDirectionSlice';
function DiagramMiddle() {
  const { middleStatistics } = useSelector(state => state.statistics);
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const dispatch = useDispatch();
  useEffect(() => {
    if (activePeaceDirection) {
      dispatch(resetActivePeace());
    }
  }, []);
  return (
    <Diagram>
      <DiagramIllustration statistics={middleStatistics} />
      <DiagramList>
        {activePeaceDirection ? (
          <DiagramItem
            value={middleStatistics?.[activePeaceDirection]?.percent}
            title={middleStatistics?.[activePeaceDirection]?.name}
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
            {activePeaceDirection === PURPLE && (
              <DiagrammAboutPeopleManagement />
            )}
            {activePeaceDirection === PINK && <DiagrammAboutProAction />}
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
