import {ChevronDown, X} from "lucide-react";
import {useSelect} from "./use-select";
import {SelectList} from "./select-list";
import type {SelectProps} from "./types";

function Select<T = any>(props: SelectProps<T>) {
  const {
    // 状态
    isOpen,
    searchValue,
    isMultiple,
    hasValue,
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
    currentValue,

    // 方法
    getDisplayText,
    getSelectedOptions,
    handleOptionClick,
    handleClear,
    handleTriggerClick,
    setSearchValue,
  } = useSelect(props);

  // 渲染多选标签
  const renderMultipleTags = () => {
    if (!isMultiple) return null;

    const selectedOptions = getSelectedOptions();

    if (selectedOptions.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-1">
        {selectedOptions.map((option) => (
          <div key={String(option.value)} className={slots.tag()}>
            <span>{option.label}</span>
            <X
              size={12}
              className={slots.tagClose()}
              onMouseDown={(e) => {
                e.preventDefault();
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
    <div ref={selectRef} className={slots.base({class: className})}>
      {/* 选择触发器 */}
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={slots.trigger()}
        onClick={handleTriggerClick}
      >
        <div className={slots.valueWrapper()}>
          {isMultiple && hasValue ? (
            renderMultipleTags()
          ) : showSearch && isOpen ? (
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={slots.value({class: "w-full"})}
              placeholder={placeholder}
              onClick={(e) => e.stopPropagation()}
            />
          ) : hasValue ? (
            <span className={slots.value()}>{getDisplayText()}</span>
          ) : (
            <span className={slots.placeholder()}>{placeholder}</span>
          )}
        </div>

        <div className={slots.iconWrapper()}>
          {allowClear && hasValue && (
            <X size={16} className={slots.clearIcon()} onMouseDown={handleClear} />
          )}
          <ChevronDown size={16} className={slots.arrow()} />
        </div>
      </div>

      {/* 下拉选项列表 */}
      {isOpen && (
        <SelectList
          options={filteredOptions}
          value={isMultiple ? undefined : (currentValue as T)}
          values={isMultiple ? (currentValue as T[]) : undefined}
          multiple={isMultiple}
          showCheck={showCheck}
          onOptionClick={handleOptionClick}
          maxHeight={maxHeight}
          notFoundContent={notFoundContent}
          slots={slots}
        />
      )}
    </div>
  );
}

Select.displayName = "CloudStackDesign.Select";

export default Select;
