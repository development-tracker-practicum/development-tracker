import { useDispatch, useSelector } from 'react-redux';
import { openTargetMenu, changeValue } from '../../store/changeTargetSlice';
import { DropDownMenuProfession } from '../DropDownMenuProfession/DropDownMenuProfession';
import { DropDownMenuDifficult } from '../DropDownMenuDifficult/DropDownMenuDifficult';
import { Button } from '../Button/Button';
import './NotificationForm.sass';

function NotificationForm({ onCancel, onSubmit }) {
  const { values, openedMenus } = useSelector((state) => state.changeTarget);
  const dispatch = useDispatch();

  function handleSubmit() {
    onSubmit(values);
  }

  function handleClick() {
    // console.log(values);
  }

  function handleMenu(event) {
    const id = event.currentTarget.id;
    dispatch(openTargetMenu(id));
  }

  function handleReset() {
    dispatch(resetFilters());
  }

  function handleChangeValue(event) {
    const { id, type } = event.currentTarget;
    dispatch(changeValue({ id, type }));
  }

  return (
    <form className="notification-form" action="#">
      <h3 className="">Выбор профессиональной цели</h3>
      <div className="notification-form__input-zone">
        <div className="notification-form__label">
          Выбор профессии
          <DropDownMenuProfession
            place="notification"
            onMenu={handleMenu}
            onClick={handleChangeValue}
            isOpen={openedMenus.profession}
            currentItem={values.profession}
          />
        </div>
        <div className="notification-form__label">
          Выбор грейда/квалификацию
          <DropDownMenuDifficult
            place="notification"
            onMenu={handleMenu}
            onClick={handleChangeValue}
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
