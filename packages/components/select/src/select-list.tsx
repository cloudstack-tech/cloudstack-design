import {ReactNode} from "react";
import {SelectItem} from "./select-item";
import type {SelectOption} from "./types";

export interface SelectListProps<T = any> {
  options: SelectOption<T>[];
  value?: T;
  values?: T[];
  multiple?: boolean;
  showCheck?: boolean;
  onOptionClick: (option: SelectOption<T>) => void;
  maxHeight?: number;
  notFoundContent?: ReactNode;
  slots: any;
}

export function SelectList<T>({
  options,
  value,
  values,
  multiple = false,
  showCheck = true,
  onOptionClick,
  maxHeight = 256,
  notFoundContent = "无数据",
  slots,
}: SelectListProps<T>) {
  const isSelected = (option: SelectOption<T>) => {
    if (multiple) {
      return values ? values.includes(option.value) : false;
    }
    return value === option.value;
  };

  if (options.length === 0) {
    return (
      <div className={slots.dropdown()}>
        <div className={slots.noData()}>{notFoundContent}</div>
      </div>
    );
  }

  return (
    <div className={slots.dropdown()}>
      <div role="listbox" className={slots.listbox()} style={{maxHeight: `${maxHeight}px`}}>
        {options.map((option, index) => (
          <SelectItem
            key={index}
            option={option}
            isSelected={isSelected(option)}
            showCheck={showCheck}
            onClick={onOptionClick}
            slots={slots}
          />
        ))}
      </div>
    </div>
  );
}

SelectList.displayName = "CloudStackDesign.SelectList";
