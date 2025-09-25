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
            className={cn("slider-handle", handleClassName)}
            style={handleStyle}
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
              <div className="slider-tooltip">
                {formatTooltip ? formatTooltip(handleValue) : handleValue}
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
          className={cn("slider-track", trackClassName)}
          style={trackStyle}
        />
      );
    }, [currentValue, getPositionPercentage, vertical, trackClassName]);

    // 渲染标记点
    const renderMarks = useCallback(() => {
      const marksData = getMarksData();
      if (marksData.length === 0) return null;

      return (
        <div className="slider-marks">
          {marksData.map((mark) => {
            const position = getPositionPercentage(mark.value);
            const markStyle = vertical
              ? { bottom: `${position}%` }
              : { left: `${position}%` };

            return (
              <div key={mark.value}>
                <div
                  className={cn("slider-mark", {
                    active: isMarkActive(mark.value),
                  })}
                  style={markStyle}
                />
                {mark.label && (
                  <div className="slider-mark-label" style={markStyle}>
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
          "slider-container",
          size,
          {
            vertical,
            disabled,
          },
          className
        )}
        style={vertical ? { height: 200 } : undefined}
        {...rest}
      >
        {/* 背景轨道 */}
        <div ref={railRef} className={cn("slider-rail", railClassName)} />

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
