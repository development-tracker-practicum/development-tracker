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
function DiagramJunior({ statistics }) {
  const { activePeaceDirection } = useSelector(state => state.diagramm);

  return (
    <Diagram>
      <DiagramIllustrationForJunior statistics={statistics} />
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
          </>
        )}
      </DiagramList>
    </Diagram>
  );
}

export { DiagramJunior };
