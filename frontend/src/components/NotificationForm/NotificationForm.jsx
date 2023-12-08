import { useDispatch, useSelector } from 'react-redux';
import { openTargetMenu, changeValue } from '../../store/changeTargetSlice';
import { DropDownMenuProfession } from '../DropDownMenuProfession/DropDownMenuProfession';
import { DropDownMenuDifficult } from '../DropDownMenuDifficult/DropDownMenuDifficult';
import { Button } from '../Button/Button';
import './NotificationForm.sass';
import { setUser } from '../../store/userSlice';
import useFilter from '../../hooks/useFilter';

function NotificationForm({ onCancel, onSubmit }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { values, openedMenus, changeValue, openTargetMenu } = useFilter({
    profession: user.currentProfession,
    level: user.currentLevel,
  });
  function handleSubmit() {
    onSubmit(values);
  }
  return (
    <form className="notification-form" action="#">
      <h3 className="">Выбор профессиональной цели</h3>
      <div className="notification-form__input-zone">
        <div className="notification-form__label">
          Выбор профессии
          <DropDownMenuProfession
            place="notification"
            onMenu={openTargetMenu}
            onClick={changeValue}
            isOpen={openedMenus.profession}
            currentItem={user.currentProfession}
          />
        </div>
        <div className="notification-form__label">
          Выбор грейда/квалификацию
          <DropDownMenuDifficult
            place="notification"
            onMenu={openTargetMenu}
            onClick={changeValue}
            isOpen={openedMenus.level}
            currentItem={values.level}
          />
        </div>
      </div>
      <div className="notification-form__button-zone">
        <Button place="notification" textButton="Отмена" onClick={onCancel} />
        <Button
          place="content"
          textButton="Выбрать цель"
          modification="notification"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export { NotificationForm };
