import {forwardRef} from "@cloudstack-design/system";

import { UseSkeletonProps, useSkeleton } from "./use-skeleton";

export interface SkeletonProps extends UseSkeletonProps {}

const Skeleton = forwardRef<"div", SkeletonProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useSkeleton({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Skeleton.displayName = "CloudStackDesign.Skeleton";

export default Skeleton;