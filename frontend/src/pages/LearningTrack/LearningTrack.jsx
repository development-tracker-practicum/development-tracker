import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';

function LearningTrack({ children }) {
  return (
    <>
      <Header />
      <SidePanel />
      {children}
    </>
  );
}

export { LearningTrack };
