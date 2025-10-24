import {forwardRef} from "@cloudstack-design/system";

import GridItem from "./grid-item";
import {UseGridProps, useGrid} from "./use-grid";

export interface GridProps extends UseGridProps {}

const Grid = forwardRef<"div", GridProps>((props, ref) => {
  const {Component, domRef, children, styles, style, ...otherProps} = useGrid({...props, ref});

  return (
    <Component ref={domRef} className={styles} style={style} {...otherProps}>
      {children}
    </Component>
  );
});

Grid.displayName = "CloudStackDesign.Grid";

export type {GridItemProps} from "./grid-item";

// Attach GridItem as a subcomponent
export default Object.assign(Grid, {
  Item: GridItem,
});
