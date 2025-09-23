"use client";

import React from "react";
import { cn } from "@/packages/utils";
import { alignItemsMap, FlexProps, justifyContentMap } from "./type";

const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    className,
    style,
    children,
    vertical = false,
    justify = "flex-start",
    align = "flex-start",
    flex,
    gap = 0,
    wrap = false,
    as: Component = "div",
    ...rest
  } = props;

  // 构建完整的 flex 类名
  const flexClassName = cn(
    "flex",
    {
      "flex-col": vertical,
      "flex-row": !vertical,
      "flex-wrap": wrap,
    },
    justifyContentMap[justify] || "",
    alignItemsMap[align] || "",
    className
  );

  // 只保留无法用 Tailwind 表示的样式
  const flexStyle: React.CSSProperties = {
    ...(flex && { flex }),
    gap: gap * 4,
    ...style,
  };

  return (
    <Component
      ref={ref}
      style={Object.keys(flexStyle).length > 0 ? flexStyle : undefined}
      className={flexClassName}
      {...rest}
    >
      {children}
    </Component>
  );
});

if (process.env.NODE_ENV !== "production") {
  Flex.displayName = "Flex";
}

export default Flex;
