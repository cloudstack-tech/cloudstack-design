"use client";

import React, { useState, useRef, useEffect } from "react";
import { TabProps } from "./tab";
import { cn } from "@/packages/utils";

export type TabsProps = {
  /**
   * 子元素
   */
  children: React.ReactNode;
  /**
   * 默认激活的标签
   */
  defaultActiveKey?: any;
  /**
   * 动画类型
   */
  animation?: "slide" | "flash" | "none";
  /**
   * 当前激活的标签
   */
  value?: any;
  /**
   * 标签切换事件
   */
  onChange?: (value: any) => void;
  /**
   * 自定义样式
   */
  className?: string;
};

// 修改类型检查逻辑
const isTabElement = (
  element: any
): element is React.ReactElement<TabProps> => {
  if (!React.isValidElement(element)) {
    return false;
  }

  const props = element.props as Partial<TabProps>;
  return props !== null && typeof props === "object" && "children" in props;
};

// 递归处理子元素，支持 Fragment
const flattenChildren = (
  children: React.ReactNode
): React.ReactElement<TabProps>[] => {
  const result: React.ReactElement<TabProps>[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      // 如果是 Fragment，递归处理其子元素
      if (child.type === React.Fragment) {
        result.push(...flattenChildren((child.props as any).children));
      }
      // 如果是 Tab 元素，直接添加
      else if (isTabElement(child)) {
        result.push(child);
      }
    }
  });

  return result;
};

export default function Tabs({
  children,
  defaultActiveKey,
  animation = "slide",
  value,
  onChange,
  className,
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<any>(defaultActiveKey);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);

  const controlledValue = value !== undefined ? value : activeTab;

  const updateSliderPosition = () => {
    if (animation !== "slide" || !tabsRef.current) return;

    const activeElement = tabsRef.current.querySelector('[data-active="true"]');
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [controlledValue, animation]);

  // 监听窗口大小变化，更新滑块位置
  useEffect(() => {
    window.addEventListener("resize", updateSliderPosition);
    return () => window.removeEventListener("resize", updateSliderPosition);
  }, []);

  const handleClick = (key: any) => {
    setActiveTab(key);
    onChange?.(key);
  };

  const tabItems = flattenChildren(children).map((child) => {
    const isActive = String(child.key) === String(controlledValue);
    return React.cloneElement(child, {
      active: isActive,
      onClick: () => {
        handleClick(child.key);
      },
      animation,
    });
  });

  return (
    <div
      ref={tabsRef}
      className={cn("relative flex items-center gap-2", className)}
      data-active={value === activeTab}
    >
      {tabItems}
      {animation === "slide" && (
        <div
          className="bg-primary-color absolute bottom-0 h-0.5 transition-all duration-300"
          style={{
            left: `${sliderStyle.left}px`,
            width: `${sliderStyle.width}px`,
          }}
        />
      )}
    </div>
  );
}
