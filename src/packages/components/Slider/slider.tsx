"use client";

import React, { useState, useCallback } from "react";
import { SliderProps, SliderMark } from "./type";
import { useSlider } from "./useSlider";
import { cn } from "@/packages/utilities";

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const {
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      onChange,
      onChangeComplete,
      disabled = false,
      vertical = false,
      marks = false,
      tooltip = true,
      formatTooltip,
      range = false,
      trackClassName,
      railClassName,
      handleClassName,
      className,
      size = "default",
      ...rest
    } = props;

    const [showTooltip, setShowTooltip] = useState<boolean[]>([]);

    const {
      railRef,
      currentValue,
      dragging,
      dragHandle,
      handleMouseDown,
      handleKeyDown,
      getPositionPercentage,
    } = useSlider({
      min,
      max,
      step,
      value,
      defaultValue,
      range,
      disabled,
      vertical,
      onChange,
      onChangeComplete,
    });

    // 处理标记点
    const getMarksData = useCallback((): SliderMark[] => {
      if (!marks) return [];

      if (Array.isArray(marks)) {
        return marks;
      }

      if (typeof marks === "object") {
        return Object.entries(marks).map(([value, label]) => ({
          value: Number(value),
          label,
        }));
      }

      // 自动生成标记点
      const marksData: SliderMark[] = [];
      const markStep = (max - min) / 10; // 默认10个标记点
      for (let i = 0; i <= 10; i++) {
        marksData.push({
          value: min + i * markStep,
          label: String(Math.round(min + i * markStep)),
        });
      }

      return marksData;
    }, [marks, min, max]);

    // 判断标记点是否激活
    const isMarkActive = useCallback(
      (markValue: number): boolean => {
        if (Array.isArray(currentValue)) {
          return markValue >= currentValue[0] && markValue <= currentValue[1];
        }
        return markValue <= (currentValue as number);
      },
      [currentValue]
    );

    // 渲染手柄
    const renderHandle = useCallback(
      (handleValue: number, index: number = 0) => {
        const position = getPositionPercentage(handleValue);
        const handleId = `slider-handle-${index}`;
        const isShowingTooltip =
          tooltip === "always" ||
          (tooltip === true && (dragging || showTooltip[index]));

        const handleStyle = vertical
          ? { bottom: `${position}%` }
          : { left: `${position}%` };

        return (
          <div
            key={handleId}
            className={cn(
              "slider-handle absolute rounded-full border-2 border-white transition-all duration-200 z-10",
              // 方向和位置样式
              {
                "top-1/2 transform -translate-y-1/2 -translate-x-1/2":
                  !vertical,
                "left-1/2 transform -translate-x-1/2 -translate-y-1/2":
                  vertical,
              },
              // 尺寸样式
              {
                "w-3 h-3": size === "small",
                "w-4 h-4": size === "default",
                "w-5 h-5": size === "large",
              },
              // 响应式调整 - 移动端使用较大的触摸目标
              "max-sm:w-5 max-sm:h-5",
              // 交互样式
              {
                "cursor-grab": !disabled,
                "cursor-not-allowed": disabled,
                "active:cursor-grabbing": !disabled,
                "hover:scale-125": !disabled,
                "focus:scale-125": !disabled,
                "focus:outline-none focus:ring-2 focus:ring-offset-2":
                  !disabled,
              },
              handleClassName
            )}
            style={
              {
                ...handleStyle,
                backgroundColor: disabled
                  ? "var(--color-disabled-text)"
                  : "var(--color-primary)",
                boxShadow: disabled
                  ? "0 2px 6px rgba(0, 0, 0, 0.12)"
                  : dragging || showTooltip[index]
                  ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                  : "0 2px 6px rgba(0, 0, 0, 0.12)",
                ...({ "--tw-ring-color": "var(--color-primary)" } as any),
              } as React.CSSProperties
            }
            tabIndex={disabled ? -1 : 0}
            role="slider"
            aria-valuenow={handleValue}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-disabled={disabled}
            aria-label={`滑块手柄 ${index + 1}`}
            onMouseDown={(e) =>
              handleMouseDown(e, range ? (index as 0 | 1) : undefined)
            }
            onTouchStart={(e) =>
              handleMouseDown(e as any, range ? (index as 0 | 1) : undefined)
            }
            onKeyDown={(e) =>
              handleKeyDown(e, range ? (index as 0 | 1) : undefined)
            }
            onMouseEnter={() => {
              if (tooltip === true) {
                setShowTooltip((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }
            }}
            onMouseLeave={() => {
              if (tooltip === true) {
                setShowTooltip((prev) => {
                  const newState = [...prev];
                  newState[index] = false;
                  return newState;
                });
              }
            }}
          >
            {isShowingTooltip && (
              <div
                className={cn(
                  "slider-tooltip absolute px-2 py-1 text-xs text-white rounded pointer-events-none z-20",
                  // 响应式调整 - 移动端使用较大的文字和间距
                  "max-sm:text-sm max-sm:px-3 max-sm:py-1.5",
                  // 方向样式
                  {
                    "bottom-full mb-2 left-1/2 transform -translate-x-1/2":
                      !vertical,
                    "right-full mr-2 top-1/2 transform -translate-y-1/2":
                      vertical,
                  }
                )}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
              >
                {formatTooltip ? formatTooltip(handleValue) : handleValue}
                {/* Tooltip 箭头 */}
                <div
                  className={cn("absolute w-0 h-0", {
                    "top-full left-1/2 transform -translate-x-1/2": !vertical,
                    "top-1/2 left-full transform -translate-y-1/2": vertical,
                  })}
                  style={
                    !vertical
                      ? {
                          borderLeft: "4px solid transparent",
                          borderRight: "4px solid transparent",
                          borderTop: "4px solid rgba(0, 0, 0, 0.8)",
                        }
                      : {
                          borderLeft: "4px solid rgba(0, 0, 0, 0.8)",
                          borderTop: "4px solid transparent",
                          borderBottom: "4px solid transparent",
                        }
                  }
                />
              </div>
            )}
          </div>
        );
      },
      [
        getPositionPercentage,
        vertical,
        disabled,
        min,
        max,
        range,
        handleMouseDown,
        handleKeyDown,
        handleClassName,
        tooltip,
        dragging,
        showTooltip,
        formatTooltip,
        size,
      ]
    );

    // 渲染轨道
    const renderTrack = useCallback(() => {
      let trackStyle: React.CSSProperties = {};

      if (Array.isArray(currentValue)) {
        const [start, end] = currentValue;
        const startPos = getPositionPercentage(start);
        const endPos = getPositionPercentage(end);

        if (vertical) {
          trackStyle = {
            bottom: `${startPos}%`,
            height: `${endPos - startPos}%`,
          };
        } else {
          trackStyle = {
            left: `${startPos}%`,
            width: `${endPos - startPos}%`,
          };
        }
      } else {
        const pos = getPositionPercentage(currentValue as number);

        if (vertical) {
          trackStyle = {
            bottom: 0,
            height: `${pos}%`,
          };
        } else {
          trackStyle = {
            left: 0,
            width: `${pos}%`,
          };
        }
      }

      return (
        <div
          className={cn(
            "slider-track absolute rounded-full transition-all duration-200",
            // 方向样式
            {
              "top-1/2 transform -translate-y-1/2": !vertical,
              "left-1/2 transform -translate-x-1/2": vertical,
            },
            // 尺寸样式
            {
              "h-0.5": size === "small" && !vertical,
              "w-0.5": size === "small" && vertical,
              "h-1": size === "default" && !vertical,
              "w-1": size === "default" && vertical,
              "h-1.5": size === "large" && !vertical,
              "w-1.5": size === "large" && vertical,
            },
            trackClassName
          )}
          style={{
            ...trackStyle,
            backgroundColor: disabled
              ? "var(--color-disabled-text)"
              : "var(--color-primary)",
          }}
        />
      );
    }, [
      currentValue,
      getPositionPercentage,
      vertical,
      trackClassName,
      disabled,
      size,
    ]);

    // 渲染标记点
    const renderMarks = useCallback(() => {
      const marksData = getMarksData();
      if (marksData.length === 0) return null;

      return (
        <div
          className={cn("slider-marks absolute", {
            "w-full top-1/2 transform -translate-y-1/2": !vertical,
            "h-full left-1/2 transform -translate-x-1/2": vertical,
          })}
        >
          {marksData.map((mark) => {
            const position = getPositionPercentage(mark.value);
            const markStyle = vertical
              ? { bottom: `${position}%` }
              : { left: `${position}%` };

            return (
              <div key={mark.value}>
                <div
                  className={cn(
                    "slider-mark absolute w-1 h-1 rounded-full border border-gray-300 bg-white",
                    // 方向样式
                    {
                      "top-1/2 transform -translate-x-1/2 -translate-y-1/2":
                        !vertical,
                      "left-1/2 transform -translate-x-1/2 -translate-y-1/2":
                        vertical,
                    },
                    // 激活状态
                    {
                      "border-current bg-current": isMarkActive(mark.value),
                    }
                  )}
                  style={{
                    ...markStyle,
                    borderColor: isMarkActive(mark.value)
                      ? "var(--color-primary)"
                      : undefined,
                    backgroundColor: isMarkActive(mark.value)
                      ? "var(--color-primary)"
                      : undefined,
                  }}
                />
                {mark.label && (
                  <div
                    className={cn(
                      "slider-mark-label absolute text-xs text-gray-500 select-none",
                      {
                        "top-full mt-2 left-1/2 transform -translate-x-1/2":
                          !vertical,
                        "left-full ml-2 top-1/2 transform -translate-y-1/2":
                          vertical,
                      }
                    )}
                    style={markStyle}
                  >
                    {mark.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }, [getMarksData, getPositionPercentage, vertical, isMarkActive]);

    return (
      <div
        ref={ref}
        className={cn(
          "slider-container relative w-full",
          {
            "h-full w-auto": vertical,
            "cursor-not-allowed opacity-50": disabled,
          },
          className
        )}
        style={vertical ? { height: 200 } : undefined}
        {...rest}
      >
        {/* 背景轨道 */}
        <div
          ref={railRef}
          className={cn(
            "slider-rail absolute rounded-full",
            // 水平方向样式
            {
              "w-full top-1/2 transform -translate-y-1/2": !vertical,
              "h-full left-1/2 transform -translate-x-1/2": vertical,
            },
            // 尺寸样式
            {
              "h-0.5": size === "small" && !vertical,
              "w-0.5": size === "small" && vertical,
              "h-1": size === "default" && !vertical,
              "w-1": size === "default" && vertical,
              "h-1.5": size === "large" && !vertical,
              "w-1.5": size === "large" && vertical,
            },
            railClassName
          )}
          style={{
            backgroundColor: "var(--color-border-default)",
          }}
        />

        {/* 填充轨道 */}
        {renderTrack()}

        {/* 标记点 */}
        {renderMarks()}

        {/* 手柄 */}
        {Array.isArray(currentValue)
          ? currentValue.map((val, index) => renderHandle(val, index))
          : renderHandle(currentValue as number)}
      </div>
    );
  }
);

Slider.displayName = "Slider";
