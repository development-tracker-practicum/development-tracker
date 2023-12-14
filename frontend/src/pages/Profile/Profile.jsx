import { useSelector } from 'react-redux';
import { CurrentStatus } from '../../components/CurrentStatus/CurrentStatus';
import { DiagramJunior } from '../../components/DiagramJunior/DiagramJunior';
import { DiagramMiddle } from '../../components/DiagramMiddle/DiagramMiddle';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';

import './Profile.sass';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';

function Profile() {
  const user = useSelector(state => state.user);
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content profile content_profile">
        <PromoNotification />
        <div className="profile__two-columns">
          <CurrentStatus />
          {user.currentLevel === 'Middle' && <DiagramMiddle />}
          {user.currentLevel === 'Junior' && <DiagramJunior />}
        </div>
      </main>
    </>
  );
}

export { Profile };
