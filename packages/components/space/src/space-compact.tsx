import {forwardRef} from "@cloudstack-design/system";

import {UseSpaceCompactProps, useSpaceCompact} from "./use-space-compact";

export interface SpaceCompactProps extends UseSpaceCompactProps {}

const SpaceCompact = forwardRef<"div", SpaceCompactProps>((props, ref) => {
  const {Component, domRef, children, className, style, ...otherProps} = useSpaceCompact({
    ...props,
    ref,
  });

  return (
    <Component ref={domRef} className={className} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

SpaceCompact.displayName = "CloudStackDesign.SpaceCompact";

export default SpaceCompact;
