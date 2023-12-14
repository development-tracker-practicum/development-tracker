import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustrationForMiddle } from '../DiagramIllustration/DiagramIllustrationForMiddle';
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
function DiagramMiddle({ statistics }) {
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  return (
    <Diagram>
      <DiagramIllustrationForMiddle statistics={statistics} />
      <DiagramList>
        {activePeaceDirection ? (
          <DiagramItem
            value={statistics?.[activePeaceDirection]?.percent}
            title={statistics?.[activePeaceDirection]?.name}
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
              value={statistics?.yellow?.percent}
              title={statistics?.yellow?.name}
              color={YELLOW}
            />
            <DiagramItem
              value={statistics?.green?.percent}
              title={statistics?.green?.name}
              color={GREEN}
            />
            <DiagramItem
              value={statistics?.blue?.percent}
              title={statistics?.blue?.name}
              color={BLUE}
            />
            <DiagramItem
              value={statistics?.red?.percent}
              title={statistics?.red?.name}
              color={RED}
            />
            <DiagramItem
              value={statistics?.gray?.percent}
              title={statistics?.gray?.name}
              color={GRAY}
            />
            <DiagramItem
              value={statistics?.lightblue?.percent}
              title={statistics?.lightblue?.name}
              color={LIGHTBLUE}
            />
            <DiagramItem
              value={statistics?.pink?.percent}
              title={statistics?.pink?.name}
              color={PINK}
            />
            <DiagramItem
              value={statistics?.purple?.percent}
              title={statistics?.purple?.name}
              color={PURPLE}
            />
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramMiddle };
