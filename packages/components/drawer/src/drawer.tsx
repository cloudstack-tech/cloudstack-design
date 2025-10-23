import {forwardRef} from "@cloudstack-design/system";

import { UseDrawerProps, useDrawer } from "./use-drawer";

export interface DrawerProps extends UseDrawerProps {}

const Drawer = forwardRef<"div", DrawerProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useDrawer({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Drawer.displayName = "CloudStackDesign.Drawer";

export default Drawer;