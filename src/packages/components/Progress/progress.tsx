"use client";

import React, { useMemo } from "react";
import { ProgressProps, ProgressStatus } from "./type";
import { cn } from "@/packages/utilities";
import { CheckIcon, XIcon, AlertTriangleIcon } from "lucide-react";

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      percent = 0,
      status = "normal",
      size = "default",
      showInfo = true,
      strokeColor,
      trailColor,
      strokeWidth,
      strokeLinecap = "round",
      format,
      success,
      steps,
      className,
      children,
      ...rest
    } = props;

    // 限制百分比在 0-100 之间
    const normalizedPercent = Math.max(0, Math.min(100, percent));
    const successPercent = success?.percent
      ? Math.max(0, Math.min(100, success.percent))
      : 0;

    // 确定最终状态
    const finalStatus: ProgressStatus = useMemo(() => {
      if (status !== "normal") return status;
      if (normalizedPercent >= 100) return "success";
      return "normal";
    }, [status, normalizedPercent]);

    // 渲染状态图标
    const renderStatusIcon = () => {
      switch (finalStatus) {
        case "success":
          return <CheckIcon className="w-4 h-4" />;
        case "error":
          return <XIcon className="w-4 h-4" />;
        case "warning":
          return <AlertTriangleIcon className="w-4 h-4" />;
        default:
          return null;
      }
    };

    // 渲染信息内容
    const renderInfo = () => {
      if (!showInfo) return null;

      const icon = renderStatusIcon();

      if (format) {
        const formattedContent = format(normalizedPercent, successPercent);
        return (
          <div
            className={cn(
              "progress-info ml-2 flex-shrink-0",
              {
                "text-xs": size === "small",
                "text-sm": size === "default",
                "text-base": size === "large",
              },
              // 响应式调整
              "max-sm:text-xs"
            )}
            style={{ color: "var(--color-default)" }}
          >
            {formattedContent}
          </div>
        );
      }

      if (icon) {
        return (
          <div
            className={cn(
              "progress-info ml-2 flex-shrink-0",
              {
                "text-xs": size === "small",
                "text-sm": size === "default",
                "text-base": size === "large",
              },
              // 响应式调整
              "max-sm:text-xs"
            )}
            style={{ color: "var(--color-default)" }}
          >
            <div
              className="progress-icon inline-flex items-center justify-center w-4 h-4"
              style={{
                color:
                  finalStatus === "success"
                    ? "var(--color-success)"
                    : finalStatus === "error"
                    ? "var(--color-error)"
                    : finalStatus === "warning"
                    ? "var(--color-warning)"
                    : "var(--color-default)",
              }}
            >
              {icon}
            </div>
          </div>
        );
      }

      return (
        <div
          className={cn(
            "progress-info ml-2 flex-shrink-0",
            {
              "text-xs": size === "small",
              "text-sm": size === "default",
              "text-base": size === "large",
            },
            // 响应式调整
            "max-sm:text-xs"
          )}
          style={{ color: "var(--color-default)" }}
        >
          {normalizedPercent}%
        </div>
      );
    };

    // 渲染步骤进度条
    const renderSteps = () => {
      if (!steps || steps <= 0) return null;

      const stepWidth = 100 / steps;
      const completedSteps = Math.floor((normalizedPercent / 100) * steps);

      return (
        <div className="progress-steps flex">
          {Array.from({ length: steps }, (_, index) => {
            const isActive = index < completedSteps;
            const isPartial =
              index === completedSteps && normalizedPercent % stepWidth !== 0;

            return (
              <div
                key={index}
                className={cn("progress-step flex-1 relative", {
                  "mr-2": index < steps - 1,
                })}
              >
                <div
                  className={cn(
                    "progress-step-item w-full rounded-sm transition-all duration-300",
                    {
                      "h-1.5": size === "small",
                      "h-2": size === "default",
                      "h-3": size === "large",
                    }
                  )}
                  style={{
                    backgroundColor:
                      isActive || isPartial
                        ? finalStatus === "success"
                          ? "var(--color-success)"
                          : finalStatus === "error"
                          ? "var(--color-error)"
                          : finalStatus === "warning"
                          ? "var(--color-warning)"
                          : "var(--color-primary)"
                        : "rgba(0, 0, 0, 0.06)",
                    opacity: isPartial
                      ? (normalizedPercent % stepWidth) / stepWidth
                      : isActive
                      ? 1
                      : undefined,
                  }}
                />
              </div>
            );
          })}
        </div>
      );
    };

    // 渲染线形进度条
    const renderLine = () => {
      const fillStyle: React.CSSProperties = {
        width: `${normalizedPercent}%`,
      };

      // 处理自定义颜色
      if (strokeColor) {
        if (typeof strokeColor === "string") {
          fillStyle.backgroundColor = strokeColor;
        } else if (strokeColor.from && strokeColor.to) {
          const direction = strokeColor.direction || "to right";
          fillStyle.background = `linear-gradient(${direction}, ${strokeColor.from}, ${strokeColor.to})`;
        }
      } else {
        // 使用状态颜色
        fillStyle.backgroundColor =
          finalStatus === "success"
            ? "var(--color-success)"
            : finalStatus === "error"
            ? "var(--color-error)"
            : finalStatus === "warning"
            ? "var(--color-warning)"
            : "var(--color-primary)";
      }

      // 处理线宽
      const lineStyle: React.CSSProperties = {
        backgroundColor: trailColor || "rgba(0, 0, 0, 0.06)",
      };
      if (strokeWidth) {
        lineStyle.height = `${strokeWidth}px`;
      }

      return (
        <div
          className={cn(
            "progress-line relative w-full rounded-full overflow-hidden",
            {
              "h-1.5": size === "small" && !strokeWidth,
              "h-2": size === "default" && !strokeWidth,
              "h-3": size === "large" && !strokeWidth,
            }
          )}
          style={lineStyle}
        >
          {/* 成功分段 */}
          {successPercent > 0 && (
            <div
              className="progress-success absolute top-0 left-0 h-full transition-all duration-300 ease-out"
              style={{
                width: `${successPercent}%`,
                backgroundColor: success?.strokeColor || "var(--color-success)",
              }}
            />
          )}

          {/* 主进度条 */}
          <div
            className={cn(
              "progress-fill h-full transition-all duration-300 ease-out",
              {
                "rounded-full": strokeLinecap === "round",
                "rounded-none": strokeLinecap === "square",
              }
            )}
            style={fillStyle}
          />
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn("progress-container relative w-full", className)}
        {...rest}
      >
        <div className="progress-wrapper flex items-center">
          {steps ? renderSteps() : renderLine()}
          {renderInfo()}
        </div>
        {children}
      </div>
    );
  }
);

Progress.displayName = "Progress";
