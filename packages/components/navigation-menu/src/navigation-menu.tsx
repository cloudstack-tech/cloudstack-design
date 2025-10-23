import {forwardRef} from "@cloudstack-design/system";

import { UseNavigationMenuProps, useNavigationMenu } from "./use-navigation-menu";

export interface NavigationMenuProps extends UseNavigationMenuProps {}

const NavigationMenu = forwardRef<"div", NavigationMenuProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useNavigationMenu({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

NavigationMenu.displayName = "CloudStackDesign.NavigationMenu";

export default NavigationMenu;