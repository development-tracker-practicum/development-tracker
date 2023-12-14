import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';

function Diary({ children }) {
  return (
    <>
      <Header />
      <SidePanel />
      {children}
    </>
  );
}

export { Diary };
