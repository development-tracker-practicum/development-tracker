import CurrentStatus from '../../components/CurrentStatus/CurrentStatus';
import DiagrammJunior from '../../components/DiagrammJunior/DiagrammJunior';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';
import './Profile.sass';

function Profile(props) {
    return (
        <main className="content profile content_profile">
            <PromoNotification />
            <div className="profile__two-columns">
                <CurrentStatus />
                <DiagrammJunior />
            </div>
        </main>
    );
}
export { Profile };
