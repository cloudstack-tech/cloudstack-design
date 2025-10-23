import {forwardRef} from "@cloudstack-design/system";

import { UseBadgeProps, useBadge } from "./use-badge";

export interface BadgeProps extends UseBadgeProps {}

const Badge = forwardRef<"div", BadgeProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useBadge({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Badge.displayName = "CloudStackDesign.Badge";

export default Badge;