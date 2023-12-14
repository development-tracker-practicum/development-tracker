import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from '../../services/PotectedRouter';
import { Authorization } from '../../pages/Authorization/Authorization';
import { Diary } from '../../pages/Diary/Diary';
import { Metrika } from '../../pages/Metrika/Metrika';
import { LearningTrack } from '../../pages/LearningTrack/LearningTrack';
import './App.css';
import { useDispatch } from 'react-redux';
import { loginUser, logout, setUser } from '../../store/userSlice';

export const activePeaceContext = createContext(undefined);

function App() {
  const user = useSelector(state => state.user);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activePeace, setActivePeace] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function checkLogin() {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged) {
      dispatch(loginUser());
      navigate('/track/profile', { replace: true });
    } else {
      dispatch(logout());
      navigate('/signin');
    }
  }

  useEffect(() => checkLogin(), []);
  function handlePeace(color) {
    setActivePeace(previous => (previous === color ? '' : color));
  }
  useEffect(() => checkLogin(), []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/signup"
          element={<Authorization submitText="Регистрация" path="/signup" />}
        />
        <Route
          path="/signin"
          element={<Authorization path="/signin" submitText="Войти" />}
        />
        <Route path="/diary" element={<Navigate to="/diary/desk" />} />
        <Route path="/diary/desk" element={<Desk />} />
        <Route path="/track" element={<Navigate to="/track/profile" />} />
        <Route path="/track/profile" element={<Profile />} />
        <Route path="/track/recommendations/courses" element={<Courses />} />
        <Route path="/track/recommendations/articles" element={<Articles />} />
        <Route path="/track/recommendations/practice" element={<Practice />} />
        <Route path="/*" element={<Navigate to="/diary/desk" replace />} />
      </Routes>
    </div>
  );
}

export { App };
