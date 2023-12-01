import { Route, Routes } from 'react-router-dom';
import { Authorization } from '../../pages/Authorization/Authorization';
// import Desk from '../../pages/Desk/Desk.jsx';

import './App.css';
import Desk from '../../pages/Diary/Diary';
import Metrika from '../../pages/Metrika/Metrika';
import LearningTrack from '../../pages/LearningTrack/LearningTrack';
import { createContext, useState } from 'react';
export const activePeaceContext = createContext(null);
function App() {
    const [activePeace, setActivePeace] = useState('');
    function handlePeace(color) {
        setActivePeace(color);
    }
    return (
        <div className="app">
            <activePeaceContext.Provider value={{ activePeace, handlePeace }}>
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
                    <Route
                        path="/track/profile"
                        element={<LearningTrack />}
                    ></Route>
                </Routes>
            </activePeaceContext.Provider>
        </div>
    );
}

export { App };
