import {forwardRef} from "@cloudstack-design/system";

import { UseAnchorProps, useAnchor } from "./use-anchor";

export interface AnchorProps extends UseAnchorProps {}

const Anchor = forwardRef<"div", AnchorProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useAnchor({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Anchor.displayName = "CloudStackDesign.Anchor";

export default Anchor;