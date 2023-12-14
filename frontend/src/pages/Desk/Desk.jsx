import { PromoNotification } from '../../components/PromoNotification/PromoNotification';
import { Board } from '../../components/Board/Board';
import { Diary } from '../Diary/Diary';
function Desk() {
  return (
    <Diary>
      <main className="content content_desk">
        <PromoNotification />
        <Board />
      </main>
    </Diary>
  );
}
export { Desk };
