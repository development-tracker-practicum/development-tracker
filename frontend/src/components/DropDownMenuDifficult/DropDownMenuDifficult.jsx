import { useState } from 'react';
import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

function DropDownMenuDifficult({
  onClick,
  currentItem,
  onMenu,
  isOpen,
  place,
}) {
  function handleMenu(event) {
    onMenu(event);
  }

  function handleItem(event) {
    onClick(event);
  }

  return (
    <DropDownMenu
      place={place}
      type="level"
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isOpen}
    >
      <DropMenuItem
        place={place}
        type="level"
        text="Junior"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="level"
        text="Middle"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="level"
        text="Senior"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}

export { DropDownMenuDifficult };
