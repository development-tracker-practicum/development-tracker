import { LearningTrack } from '../LearningTrack/LearningTrack';
import './Recommendations.sass';
import { TabMenu } from '../../components/TabMenu/TabMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getRecommendations,
  setNewCourses,
} from '../../store/recommendationsSlice';
import { totalMatchJunior, totalMatchMiddle } from '../../store/trackerSlice';
function Recommendations({ children }) {
  const status = useSelector(state => state.status);
  const middleMatch = useSelector(totalMatchMiddle);
  const juniorMatch = useSelector(totalMatchJunior);
  const dispatch = useDispatch();
  useEffect(() => {
    const localCards = localStorage.getItem('list');
    if (localCards) {
      dispatch(setNewCourses(JSON.parse(localCards)));
      return;
    }
    dispatch(getRecommendations({ userID: '1' }));
  }, []);
  return (
    <LearningTrack>
      <main className="content content_recommendations">
        <section className="recommendations">
          <div className="recommendations__title-zone">
            <h2 className="recommendations__title recommendations__title_level">
              {status.level}
            </h2>
            <h2 className="recommendations__title recommendations__title_profession">
              {status.profession}
            </h2>
            <h2 className="recommendations__title recommendations__title_percent">
              {` ${status.level === 'Middle' ? middleMatch : juniorMatch} %`}
            </h2>
          </div>
          <TabMenu />
          {children}
        </section>
      </main>
    </LearningTrack>
  );
}

export { Recommendations };
