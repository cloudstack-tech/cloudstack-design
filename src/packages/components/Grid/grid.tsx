import React from "react";
import { GridProps } from "./type";
import { cn } from "@/packages/utils";

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return <div className={cn("grid", className)} ref={ref} {...rest} />;
  }
);

Grid.displayName = "Grid";

export default Grid;
