import { Route, Routes } from 'react-router-dom';
import { Authorization } from '../../pages/Authorization/Authorization';
// import Desk from '../../pages/Desk/Desk.jsx';

import './App.css';
import Desk from '../../pages/Diary/Diary';
import Metrika from '../../pages/Metrika/Metrika';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/diary/desk" element={<Desk />} />
                <Route
                    path="/signup"
                    element={<Authorization submitText="Регистрация" />}
                />
                <Route
                    path="/signin"
                    element={
                        <Authorization path="/signin" submitText="Войти" />
                    }
                />
                <Route path="/diary/metrika" element={<Metrika />} />
            </Routes>
        </div>
    );
}

export { App };
