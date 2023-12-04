import CurrentStatus from '../../components/CurrentStatus/CurrentStatus';
import DiagrammMiddle from '../../components/DiagrammMiddle/DiagrammMiddle';
import DiagrammJunior from '../../components/DiagrammJunior/DiagrammJunior';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';
import './Profile.sass';

function Profile({ level = 'middle' }) {
    console.log(level);
    return (
        <main className="content profile content_profile">
            <PromoNotification />
            <div className="profile__two-columns">
                <CurrentStatus />
                {level === 'middle' && <DiagrammMiddle />}
                {level === 'junior' && <DiagrammJunior />}
            </div>
        </main>
    );
}

export { Profile };
