import './CardList.sass';

function CardList({ children }) {
  return <ul className="cards">{children}</ul>;
}

export default CardList;
