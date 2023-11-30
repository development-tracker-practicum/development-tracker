import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import './Diary.sass';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification';

function Diary(properties) {
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content">
        <PromoNotification />
      </main>
    </>
  );
}

export { Diary };
