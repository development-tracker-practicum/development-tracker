import CardList from '../../components/CardList/CardList';
import CardPractice from '../../components/CardPractice/CardPractice';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { practiceList } from '../../constants/practiseListConstants';
import { Recommendations } from '../Reccommendations/Recommendations';
import './Practice.sass';

function Practice(props) {
  return (
    <Recommendations>
      <CardList>
        {practiceList.map((card, index) => (
          <CardPractice key={index} practice={card} />
        ))}
      </CardList>
    </Recommendations>
  );
}
export default Practice;
