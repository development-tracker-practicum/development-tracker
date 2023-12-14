import { createContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Authorization } from '../../pages/Authorization/Authorization';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout } from '../../store/userSlice';
import { Desk } from '../../pages/Desk/Desk';
import { Profile } from '../../pages/Profile/Profile';

import Courses from '../../pages/Courses/Courses';
import Practice from '../../pages/Practice/Practice';
import Articles from '../../pages/Articles/Articles';
import { fetchSkills } from '../../store/trackerSlice';
import useStatistics from '../../hooks/useStatistics';

export const activePeaceContext = createContext(undefined);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const tracker = useSelector(state => state.tracker);
  function checkLogin() {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      dispatch(loginUser());
    } else {
      dispatch(logout());
    }
  }

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);
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
