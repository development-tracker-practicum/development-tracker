import CardArticle from '../../components/CardArticle/CardArticle';
import CardList from '../../components/CardList/CardList';
import { articleList } from '../../constants/articleListConstants';
import { Recommendations } from '../Reccommendations/Recommendations';
import './Articles.sass';

function Articles(props) {
  return (
    <Recommendations>
      <CardList>
        {articleList.map((card, index) => (
          <li key={index} className="card-list__item">
            <CardArticle article={card} />
          </li>
        ))}
      </CardList>
    </Recommendations>
  );
}
export default Articles;
