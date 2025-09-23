"use client";

import React from "react";
import Stack from "./stack";
import { VStackProps } from "./type";

const VStack = React.forwardRef<HTMLDivElement, VStackProps>((props, ref) => {
  return <Stack ref={ref} direction="vertical" {...props} />;
});

if (process.env.NODE_ENV !== "production") {
  VStack.displayName = "VStack";
}

export default VStack;
