import {forwardRef} from "@cloudstack-design/system";

import { UseAffixProps, useAffix } from "./use-affix";

export interface AffixProps extends UseAffixProps {}

const Affix = forwardRef<"div", AffixProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useAffix({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Affix.displayName = "CloudStackDesign.Affix";

export default Affix;