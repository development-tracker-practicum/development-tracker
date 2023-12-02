import { CurrentStatus } from '../../components/CurrentStatus/CurrentStatus';
import { DiagramJunior } from '../../components/DiagramJunior/DiagramJunior';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';
import './Profile.sass';

function Profile() {
  return (
    <main className="content profile content_profile">
      <PromoNotification />
      <div className="profile__two-columns">
        <CurrentStatus />
        <DiagramJunior />
      </div>
    </main>
  );
}

export { Profile };
