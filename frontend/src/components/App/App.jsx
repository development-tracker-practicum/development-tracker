import { createContext, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from '../../services/PotectedRouter';
import { Authorization } from '../../pages/Authorization/Authorization';
import { Diary } from '../../pages/Diary/Diary';
import { Metrika } from '../../pages/Metrika/Metrika';
import { LearningTrack } from '../../pages/LearningTrack/LearningTrack';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginUser, logout, setUser } from '../../store/userSlice';
import { Desk } from '../../pages/Desk/Desk';
import { Profile } from '../../pages/Profile/Profile';
import { Recommendations } from '../../pages/Reccommendations/Recommendations';

export const activePeaceContext = createContext(undefined);

function App() {
  const user = useSelector((state) => state.user);
  const [activePeace, setActivePeace] = useState('');
  function resetPeaces() {
    setActivePeace('');
  }
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  function checkLogin() {
    const isLogged = localStorage.getItem('isLogged');

    if (isLogged === 'true') {
      console.log('working');
      dispatch(loginUser());
      navigate(location.pathname, { replace: true });
    } else {
      dispatch(logout());
    }
  }
  useEffect(() => {
    console.log(user.isLogged);
  }, [user.isLogged]);
  useEffect(() => checkLogin(), []);
  function handlePeace(color) {
    setActivePeace((previous) => (previous === color ? '' : color));
  }

  return (
    <activePeaceContext.Provider
      value={{ activePeace, handlePeace, resetPeaces }}
    >
      <div className="app">
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
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/desk" element={<Desk />} />
          <Route path="/track" element={<LearningTrack />} />
          <Route path="/track/profile" element={<Profile />} />
          <Route path="/track/recommendations" element={<Recommendations />} />
          <Route path="*" element={<Navigate to="/diary" replace />} />
        </Routes>
      </div>
    </activePeaceContext.Provider>
  );
}

export { App };
