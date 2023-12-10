import CardList from '../../components/CardList/CardList';
import CardPractice from '../../components/CardPractice/CardPractice';
import FilterPractice from '../../components/FilterPractice/FilterPractice';
import { practiceList } from '../../constants/practiseListConstants';
import { Recommendations } from '../Reccommendations/Recommendations';

function Practice() {
  return (
    <Recommendations>
      <FilterPractice />
      <CardList>
        {practiceList.map((card, index) => (
          <CardPractice key={index} practice={card} />
        ))}
      </CardList>
    </Recommendations>
  );
}
export default Practice;
