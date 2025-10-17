import {Check} from "lucide-react";
import type {SelectOption} from "./types";

export interface SelectItemProps<T = any> {
  option: SelectOption<T>;
  isSelected: boolean;
  showCheck?: boolean;
  onClick: (option: SelectOption<T>) => void;
  slots: any;
}

export function SelectItem<T>({
  option,
  isSelected,
  showCheck = true,
  onClick,
  slots,
}: SelectItemProps<T>) {
  const handleClick = () => {
    if (!option.disabled) {
      onClick(option);
    }
  };

  return (
    <div
      role="option"
      aria-selected={isSelected}
      aria-disabled={option.disabled}
      className={slots.option({
        isSelected,
        isOptionDisabled: option.disabled,
      })}
      onClick={handleClick}
    >
      <span className={slots.optionLabel()}>{option.label}</span>
      {showCheck && isSelected && (
        <span className={slots.optionCheck()}>
          <Check size={14} />
        </span>
      )}
    </div>
  );
}

SelectItem.displayName = "CloudStackDesign.SelectItem";
