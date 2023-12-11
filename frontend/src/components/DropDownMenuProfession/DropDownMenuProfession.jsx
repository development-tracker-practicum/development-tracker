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
        text="UI/UX дизайнер"
        onClick={handleItem}
      />
    </DropDownMenu>
  );
}

export { DropDownMenuProfession };
