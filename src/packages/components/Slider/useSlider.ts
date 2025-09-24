import { useState, useCallback, useRef, useEffect } from "react";

export interface UseSliderProps {
  min: number;
  max: number;
  step: number;
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  range: boolean;
  disabled: boolean;
  vertical: boolean;
  onChange?: (value: number | [number, number]) => void;
  onChangeComplete?: (value: number | [number, number]) => void;
}

export const useSlider = ({
  min,
  max,
  step,
  value: controlledValue,
  defaultValue,
  range,
  disabled,
  vertical,
  onChange,
  onChangeComplete,
}: UseSliderProps) => {
  // 初始化内部值
  const getInitialValue = (): number | [number, number] => {
    if (controlledValue !== undefined) return controlledValue;
    if (defaultValue !== undefined) return defaultValue;
    return range ? [min, min] : min;
  };

  const [internalValue, setInternalValue] = useState<number | [number, number]>(
    getInitialValue
  );
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragHandle, setDragHandle] = useState<0 | 1 | null>(null);

  const railRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // 值约束函数
  const constrainValue = useCallback(
    (val: number): number => {
      const steppedValue = Math.round((val - min) / step) * step + min;
      return Math.max(min, Math.min(max, steppedValue));
    },
    [min, max, step]
  );

  // 根据鼠标位置计算值
  const getValueFromPosition = useCallback(
    (event: MouseEvent | TouchEvent): number => {
      if (!railRef.current) return min;

      const rect = railRef.current.getBoundingClientRect();
      const clientPos = "touches" in event ? event.touches[0] : event;

      let percentage: number;
      if (vertical) {
        percentage = (rect.bottom - clientPos.clientY) / rect.height;
      } else {
        percentage = (clientPos.clientX - rect.left) / rect.width;
      }

      percentage = Math.max(0, Math.min(1, percentage));
      return constrainValue(min + percentage * (max - min));
    },
    [min, max, constrainValue, vertical]
  );

  // 更新值
  const updateValue = useCallback(
    (newValue: number | [number, number]) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  // 处理单个手柄拖拽
  const handleSingleDrag = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (disabled) return;

      const newValue = getValueFromPosition(event);
      updateValue(newValue);
    },
    [disabled, getValueFromPosition, updateValue]
  );

  // 处理范围滑块拖拽
  const handleRangeDrag = useCallback(
    (event: MouseEvent | TouchEvent, handleIndex: 0 | 1) => {
      if (disabled || !Array.isArray(currentValue)) return;

      const newValue = getValueFromPosition(event);
      const [min_val, max_val] = currentValue;

      let newRange: [number, number];
      if (handleIndex === 0) {
        // 左手柄
        newRange = [Math.min(newValue, max_val), max_val];
      } else {
        // 右手柄
        newRange = [min_val, Math.max(newValue, min_val)];
      }

      updateValue(newRange);
    },
    [disabled, currentValue, getValueFromPosition, updateValue]
  );

  // 开始拖拽
  const handleMouseDown = useCallback(
    (event: React.MouseEvent, handleIndex?: 0 | 1) => {
      if (disabled) return;

      event.preventDefault();
      setDragging(true);

      if (range && handleIndex !== undefined) {
        setDragHandle(handleIndex);
      }
    },
    [disabled, range]
  );

  // 鼠标移动处理
  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (range && dragHandle !== null) {
        handleRangeDrag(event, dragHandle);
      } else {
        handleSingleDrag(event);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
      setDragHandle(null);
      onChangeComplete?.(currentValue);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // 触摸事件支持
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [
    dragging,
    range,
    dragHandle,
    handleSingleDrag,
    handleRangeDrag,
    currentValue,
    onChangeComplete,
  ]);

  // 键盘事件处理
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, handleIndex?: 0 | 1) => {
      if (disabled) return;

      let delta = 0;

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowDown":
          delta = -step;
          break;
        case "ArrowRight":
        case "ArrowUp":
          delta = step;
          break;
        case "PageDown":
          delta = -step * 10;
          break;
        case "PageUp":
          delta = step * 10;
          break;
        case "Home":
          delta =
            min -
            (Array.isArray(currentValue)
              ? currentValue[handleIndex || 0]
              : currentValue);
          break;
        case "End":
          delta =
            max -
            (Array.isArray(currentValue)
              ? currentValue[handleIndex || 0]
              : currentValue);
          break;
        default:
          return;
      }

      event.preventDefault();

      if (range && Array.isArray(currentValue) && handleIndex !== undefined) {
        const newValue = constrainValue(currentValue[handleIndex] + delta);
        const newRange: [number, number] = [...currentValue] as [
          number,
          number
        ];
        newRange[handleIndex] = newValue;

        // 确保范围值的正确顺序
        if (newRange[0] > newRange[1]) {
          newRange[handleIndex === 0 ? 1 : 0] = newValue;
        }

        updateValue(newRange);
      } else if (!range && typeof currentValue === "number") {
        const newValue = constrainValue(currentValue + delta);
        updateValue(newValue);
      }
    },
    [disabled, step, min, max, currentValue, range, constrainValue, updateValue]
  );

  // 计算位置百分比
  const getPositionPercentage = useCallback(
    (value: number): number => {
      return ((value - min) / (max - min)) * 100;
    },
    [min, max]
  );

  return {
    railRef,
    currentValue,
    dragging,
    dragHandle,
    handleMouseDown,
    handleKeyDown,
    getPositionPercentage,
  };
};
