import {forwardRef} from "@cloudstack-design/system";

import {UseSpaceProps, useSpace} from "./use-space";

export interface SpaceProps extends UseSpaceProps {}

const Space = forwardRef<"div", SpaceProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useSpace({...props, ref});

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

Space.displayName = "CloudStackDesign.Space";

export default Space;
