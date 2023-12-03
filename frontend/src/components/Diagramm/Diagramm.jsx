import { Children } from 'react';
import DiagrammIllustarion from '../DiagrammIllustarion/DiagrammIllustarion';
import DiagrammIllustarionForJunior from '../DiagrammIllustarion/DiagrammIllustarionForJunior';
import './Diagramm.sass';

function Diagramm({ children }) {
    return (
        <section className="diagramm">
            <h2 className="diagramm__title">
                Уровень твоих навыков на основе оценки диплома
            </h2>
            <div className="diagramm__statistic-zone">{children}</div>
            <p className="diagramm__footer-text">
                Для более точной оценки необходимо пройти тестирование или
                назначить встречу с наставником
                <a className="diagramm__link-more">Узнать больше</a>
            </p>
        </section>
    );
}
export { Diagramm };
