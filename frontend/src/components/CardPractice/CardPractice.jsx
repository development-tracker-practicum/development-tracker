import CardBtn from '../CardBtn/CardBtn';
import './CardPractice.sass';

function CardPractice({ practice }) {
  return (
    <article className="card-practice">
      <div className="card-practice__container">
        <img src={practice.img} alt="logo" className="card__img" />
        <p className="card-practice__company">{practice.title}</p>
      </div>
      <h2 className="card-practice__description">{practice.description}</h2>
      <div className="card-practice__footer">
        <p className="card-practice__timer">{practice.time}</p>
        {practice.btnText && <CardBtn text={practice.btnText} />}
      </div>
    </article>
  );
}

export default CardPractice;
