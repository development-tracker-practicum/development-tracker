import React from 'react';
import './DiagrammMiddle.sass';
import { DiagrammList } from '../DiagrammList/DiagrammList';
import { DiagrammItem } from '../DiagrammItem/DiagrammItem';
import { Diagramm } from '../Diagramm/Diagramm';
import DiagrammIllustarion from '../DiagrammIllustarion/DiagrammIllustarion';

function DiagrammMiddle(props) {
    return (
        <Diagramm>
            <DiagrammIllustarion />
            <DiagrammList>
                <DiagrammItem
                    value="60%"
                    title="UX-исследования"
                    color="yellow"
                />
                <DiagrammItem value="40%" title="UI-дизайн" color="green" />
                <DiagrammItem value="80%" title="Инструменты" color="blue" />
                <DiagrammItem value="20%" title="Продукт" color="red" />
                <DiagrammItem value="20%" title="Коммуникация" color="gray" />
                <DiagrammItem value="20%" title="Про активность" color="pink" />
                <DiagrammItem
                    value="20%"
                    title="Пипл менеджмент"
                    color="purple"
                />
                <DiagrammItem
                    value="20%"
                    title="Автономность"
                    color="light-blue"
                />
            </DiagrammList>
        </Diagramm>
    );
}
export default DiagrammMiddle;
