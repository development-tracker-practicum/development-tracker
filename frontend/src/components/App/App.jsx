import { createContext, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Authorization } from '../../pages/Authorization/Authorization';
import { Diary } from '../../pages/Diary/Diary';
import { LearningTrack } from '../../pages/LearningTrack/LearningTrack';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginUser, logout } from '../../store/userSlice';
import { Desk } from '../../pages/Desk/Desk';
import { Profile } from '../../pages/Profile/Profile';
import { Recommendations } from '../../pages/Reccommendations/Recommendations';

export const activePeaceContext = createContext(undefined);

function App() {
  const user = useSelector(state => state.user);
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
      //   navigate(location.pathname, { replace: true });
    } else {
      dispatch(logout());
    }
  }

  useEffect(() => checkLogin(), []);
  function handlePeace(color) {
    setActivePeace(previous => (previous === color ? '' : color));
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
              !user.isLogged ? (
                <Authorization submitText="Регистрация" path="/signup" />
              ) : (
                <Navigate to="/diary/desk" />
              )
            }
          />
          <Route
            path="/signin"
            element={<Authorization path="/signin" submitText="Войти" />}
          />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/desk" element={<Desk />} />
          <Route path="/track" element={<LearningTrack />} />
          <Route path="/track/profile" element={<Profile />} />
          <Route path="/track/recommendations" element={<Recommendations />} />
          <Route path="/*" element={<Navigate to="/diary/desk" replace />} />
        </Routes>
      </div>
    </activePeaceContext.Provider>
  );
}

export { App };
