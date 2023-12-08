import { PromoNotification } from '../../components/PromoNotification/PromoNotification';
import { Board } from '../../components/Board/Board';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
function Desk() {
  return (
    <>
      <Header />
      <SidePanel />
      <main className="content content_desk">
        <PromoNotification />
        <Board />
      </main>
    </>
  );
}
export { Desk };
