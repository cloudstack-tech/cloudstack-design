"use client";

import React from "react";
import { StepsProps, StepStatus } from "./type";
import { StepItem } from "./step-item";
import { cn } from "@/packages/utilities";

export const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  (props, ref) => {
    const {
      current = 0,
      direction = "horizontal",
      size = "default",
      clickable = false,
      onChange,
      className,
      children,
      items,
      ...rest
    } = props;

    // 确定步骤状态
    const getStepStatus = (index: number): StepStatus => {
      if (index < current) {
        return "finish";
      } else if (index === current) {
        return "process";
      } else {
        return "wait";
      }
    };

    // 处理步骤点击
    const handleStepClick = (stepIndex: number) => {
      if (clickable && onChange) {
        onChange(stepIndex);
      }
    };

    // 如果使用 items 属性渲染
    const renderFromItems = () => {
      if (!items) return null;

      return items.map((item, index) => {
        const status = getStepStatus(index);
        const isLast = index === items.length - 1;

        return (
          <StepItem
            key={index}
            status={status}
            title={item.title}
            description={item.description}
            icon={item.icon}
            disabled={item.disabled}
            isLast={isLast}
            stepNumber={index}
            direction={direction}
            size={size}
            onClick={clickable ? handleStepClick : undefined}
          />
        );
      });
    };

    // 如果使用 children 渲染
    const renderFromChildren = () => {
      if (!children) return null;

      const childArray = React.Children.toArray(children);

      return childArray.map((child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        const status = getStepStatus(index);
        const isLast = index === childArray.length - 1;

        // 克隆子元素并添加必要属性
        const childProps = child.props as any;
        return React.cloneElement(child, {
          ...childProps,
          key: child.key || index,
          status: childProps.status || status,
          isLast,
          stepNumber: index,
          direction,
          size,
          onClick: clickable ? handleStepClick : childProps.onClick,
        });
      });
    };

    const stepsContent = items ? renderFromItems() : renderFromChildren();

    return (
      <div
        ref={ref}
        className={cn(
          "steps flex items-start",
          {
            "flex-col": direction === "vertical",
            "flex-row": direction === "horizontal",
            // 响应式：小屏幕下水平步骤条变为垂直
            "max-sm:flex-col": direction === "horizontal",
          },
          className
        )}
        {...rest}
      >
        {stepsContent}
      </div>
    );
  }
);

Steps.displayName = "Steps";

// 创建复合组件
const StepsWithItem = Steps as typeof Steps & {
  Item: typeof StepItem;
};

StepsWithItem.Item = StepItem;

export { StepsWithItem as StepsComponent, StepItem };
export default StepsWithItem;
