import React, { useState } from 'react';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

function DropDownMenuDifficult({ onClick, currentItem, onMenu, isOpen }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handleMenu(e) {
    onMenu(e);
  }
  function handleItem(e) {
    onClick(e);
  }
  return (
    <DropDownMenu
      type="difficult"
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isOpen}
    >
      <DropMenuItem type="difficult" text="Легкий" onClick={handleItem} />
      <DropMenuItem type="difficult" text="Средний" onClick={handleItem} />
      <DropMenuItem type="difficult" text="Сложный" onClick={handleItem} />
    </DropDownMenu>
  );
}
export { DropDownMenuDifficult };
