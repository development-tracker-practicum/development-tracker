import { useDispatch, useSelector } from 'react-redux';
import { CurrentStatus } from '../../components/CurrentStatus/CurrentStatus';
import { DiagramJunior } from '../../components/DiagramJunior/DiagramJunior';
import { DiagramMiddle } from '../../components/DiagramMiddle/DiagramMiddle';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';

import './Profile.sass';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import useStatistics from '../../hooks/useStatistics';
import { useEffect } from 'react';
import { fetchSkills, setCurrentStatistics } from '../../store/trackerSlice';
import { resetActivePeace } from '../../store/diagrammDirectionSlice';

function Profile() {
  const { level } = useSelector(state => state.status);
  const dispatch = useDispatch();
  const { middleStatistics, juniorStatistics } = useSelector(
    state => state.tracker,
  );
  const { activePeaceDirection } = useSelector(state => state.diagramm);
  const { statistics, setNewStatistics } = useStatistics();
  useEffect(() => {
    if (level === 'Middle') {
      setNewStatistics(middleStatistics);

      return;
    }
    if (level === 'Junior') {
      setNewStatistics(juniorStatistics);
      return;
    }
  }, [level, middleStatistics, juniorStatistics]);
  useEffect(() => {
    dispatch(setCurrentStatistics(statistics));
  }, [statistics]);
  useEffect(() => {
    dispatch(fetchSkills());
    if (activePeaceDirection) {
      dispatch(resetActivePeace());
    }
  }, []);
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content profile content_profile">
        <PromoNotification />
        <div className="profile__two-columns">
          <CurrentStatus />
          {level === 'Middle' && <DiagramMiddle statistics={statistics} />}
          {level === 'Junior' && <DiagramJunior statistics={statistics} />}
        </div>
      </main>
    </>
  );
}

export { Profile };
