import {forwardRef} from "@cloudstack-design/system";

import { UseTooltipProps, useTooltip } from "./use-tooltip";

export interface TooltipProps extends UseTooltipProps {}

const Tooltip = forwardRef<"div", TooltipProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useTooltip({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Tooltip.displayName = "CloudStackDesign.Tooltip";

export default Tooltip;