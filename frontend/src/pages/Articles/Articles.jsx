import { useSelector } from 'react-redux';
import CardArticle from '../../components/CardArticle/CardArticle';
import CardList from '../../components/CardList/CardList';
import { Recommendations } from '../Reccommendations/Recommendations';
import './Articles.sass';

function Articles() {
  const recommendations = useSelector(state => state.recommendations);
  return (
    <Recommendations>
      <CardList>
        {recommendations.list.articleList.map((card, index) => (
          <li key={index} className="card-list__item">
            <CardArticle article={card} />
          </li>
        ))}
      </CardList>
    </Recommendations>
  );
}
export default Articles;
