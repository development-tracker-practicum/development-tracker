import React, { useState } from 'react';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

function DropDownMenuDifficult({
  onClick,
  currentItem,
  onMenu,
  isOpen,
  place,
}) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handleMenu(e) {
    onMenu(e);
  }
  function handleItem(e) {
    onClick(e);
  }
  return (
    <DropDownMenu
      place={place}
      type="difficult"
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isOpen}
    >
      <DropMenuItem
        place={place}
        type="difficult"
        text="Легкий"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="difficult"
        text="Средний"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="difficult"
        text="Сложный"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}
export { DropDownMenuDifficult };
