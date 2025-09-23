"use client";

import React from "react";
import Stack from "./stack";
import { HStackProps } from "./type";

const HStack = React.forwardRef<HTMLDivElement, HStackProps>((props, ref) => {
  return <Stack ref={ref} direction="horizontal" {...props} />;
});

if (process.env.NODE_ENV !== "production") {
  HStack.displayName = "HStack";
}

export default HStack;
