import { Navigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';

import './Recommendations.sass';
import { TabMenu } from '../../components/TabMenu/TabMenu';
import { useSelector } from 'react-redux';
function Recommendations({ children }) {
  const user = useSelector(state => state.user);
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content content_recommendations">
        <section className="recommendations">
          <div className="recommendations__title-zone">
            <h2 className="recommendations__title recommendations__title_level">
              {user.currentLevel}
            </h2>
            <h2 className="recommendations__title recommendations__title_profession">
              {user.currentProfession}
            </h2>
            <h2 className="recommendations__title recommendations__title_percent">
              {user.currentMatch}
            </h2>
          </div>
          <TabMenu />
          {children}
        </section>
      </main>
    </>
  );
}

export { Recommendations };
