import { Header } from '../../components/Header/Header.jsx';
import { SidePanel } from '../../components/SidePanel/SidePanel.jsx';
import { PromoNotification } from '../../components/PromoNotification/PromoNotification.jsx';
function Metrika(props) {
    return (
        <>
            <Header />
            <SidePanel />
            <main className="content">
                <PromoNotification />
            </main>
        </>
    );
}
export default Metrika;
