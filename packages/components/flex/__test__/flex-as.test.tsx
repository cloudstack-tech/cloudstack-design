import React from "react";
import {Flex} from "../src";

// 测试 as prop 的类型
function TestAsProps() {
  return (
    <>
      {/* 作为 div - 默认 */}
      <Flex>Default div</Flex>

      {/* 作为 section - 应该接受 section 的 props */}
      <Flex as="section">Section</Flex>

      {/* 作为 button - 应该接受 button 的 props */}
      <Flex as="button" onClick={() => console.log("clicked")}>
        Button
      </Flex>

      {/* 作为 a - 应该接受 anchor 的 props */}
      <Flex as="a" href="https://example.com" target="_blank">
        Link
      </Flex>

      {/* 作为自定义组件 */}
      <Flex as={CustomComponent} customProp="test">
        Custom
      </Flex>
    </>
  );
}

interface CustomComponentProps {
  customProp?: string;
  children?: React.ReactNode;
}

const CustomComponent = React.forwardRef<HTMLDivElement, CustomComponentProps>(
  ({customProp, children, ...props}, ref) => {
    return (
      <div ref={ref} data-custom={customProp} {...props}>
        {children}
      </div>
    );
  },
);

CustomComponent.displayName = "CustomComponent";

export default TestAsProps;
