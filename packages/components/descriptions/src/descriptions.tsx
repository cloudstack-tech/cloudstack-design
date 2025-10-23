import {forwardRef} from "@cloudstack-design/system";

import { UseDescriptionsProps, useDescriptions } from "./use-descriptions";

export interface DescriptionsProps extends UseDescriptionsProps {}

const Descriptions = forwardRef<"div", DescriptionsProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useDescriptions({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Descriptions.displayName = "CloudStackDesign.Descriptions";

export default Descriptions;