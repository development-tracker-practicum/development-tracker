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
import Courses from '../../pages/Courses/Courses';
import Practice from '../../pages/Practice/Practice';
import Articles from '../../pages/Articles/Articles';
import trackerApi from '../../services/TrackerApi';
import userApi from '../../services/UserApi';

export const activePeaceContext = createContext(undefined);

function App() {
  const user = useSelector(state => state.user);
  const diagramm = useSelector(state => state.diagramm);
  const [activePeace, setActivePeace] = useState('');
  function resetPeaces() {
    setActivePeace('');
  }
  //   useEffect(() => {
  //     userApi.getUser({
  //       uid: '5',
  //       token: 'a9a86d57c2b52082c5ad828505962043a7a1d895',
  //     });
  //   }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
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
  useEffect(() => {
    console.log(diagramm);
  }, [diagramm]);
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
          <Route path="/track/recommendations/courses" element={<Courses />} />
          <Route
            path="/track/recommendations/articles"
            element={<Articles />}
          />
          <Route
            path="/track/recommendations/practice"
            element={<Practice />}
          />
          <Route path="/*" element={<Navigate to="/diary/desk" replace />} />
        </Routes>
      </div>
    </activePeaceContext.Provider>
  );
}

export { App };
