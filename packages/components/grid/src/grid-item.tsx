import {forwardRef} from "@cloudstack-design/system";

import {UseGridItemProps, useGridItem} from "./use-grid-item";

export interface GridItemProps extends UseGridItemProps {}

const GridItem = forwardRef<"div", GridItemProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useGridItem({
    ...props,
    ref,
  });

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

GridItem.displayName = "CloudStackDesign.GridItem";

export default GridItem;
