import './DiagramJunior.sass';
import { DiagramList } from '../DiagramList/DiagramList';
import { DiagramItem } from '../DiagramItem/DiagramItem';
import { Diagram } from '../Diagram/Diagram';
import { DiagramIllustarionForJunior } from '../DiagrammIllustarion/DiagramIllustarionForJunior';

function DiagramJunior() {
    return (
        <Diagram>
            <DiagramIllustarionForJunior />
            <DiagramList>
                <DiagramItem
                    value="60%"
                    title="UX-исследования"
                    color="yellow"
                />
                <DiagramItem value="40%" title="UI-дизайн" color="green" />
                <DiagramItem value="20%" title="Продукт" color="red" />
                <DiagramItem value="20%" title="Коммуникация" color="gray" />
                <DiagramItem value="20%" title="Про активность" color="pink" />
                <DiagramItem
                    value="20%"
                    title="Пипл менеджмент"
                    color="purple"
                />
            </DiagramList>
        </Diagram>
    );
}

export { DiagramJunior };
