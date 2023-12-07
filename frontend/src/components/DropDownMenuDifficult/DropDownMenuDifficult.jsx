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
  const [isActiveMenu, setIsActiveMenu] = useState(false);

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
        text="Легкий"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="level"
        text="Средний"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="level"
        text="Сложный"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}

export { DropDownMenuDifficult };
