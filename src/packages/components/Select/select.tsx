"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@/packages/utils";
import { ChevronDown, X, Check } from "lucide-react";
import {
  SelectProps,
  SelectOption,
  SingleSelectProps,
  MultipleSelectProps,
} from "./type";
const Select = <T,>(props: SelectProps<T>) => {
  const {
    options = [],
    placeholder = "请选择",
    disabled = false,
    allowClear = false,
    maxHeight = 256,
    className,
    showSearch = false,
    filterOption,
    notFoundContent = "无数据",
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 判断是否为多选模式
  const isMultiple = props.mode === "multiple";

  // 处理单选和多选的值
  const [internalValue, setInternalValue] = useState(() => {
    if (isMultiple) {
      const multiProps = props as MultipleSelectProps<T>;
      return multiProps.defaultValue || [];
    } else {
      const singleProps = props as SingleSelectProps<T>;
      return singleProps.defaultValue;
    }
  });

  // 获取当前值
  const currentValue = useMemo(() => {
    if (isMultiple) {
      const multiProps = props as MultipleSelectProps<T>;
      return multiProps.value !== undefined ? multiProps.value : internalValue;
    } else {
      const singleProps = props as SingleSelectProps<T>;
      return singleProps.value !== undefined
        ? singleProps.value
        : internalValue;
    }
  }, [props, internalValue, isMultiple]);

  // 过滤选项
  const filteredOptions = useMemo(() => {
    if (!showSearch || !searchValue) return options;

    const defaultFilter = (input: string, option: SelectOption<T>) => {
      const label =
        typeof option.label === "string" ? option.label : String(option.label);
      return label.toLowerCase().includes(input.toLowerCase());
    };

    const filter = filterOption || defaultFilter;
    return options.filter((option) => filter(searchValue, option));
  }, [options, searchValue, showSearch, filterOption]);

  // 获取显示文本
  const getDisplayText = () => {
    if (isMultiple) {
      const values = currentValue as T[];
      if (!values || values.length === 0) return placeholder;

      const selectedOptions = options.filter((option) =>
        values.includes(option.value)
      );
      if (selectedOptions.length === 1) {
        return selectedOptions[0].label;
      }
      return `已选择 ${selectedOptions.length} 项`;
    } else {
      const value = currentValue as T;
      if (value === undefined || value === null) return placeholder;

      const selectedOption = options.find((option) => option.value === value);
      return selectedOption?.label || placeholder;
    }
  };

  // 处理选项点击
  const handleOptionClick = (option: SelectOption<T>) => {
    if (option.disabled) return;

    if (isMultiple) {
      const multiProps = props as MultipleSelectProps<T>;
      const values = (currentValue as T[]) || [];
      let newValues: T[];

      if (values.includes(option.value)) {
        newValues = values.filter((v) => v !== option.value);
      } else {
        newValues = [...values, option.value];
      }

      if (multiProps.value === undefined) {
        setInternalValue(newValues);
      }
      multiProps.onChange?.(newValues);
    } else {
      const singleProps = props as SingleSelectProps<T>;

      if (singleProps.value === undefined) {
        setInternalValue(option.value);
      }
      singleProps.onChange?.(option.value);
      setIsOpen(false);
      setSearchValue("");
    }
  };

  // 处理清除
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isMultiple) {
      const multiProps = props as MultipleSelectProps<T>;
      if (multiProps.value === undefined) {
        setInternalValue([]);
      }
      multiProps.onChange?.([]);
    } else {
      const singleProps = props as SingleSelectProps<T>;
      if (singleProps.value === undefined) {
        setInternalValue(undefined);
      }
      singleProps.onChange?.(undefined);
    }
  };

  // 处理输入框点击
  const handleInputClick = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (showSearch && !isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  // 检查是否有值
  const hasValue = () => {
    if (isMultiple) {
      const values = currentValue as T[];
      return values && values.length > 0;
    } else {
      const value = currentValue as T;
      return value !== undefined && value !== null;
    }
  };

  // 检查选项是否被选中
  const isOptionSelected = (option: SelectOption<T>) => {
    if (isMultiple) {
      const values = (currentValue as T[]) || [];
      return values.includes(option.value);
    } else {
      return currentValue === option.value;
    }
  };

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 渲染多选标签
  const renderMultipleTags = () => {
    if (!isMultiple) return null;

    const values = (currentValue as T[]) || [];
    const selectedOptions = options.filter((option) =>
      values.includes(option.value)
    );

    if (selectedOptions.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-1">
        {selectedOptions.map((option) => (
          <div
            key={String(option.value)}
            className="bg-primary/10 text-primary border-primary/20 flex items-center gap-1 rounded border px-2 py-0.5 text-xs"
          >
            <span>{option.label}</span>
            <X
              size={12}
              className="cursor-pointer hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(option);
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={selectRef} className={cn("relative w-full", className)}>
      {/* 选择框 */}
      <div
        className={cn(
          "border-select-border focus-within:border-select-border-focus flex min-h-8 w-full cursor-pointer items-center justify-between gap-2 border px-3 py-1 text-xs transition-all duration-150",
          "hover:border-select-border-focus hover:shadow-active",
          {
            "cursor-not-allowed opacity-50": disabled,
            "border-select-border-focus": isOpen && !disabled,
          }
        )}
        onClick={handleInputClick}
      >
        <div className="flex-1 overflow-hidden">
          {isMultiple && hasValue() ? (
            renderMultipleTags()
          ) : showSearch && isOpen ? (
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              className="w-full border-none bg-transparent outline-none"
              placeholder={placeholder}
              disabled={disabled}
            />
          ) : (
            <span
              className={cn(
                "block truncate duration-150 transition-all text-select-value",
                {
                  "text-select-placeholder": !hasValue(),
                  "text-select-value-focus": isOpen,
                }
              )}
            >
              {getDisplayText()}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {allowClear && hasValue() && !disabled && (
            <X
              size={16}
              className="text-select-placeholder hover:text-gray-600 cursor-pointer"
              onClick={handleClear}
            />
          )}
          <ChevronDown
            size={16}
            className={cn(
              "text-select-placeholder transition-transform duration-150",
              {
                "rotate-180": isOpen,
              }
            )}
          />
        </div>
      </div>

      {/* 下拉选项 */}
      {isOpen && (
        <div
          className="select-dropdown border-select-border absolute left-0 right-0 top-full z-50 mt-1 border shadow-lg min-w-fit py-2"
          style={{ maxHeight }}
        >
          <div className="overflow-auto" style={{ maxHeight: maxHeight - 2 }}>
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 mx-2 text-center text-select-placeholder text-xs">
                {notFoundContent}
              </div>
            ) : (
              filteredOptions.map((option, index) => (
                <div
                  key={String(option.value) + index}
                  className={cn(
                    "select-none relative flex items-center justify-between gap-1 cursor-pointer text-xs px-3 py-1.5 mx-1 transition-colors duration-150 whitespace-nowrap",
                    "bg-select-item-bg hover:bg-select-item-bg-hover",
                    "text-select-item-text hover:text-select-item-text-hover",
                    {
                      "cursor-not-allowed opacity-50": option.disabled,
                      "bg-select-item-bg-active text-select-item-text-active":
                        isOptionSelected(option),
                    }
                  )}
                  onClick={() => handleOptionClick(option)}
                >
                  {isOptionSelected(option) && (
                    <Check className="absolute left-2" size={12} />
                  )}
                  <span
                    className={cn(
                      "flex-1 pl-4",
                      isOptionSelected(option)
                        ? "text-select-item-text-active font-semibold"
                        : ""
                    )}
                  >
                    {option.label}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Select.displayName = "Select";

export default Select;
