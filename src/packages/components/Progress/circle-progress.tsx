"use client";

import React, { useMemo } from "react";
import { CircleProgressProps, ProgressStatus } from "./type";
import { cn } from "@/packages/utilities";
import { CheckIcon, XIcon, AlertTriangleIcon } from "lucide-react";

export const CircleProgress = React.forwardRef<
  HTMLDivElement,
  CircleProgressProps
>((props, ref) => {
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
    width = 132,
    type = "circle",
    gapDegree = 75,
    gapPosition = "bottom",
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

  // 计算 SVG 参数
  const svgSize = width;
  const radius = (width - (strokeWidth || 6)) / 2;
  const center = width / 2;

  // 计算路径参数
  const isDashboard = type === "dashboard";
  const gapRad = isDashboard ? (gapDegree * Math.PI) / 180 : 0;
  const beginPositionX = 0;
  const beginPositionY = -radius;

  // 计算路径
  const getPathString = (offset: number = 0) => {
    const startAngle = -Math.PI / 2 + gapRad / 2 + offset;
    const endAngle = (Math.PI * 3) / 2 - gapRad / 2 + offset;
    const startX = center + radius * Math.cos(startAngle);
    const startY = center + radius * Math.sin(startAngle);
    const endX = center + radius * Math.cos(endAngle);
    const endY = center + radius * Math.sin(endAngle);

    if (isDashboard) {
      return `M ${startX} ${startY} A ${radius} ${radius} 0 1 1 ${endX} ${endY}`;
    }

    return `M ${center} ${beginPositionY} A ${radius} ${radius} 0 1 1 ${center} ${
      beginPositionY + 0.01
    }`;
  };

  // 计算周长
  const circumference = isDashboard
    ? (Math.PI * 2 * radius * (360 - gapDegree)) / 360
    : Math.PI * 2 * radius;

  // 计算进度偏移
  const progressOffset = circumference * (1 - normalizedPercent / 100);
  const successOffset =
    successPercent > 0
      ? circumference * (1 - successPercent / 100)
      : circumference;

  // 获取颜色
  const getStrokeColor = () => {
    if (strokeColor) {
      return typeof strokeColor === "string" ? strokeColor : undefined;
    }

    switch (finalStatus) {
      case "success":
        return "var(--color-success)";
      case "error":
        return "var(--color-error)";
      case "warning":
        return "var(--color-warning)";
      default:
        return "var(--color-primary)";
    }
  };

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

  // 渲染内容
  const renderContent = () => {
    if (!showInfo) return null;

    const icon = renderStatusIcon();

    if (format) {
      const formattedContent = format(normalizedPercent, successPercent);
      return (
        <div
          className={cn(
            "progress-circle-text font-medium",
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
            "progress-circle-text font-medium",
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
        className={cn("progress-circle-text font-medium", {
          "text-xs": size === "small",
          "text-sm": size === "default",
          "text-base": size === "large",
        })}
        style={{ color: "var(--color-default)" }}
      >
        <div>{normalizedPercent}%</div>
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className={cn(
        "progress-circle relative inline-block",
        { "progress-dashboard": isDashboard },
        className
      )}
      style={{ width: svgSize, height: svgSize }}
      {...rest}
    >
      <svg
        className={cn("progress-circle-svg", {
          "transform -rotate-90": !isDashboard,
          "transform rotate-0": isDashboard,
        })}
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
      >
        {/* 定义渐变 */}
        {strokeColor && typeof strokeColor !== "string" && (
          <defs>
            <linearGradient
              id={`gradient-${Math.random()}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={strokeColor.from} />
              <stop offset="100%" stopColor={strokeColor.to} />
            </linearGradient>
          </defs>
        )}

        {/* 背景轨道 */}
        <path
          className="progress-circle-trail fill-none"
          d={getPathString()}
          strokeWidth={strokeWidth || 6}
          fillOpacity="0"
          style={{
            stroke: trailColor || "rgba(0, 0, 0, 0.06)",
          }}
        />

        {/* 成功分段 */}
        {successPercent > 0 && (
          <path
            className="progress-circle-path success fill-none transition-all duration-300 ease-out"
            d={getPathString()}
            strokeWidth={strokeWidth || 6}
            fillOpacity="0"
            strokeDasharray={circumference}
            strokeDashoffset={successOffset}
            strokeLinecap={strokeLinecap}
            style={{
              stroke: success?.strokeColor || "var(--color-success)",
            }}
          />
        )}

        {/* 主进度路径 */}
        <path
          className="progress-circle-path fill-none transition-all duration-300 ease-out"
          d={getPathString()}
          strokeWidth={strokeWidth || 6}
          fillOpacity="0"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap={strokeLinecap}
          style={{
            stroke: getStrokeColor(),
            ...(strokeColor && typeof strokeColor !== "string"
              ? { stroke: `url(#gradient-${Math.random()})` }
              : {}),
          }}
        />
      </svg>

      {/* 中心内容 */}
      <div className="progress-circle-content absolute inset-0 flex items-center justify-center text-center">
        {renderContent()}
        {children}
      </div>
    </div>
  );
});

CircleProgress.displayName = "CircleProgress";
