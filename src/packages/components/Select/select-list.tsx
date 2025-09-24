"use client";

import React from "react";
import { cn } from "@/packages/utilities";
import { SelectOption } from "./type";
import SelectItem from "./select-item";

export interface SelectListProps<T = any> {
  /**
   * 选项列表
   */
  options: SelectOption<T>[];
  /**
   * 当前选中的值（单选模式）
   */
  value?: T;
  /**
   * 当前选中的值数组（多选模式）
   */
  values?: T[];
  /**
   * 是否为多选模式
   */
  multiple?: boolean;
  /**
   * 是否显示选中标记
   */
  showCheck?: boolean;
  /**
   * 选项点击事件
   */
  onOptionClick: (option: SelectOption<T>) => void;
  /**
   * 最大高度
   */
  maxHeight?: number;
  /**
   * 空数据时显示的内容
   */
  notFoundContent?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 容器类名
   */
  wrapperClassName?: string;
}

const SelectList = <T,>({
  options,
  value,
  values,
  multiple = false,
  showCheck = true,
  onOptionClick,
  maxHeight = 256,
  notFoundContent = "无数据",
  className,
  wrapperClassName,
}: SelectListProps<T>) => {
  // 检查选项是否被选中
  const isOptionSelected = (option: SelectOption<T>) => {
    if (multiple) {
      return values ? values.includes(option.value) : false;
    } else {
      return value === option.value;
    }
  };

  return (
    <div
      className={cn(
        "select-dropdown border-select-border bg-select-bg absolute left-0 right-0 top-full z-50 mt-1 border shadow-lg min-w-fit",
        wrapperClassName
      )}
      style={{ maxHeight }}
      role="listbox"
      aria-multiselectable={multiple}
    >
      <div
        className={cn("overflow-auto py-2", className)}
        style={{ maxHeight: maxHeight - 2 }}
      >
        {options.length === 0 ? (
          <div className="px-3 py-2 mx-2 text-center text-select-placeholder text-xs">
            {notFoundContent}
          </div>
        ) : (
          options.map((option, index) => (
            <SelectItem
              key={String(option.value) + index}
              option={option}
              selected={isOptionSelected(option)}
              showCheck={showCheck}
              onClick={onOptionClick}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

SelectList.displayName = "SelectList";

export default SelectList;
