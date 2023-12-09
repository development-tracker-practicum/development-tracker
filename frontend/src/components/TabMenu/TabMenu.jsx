import { useLocation } from 'react-router-dom';
import { TabMenuItem } from '../TabMenuItem/TabMenuItem';
import './TabMenu.sass';

function TabMenu() {
  const location = useLocation();
  return (
    <ul className="tab-menu">
      <TabMenuItem
        path="/track/recommendations/courses"
        isActive={location.pathname === '/track/recommendations/courses'}
        isDisabled={false}
        text="Курсы"
      />
      <TabMenuItem
        path="/track/recommendations/practice"
        isActive={location.pathname === '/track/recommendations/practice'}
        isDisabled={false}
        text="Практика"
      />
      <TabMenuItem
        path="/track/recommendations/articles"
        isActive={location.pathname === '/track/recommendations/articles'}
        isDisabled={false}
        text="Статьи"
      />
      <TabMenuItem
        isActive={false}
        isDisabled={true}
        text="Встреча с наставником"
      />
      <TabMenuItem isActive={false} isDisabled={true} text="Пройти тест" />
    </ul>
  );
}

export { TabMenu };
