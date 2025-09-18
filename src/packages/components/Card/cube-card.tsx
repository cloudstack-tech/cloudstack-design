"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/packages/utils";

export type CubeCardProps = {
  /**
   * 子元素
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   * 如果 title 存在，则 className 会应用到 root 上
   * 如果 title 不存在，则 className 会应用到 content 上
   */
  className?: string;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 是否可折叠
   */
  collapsible?: boolean;
  /**
   * 默认折叠状态
   */
  defaultCollapsed?: boolean;
  /**
   * 折叠状态变化回调
   */
  onCollapseChange?: (collapsed: boolean) => void;
  /**
   * 自定义类名
   */
  classNames?: {
    root?: string;
    header?: string;
    title?: string;
    content?: string;
  };
  /**
   * 是否启用悬停效果
   */
  hoverable?: boolean;
};

export default function CubeCard({
  children,
  className,
  title,
  collapsible = false,
  defaultCollapsed = false,
  onCollapseChange,
  classNames,
  hoverable = true,
}: CubeCardProps) {
  // 内部折叠状态
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const shouldShowHeader = !!title || collapsible;

  // 处理折叠状态变化
  const handleCollapse = () => {
    if (!collapsible) return;
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  };

  return (
    <div
      className={cn(
        "card",
        "border-card-border bg-card-bg border transition-all duration-150",
        hoverable && "hover:shadow-card-shadow",
        classNames?.root,
        title && className
      )}
    >
      {/* 标题栏 */}
      {shouldShowHeader && (
        <div
          className={cn(
            "card-header",
            "flex w-full items-center justify-between p-4",
            classNames?.header,
            collapsible && "cursor-pointer select-none"
          )}
          onClick={handleCollapse}
        >
          <div
            className={cn(
              "card-title",
              "text-title-primary flex-1 text-sm font-medium",
              classNames?.title
            )}
          >
            {title}
          </div>
          {collapsible && (
            <ChevronDown
              size={16}
              className={cn(
                "card-collapse-icon",
                "text-title-secondary transition-transform duration-200",
                isCollapsed ? "rotate-0" : "rotate-180"
              )}
            />
          )}
        </div>
      )}

      {/* 内容区域 */}
      <div
        className={cn(
          "card-content",
          "h-fit overflow-hidden transition-all duration-150 ease-in-out",
          isCollapsed ? "max-h-0" : "max-h-[1000px]",
          {
            "px-4": title,
            "pb-4": title && !isCollapsed,
            "p-4": !title && !collapsible,
          },
          classNames?.content,
          !title && className
        )}
      >
        {children}
      </div>
    </div>
  );
}
