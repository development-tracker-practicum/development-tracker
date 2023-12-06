import { useEffect, useState } from 'react';
import './Reccomendations.sass';
import arrowImg from '../../Images/arrow_down.svg';
import { DropDownMenu } from '../../components/DropDownMenu/DropDownMenu';
import { TabMenu } from '../../components/TabMenu/TabMenu';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { FilterCourses } from '../../components/FilterCourses/FilterCourses';
import { DropDownMenuReccomendation } from '../../components/DropDownMenuReccomendation/DropDownMenuReccomendation';
function Reccomendations(props) {
  const [reccomendFilter, setReccomendFilter] = useState('Текущий');
  return (
    <main className="content content_reccomendations">
      <section className="reccomendations">
        <div className="reccomendations__title-zone">
          <h2 className="reccomendations__title reccomendations__title_level">
            Middle
          </h2>
          <h2 className="reccomendations__title reccomendations__title_profession">
            Дизайнер
          </h2>
          <h2 className="reccomendations__title reccomendations__title_percent">
            55%
          </h2>
        </div>
        <TabMenu />
        <DropDownMenuReccomendation
          currentItem={reccomendFilter}
          onClick={setReccomendFilter}
        />
      </section>
      <FilterCourses />
    </main>
  );
}
export default Reccomendations;
