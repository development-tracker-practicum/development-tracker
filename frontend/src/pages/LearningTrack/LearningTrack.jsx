import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { Profile } from '../Profile/Profile';
import { Recommendations } from '../Reccommendations/Recommendations';
import { PopupNotification } from '../../components/PopupNotification/PopupNotification';

function LearningTrack() {
  const location = useLocation();
  const isItProfileRoute = location.pathname === '/track/profile';
  const isItRecommendations = location.pathname === '/track/recommendations';
  const [isPopupNotificationShows, setIsPopupNotificationShows] =
    useState(true);

  function onPopupCloseClick() {
    setIsPopupNotificationShows(false);
  }

  return (
    <>
      <Header />
      <SidePanel />
      {isItProfileRoute && <Profile level="middle" />}
      {isItRecommendations && <Recommendations />}
      {isPopupNotificationShows && (
        <PopupNotification onPopupCloseClick={onPopupCloseClick} />
      )}
    </>
  );
}

export { LearningTrack };
