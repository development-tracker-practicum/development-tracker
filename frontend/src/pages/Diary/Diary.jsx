import './Diary.sass';
import { Header } from '../../components/Header/Header.jsx';
import { SidePanel } from '../../components/SidePanel/SidePanel.jsx';
import { Desk } from '../../components/Desk/Desk.jsx';
function Diary(props) {
    return (
        <>
            <Header />
            <SidePanel />
            <Desk />
        </>
    );
}
export default Diary;
