"use client";

import React from "react";
import { cn } from "@/packages/utilities";
import { Check } from "lucide-react";
import { SelectOption } from "./type";

export interface SelectItemProps<T = any> {
  /**
   * 选项数据
   */
  option: SelectOption<T>;
  /**
   * 是否被选中
   */
  selected: boolean;
  /**
   * 是否显示选中标记
   */
  showCheck?: boolean;
  /**
   * 点击事件处理
   */
  onClick: (option: SelectOption<T>) => void;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 选项索引
   */
  index?: number;
}

const SelectItem = <T,>({
  option,
  selected,
  showCheck = true,
  onClick,
  className,
  index = 0,
}: SelectItemProps<T>) => {
  const handleClick = () => {
    if (option.disabled) return;
    onClick(option);
  };

  return (
    <div
      className={cn(
        "select-none relative flex items-center justify-between gap-1 cursor-pointer text-xs px-3 py-2 mx-1 transition-colors duration-150 whitespace-nowrap",
        "bg-select-item-bg hover:bg-select-item-bg-hover",
        "text-select-item-text hover:text-select-item-text-hover",
        {
          "cursor-not-allowed opacity-50": option.disabled,
          "bg-select-item-bg-active text-select-item-text-active": selected,
        },
        className
      )}
      onClick={handleClick}
      role="option"
      aria-selected={selected}
      aria-disabled={option.disabled}
      data-index={index}
    >
      {showCheck && selected && <Check className="absolute left-2" size={12} />}
      <span
        className={cn(
          "flex-1",
          showCheck && "pl-4",
          selected ? "text-select-item-text-active font-semibold" : ""
        )}
      >
        {option.label}
      </span>
    </div>
  );
};

SelectItem.displayName = "SelectItem";

export default SelectItem;
