"use client";

import { cn } from "@/packages/utilities";
import { Button } from "../Button";
import { ButtonProps } from "../Button/type";

export type TabProps = {
  /**
   * 标签内容
   */
  children: React.ReactNode;
  /**
   * 标签唯一标识
   */
  key: any;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 点击事件
   */
  onClick?: () => void;
  className?: string;
  /**
   * 激活时样式
   */
  activeClassName?: string;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 动画类型
   */
  animation?: "slide" | "flash" | "none";
} & Pick<ButtonProps, "as" | "href" | "color">;

function Tab({
  active,
  children,
  as,
  href,
  onClick,
  className,
  icon,
  animation = "slide",
  activeClassName,
  ...props
}: TabProps) {
  const tabClassName = cn(
    "bg-transparent text-default",
    // 当使用滑块动画时，不需要边框
    animation === "slide" ? "" : "border-b-2 border-b-transparent",
    // 当使用闪烁动画时，添加闪烁相关样式
    animation === "flash" && [
      "relative overflow-visible",
      "after:content-[''] after:bg-primary after:absolute after:bottom-[-2px] after:left-1/2 after:h-0.5 after:w-0",
      "after:transition-[width,left] after:duration-300 after:ease-in-out",
      active && "after:left-0 after:w-full",
    ],
    // 当使用默认动画时，使用原来的边框样式
    animation === "none" && active && "border-b-primary-color",
    active && cn("text-primary-color", activeClassName),
    className
  );

  return (
    <Button
      data-active={active}
      variant="flat"
      color="default"
      className={tabClassName}
      as={as}
      href={href}
      onClick={onClick}
      icon={icon}
      {...props}
    >
      {children}
    </Button>
  );
}

Tab.displayName = "Tab";

export default Tab;
