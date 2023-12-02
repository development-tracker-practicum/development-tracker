import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { Profile } from '../Profile/Profile';
import './LearningTrack.sass';

function LearningTrack() {
  return (
    <>
      <Header />
      <SidePanel />
      <Profile />
    </>
  );
}

export { LearningTrack };
