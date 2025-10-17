import {useState, useCallback, useMemo, useRef, useEffect} from "react";
import {select, SelectSlots} from "@cloudstack-design/theme";
import type {SelectProps, SingleSelectProps, MultipleSelectProps, SelectOption} from "./types";

export const useSelect = <T,>(props: SelectProps<T>) => {
  const {
    options = [],
    placeholder = "请选择",
    disabled: isDisabled = false,
    allowClear = false,
    maxHeight = 256,
    className,
    showSearch = false,
    filterOption,
    notFoundContent = "无数据",
    showCheck = true,
    size,
    isInvalid,
    fullWidth,
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
      return singleProps.value !== undefined ? singleProps.value : internalValue;
    }
  }, [props, internalValue, isMultiple]);

  // 过滤选项
  const filteredOptions = useMemo(() => {
    if (!showSearch || !searchValue) return options;

    const defaultFilter = (input: string, option: SelectOption<T>) => {
      const label = typeof option.label === "string" ? option.label : String(option.label);
      return label.toLowerCase().includes(input.toLowerCase());
    };

    const filter = filterOption || defaultFilter;
    return options.filter((option) => filter(searchValue, option));
  }, [options, searchValue, showSearch, filterOption]);

  // 获取 slots
  const slots = useMemo(
    () =>
      select({
        size,
        isDisabled,
        isOpen,
        isInvalid,
        fullWidth,
      }),
    [size, isDisabled, isOpen, isInvalid, fullWidth],
  );

  // 检查是否有值
  const hasValue = useCallback(() => {
    if (isMultiple) {
      const values = currentValue as T[];
      return values && values.length > 0;
    } else {
      const value = currentValue as T;
      return value !== undefined && value !== null;
    }
  }, [currentValue, isMultiple]);

  // 获取显示文本
  const getDisplayText = useCallback(() => {
    if (isMultiple) {
      const values = currentValue as T[];
      if (!values || values.length === 0) return placeholder;

      const selectedOptions = options.filter((option) => values.includes(option.value));
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
  }, [currentValue, isMultiple, options, placeholder]);

  // 处理选项点击
  const handleOptionClick = useCallback(
    (option: SelectOption<T>) => {
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
    },
    [isMultiple, currentValue, props],
  );

  // 处理清除
  const handleClear = useCallback(
    (e: React.MouseEvent) => {
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
    },
    [isMultiple, props],
  );

  // 处理输入框点击
  const handleTriggerClick = useCallback(() => {
    if (isDisabled) return;
    setIsOpen(!isOpen);
    if (showSearch && !isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isDisabled, isOpen, showSearch]);

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 获取选中的选项（多选模式）
  const getSelectedOptions = useCallback(() => {
    if (!isMultiple) return [];
    const values = (currentValue as T[]) || [];
    return options.filter((option) => values.includes(option.value));
  }, [isMultiple, currentValue, options]);

  return {
    // 状态
    isOpen,
    searchValue,
    isMultiple,
    hasValue: hasValue(),
    currentValue,
    filteredOptions,

    // Refs
    selectRef,
    inputRef,

    // 样式
    slots,
    className,

    // 配置
    placeholder,
    maxHeight,
    notFoundContent,
    showCheck,
    showSearch,
    allowClear,

    // 方法
    getDisplayText,
    getSelectedOptions,
    handleOptionClick,
    handleClear,
    handleTriggerClick,
    setSearchValue,
  };
};

export type UseSelectReturn = ReturnType<typeof useSelect>;
