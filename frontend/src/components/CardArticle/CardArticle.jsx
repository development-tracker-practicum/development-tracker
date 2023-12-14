import CardBtn from '../CardBtn/CardBtn';
import './CardArticle.sass';
import iconPerson from '../../Images/personIcon.svg';
function CardArticle({ article }) {
  return (
    <article className="card-article">
      <div className="card-article__container">
        <img src={article.img} alt="logo" className="card-article__img" />
        {article.btnText && (
          <div className="card-article__btn">
            <CardBtn text={article.btnText} />
          </div>
        )}
      </div>
      <h2 className="card-article__title">{article.title}</h2>
      <p className="card-article__description">
        {article.description.length > 60
          ? article.description.slice(0, 60) + '...'
          : article.description}
      </p>
      <div className="card-article__footer">
        <p className="card-article__name">
          <span
            style={{
              backgroundImage: `url(${iconPerson})`,
            }}
            className="card-article__icon"
          />
          {article.name}
        </p>
        <p className="card-article__timer">{article.time}</p>
      </div>
    </article>
  );
}

export default CardArticle;
