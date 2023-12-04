import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { Profile } from '../Profile/Profile';
function LearningTrack(props) {
    return (
        <>
            <Header />
            <SidePanel />
            <Profile level="middle" />
        </>
    );
}

export { LearningTrack };
