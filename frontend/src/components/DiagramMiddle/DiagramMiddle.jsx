import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustarion } from '../DiagrammIllustarion/DiagramIllustarion';

function DiagramMiddle() {
    return (
        <Diagram>
            <DiagramIllustarion />
            <DiagramList>
                <DiagramItem
                    value="60%"
                    title="UX-исследования"
                    color="yellow"
                />
                <DiagramItem value="40%" title="UI-дизайн" color="green" />
                <DiagramItem value="80%" title="Инструменты" color="blue" />
                <DiagramItem value="20%" title="Продукт" color="red" />
                <DiagramItem value="20%" title="Коммуникация" color="gray" />
                <DiagramItem value="20%" title="Про активность" color="pink" />
                <DiagramItem
                    value="20%"
                    title="Пипл менеджмент"
                    color="purple"
                />
                <DiagramItem
                    value="20%"
                    title="Автономность"
                    color="light-blue"
                />
            </DiagramList>
        </Diagram>
    );
}

export { DiagramMiddle };
