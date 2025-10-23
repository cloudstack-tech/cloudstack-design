import {forwardRef} from "@cloudstack-design/system";

import { UsePopoverProps, usePopover } from "./use-popover";

export interface PopoverProps extends UsePopoverProps {}

const Popover = forwardRef<"div", PopoverProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  usePopover({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Popover.displayName = "CloudStackDesign.Popover";

export default Popover;