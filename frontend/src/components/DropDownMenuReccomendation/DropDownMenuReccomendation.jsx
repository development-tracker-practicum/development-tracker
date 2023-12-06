import { useState } from 'react';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';

function DropDownMenuReccomendation({ onClick, currentItem }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handleMenu() {
    setIsActiveMenu(prev => !prev);
  }
  function handleItem(id) {
    onClick(id);
    setIsActiveMenu(false);
  }
  return (
    <DropDownMenu
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isActiveMenu}
    >
      <DropMenuItem percent="20%" text="UX-исследования" onClick={handleItem} />
      <DropMenuItem percent="60%" text="UI-дизайн" onClick={handleItem} />
      <DropMenuItem percent="20%" text="Инструменты" onClick={handleItem} />
      <DropMenuItem percent="20%" text="Коммуникация " onClick={handleItem} />
      <DropMenuItem percent="20%" text="Про-активность" onClick={handleItem} />
      <DropMenuItem
        percent="20%"
        text="  Пипл менеджмент"
        onClick={handleItem}
      />
      <DropMenuItem percent="50%" text=" Автономность" onClick={handleItem} />
    </DropDownMenu>
  );
}
export { DropDownMenuReccomendation };
