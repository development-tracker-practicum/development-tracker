import { DropMenuItem } from '../DropMenuItem/DropMenuItem';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

function DropDownMenuProfession({
  onClick,
  currentItem,
  onMenu,
  isOpen,
  place = null,
}) {
  function handleMenu(event) {
    // console.log(event.target);
    onMenu(event);
  }

  function handleItem(event) {
    onClick(event);
  }

  return (
    <DropDownMenu
      place={place}
      type="profession"
      activeItem={currentItem}
      onClick={handleMenu}
      isActiveMenu={isOpen}
    >
      <DropMenuItem
        place={place}
        type="profession"
        text="UI/UX Дизайнер"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="profession"
        text="Frontend"
        onClick={handleItem}
      />
      <DropMenuItem
        place={place}
        type="profession"
        text="Backend"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}

export { DropDownMenuProfession };
