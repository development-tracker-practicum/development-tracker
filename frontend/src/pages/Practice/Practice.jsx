import { useSelector } from 'react-redux';
import CardList from '../../components/CardList/CardList';
import CardPractice from '../../components/CardPractice/CardPractice';
import FilterPractice from '../../components/FilterPractice/FilterPractice';
import { Recommendations } from '../Reccommendations/Recommendations';

function Practice() {
  const recommendations = useSelector(state => state.recommendations);

  return (
    <Recommendations>
      <FilterPractice />
      <CardList>
        {recommendations.list.practiceList.map((card, index) => (
          <CardPractice key={index} practice={card} />
        ))}
      </CardList>
    </Recommendations>
  );
}
export default Practice;
