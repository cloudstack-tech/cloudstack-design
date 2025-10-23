import {forwardRef} from "@cloudstack-design/system";

import {UseBadgeProps, useBadge} from "./use-badge";

export interface BadgeProps extends UseBadgeProps {}

/**
 * Badge component for displaying a badge/tag
 *
 * @example
 * ```tsx
 * <Badge color="primary">New</Badge>
 * <Badge variant="outline" color="success">Success</Badge>
 * <Badge variant="flat" color="warning">Warning</Badge>
 * <Badge variant="dot" color="danger" />
 * ```
 */
const Badge = forwardRef<"span", BadgeProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} = useBadge({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Badge.displayName = "CloudStackDesign.Badge";

export default Badge;
