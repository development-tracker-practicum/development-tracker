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
<<<<<<< HEAD
        text="Junior"
=======
        text="Легкий"
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="level"
<<<<<<< HEAD
        text="Middle"
=======
        text="Средний"
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="level"
<<<<<<< HEAD
        text="Senior"
=======
        text="Сложный"
>>>>>>> 40e0f267ee6070dd0ceaab74fd0ed72a7373b13f
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}

export { DropDownMenuDifficult };
