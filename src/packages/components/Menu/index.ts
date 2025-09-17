import { default as Menu } from "./menu";
import { default as MenuItem } from "./ment-item";
import MenuDivider from "./menu-divider";

const MenuComponent = Menu as typeof Menu & {
  Item: typeof MenuItem;
  Divider: typeof MenuDivider;
};

MenuComponent.Item = MenuItem;
MenuComponent.Divider = MenuDivider;

export default MenuComponent;
export { MenuComponent as Menu };
