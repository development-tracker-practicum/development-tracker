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
import Reccomendations from '../../pages/Reccomendations/Reccomendations';
import { useSelector } from 'react-redux';

export const activePeaceContext = createContext(undefined);

function App() {
  const user = useSelector(state => state.user);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activePeace, setActivePeace] = useState('');

  function handlePeace(color) {
    setActivePeace(prev => (prev === color ? '' : color));
  }

  return (
    <div className="app">
      <activePeaceContext.Provider value={{ activePeace, handlePeace }}>
        <Routes>
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                isLogged={!user.isLogged}
                submitText="Регистрация"
                path="/signup"
                element={Authorization}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                isLogged={!user.isLogged}
                path="/signin"
                submitText="Войти"
                element={Authorization}
              />
            }
          />
          <Route
            path="/diary/desk"
            element={
              <ProtectedRoute isLogged={user.isLogged} element={Diary} />
            }
          />
          <Route
            path="/diary/metrika"
            element={
              <ProtectedRoute isLogged={user.isLogged} element={Metrika} />
            }
          />
          <Route
            path="/track/profile"
            element={
              <ProtectedRoute
                isLogged={user.isLogged}
                element={LearningTrack}
              />
            }
          />
          <Route
            path="/track/recommendations"
            element={
              <ProtectedRoute
                isLogged={user.isLogged}
                element={LearningTrack}
              />
            }
          />
        </Routes>
      </activePeaceContext.Provider>
    </div>
  );
}

export { App };
