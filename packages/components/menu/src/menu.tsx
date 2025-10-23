import {forwardRef} from "@cloudstack-design/system";

import { UseMenuProps, useMenu } from "./use-menu";

export interface MenuProps extends UseMenuProps {}

const Menu = forwardRef<"div", MenuProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useMenu({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Menu.displayName = "CloudStackDesign.Menu";

export default Menu;