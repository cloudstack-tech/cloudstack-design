"use client";

import React, { useMemo } from "react";
import { ProgressProps, ProgressStatus } from "./type";
import { cn } from "@/packages/utilities";
import { CheckIcon, XIcon, AlertTriangleIcon } from "lucide-react";
import "./progress.theme.css";

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
          <div className={cn("progress-info", size)}>{formattedContent}</div>
        );
      }

      if (icon) {
        return (
          <div className={cn("progress-info", size)}>
            <div className={cn("progress-icon", finalStatus)}>{icon}</div>
          </div>
        );
      }

      return (
        <div className={cn("progress-info", size)}>{normalizedPercent}%</div>
      );
    };

    // 渲染步骤进度条
    const renderSteps = () => {
      if (!steps || steps <= 0) return null;

      const stepWidth = 100 / steps;
      const completedSteps = Math.floor((normalizedPercent / 100) * steps);

      return (
        <div className="progress-steps">
          {Array.from({ length: steps }, (_, index) => {
            const isActive = index < completedSteps;
            const isPartial =
              index === completedSteps && normalizedPercent % stepWidth !== 0;

            return (
              <div key={index} className="progress-step">
                <div
                  className={cn("progress-step-item", size, {
                    active: isActive || isPartial,
                    [finalStatus]: isActive || isPartial,
                  })}
                  style={{
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
      }

      // 处理线宽
      const lineStyle: React.CSSProperties = {};
      if (strokeWidth) {
        lineStyle.height = `${strokeWidth}px`;
      }
      if (trailColor) {
        lineStyle.backgroundColor = trailColor;
      }

      return (
        <div className={cn("progress-line", size)} style={lineStyle}>
          {/* 成功分段 */}
          {successPercent > 0 && (
            <div
              className="progress-success"
              style={{
                width: `${successPercent}%`,
                backgroundColor: success?.strokeColor,
              }}
            />
          )}

          {/* 主进度条 */}
          <div
            className={cn("progress-fill", finalStatus, strokeLinecap)}
            style={fillStyle}
          />
        </div>
      );
    };

    return (
      <div ref={ref} className={cn("progress-container", className)} {...rest}>
        <div className="progress-wrapper">
          {steps ? renderSteps() : renderLine()}
          {renderInfo()}
        </div>
        {children}
      </div>
    );
  }
);

Progress.displayName = "Progress";
