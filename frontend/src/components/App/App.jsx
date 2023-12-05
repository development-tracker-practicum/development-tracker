import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../../context/context';
import { ProtectedRoute } from '../../services/PotectedRouter';
import { Authorization } from '../../pages/Authorization/Authorization';
import { Diary } from '../../pages/Diary/Diary';
import { Metrika } from '../../pages/Metrika/Metrika';
import { LearningTrack } from '../../pages/LearningTrack/LearningTrack';
import { Recommendation } from '../../pages/Recommendation/Recommendation';
import './App.css';

export const activePeaceContext = createContext(undefined);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activePeace, setActivePeace] = useState('');

  function handlePeace(color) {
    setActivePeace(color);
  }

  return (
    <div className="app">
      <Context.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
        }}
      >
        <activePeaceContext.Provider value={{ activePeace, handlePeace }}>
          <Routes>
            <Route
              path="/signup"
              element={<Authorization submitText="Регистрация" />}
            />
            <Route
              path="/signin"
              element={<Authorization path="/signin" submitText="Войти" />}
            />
            <Route
              path="/diary/desk"
              element={<ProtectedRoute element={Diary} />}
            />
            <Route
              path="/diary/metrika"
              element={<ProtectedRoute element={Metrika} />}
            />
            <Route
              path="/track/profile"
              element={<ProtectedRoute element={LearningTrack} />}
            />
            <Route
              path="/track/recommendation"
              element={<ProtectedRoute element={Recommendation} />}
            />
          </Routes>
        </activePeaceContext.Provider>
      </Context.Provider>
    </div>
  );
}

export { App };
