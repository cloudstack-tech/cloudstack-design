"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/packages/utils";
import { AffixProps, AffixState } from "./type";
import { affixVariants, affixPlaceholderVariants } from "./variants";

// 获取滚动容器
const getTargetElement = (
  target?: () => Window | HTMLElement | null
): Window | HTMLElement => {
  if (!target) {
    return window;
  }
  const targetElement = target();
  return targetElement || window;
};

// 获取元素的偏移信息
const getElementOffset = (
  element: HTMLElement,
  target: Window | HTMLElement
) => {
  const rect = element.getBoundingClientRect();

  if (target === window) {
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset,
      width: rect.width,
      height: rect.height,
    };
  } else {
    const targetRect = (target as HTMLElement).getBoundingClientRect();
    return {
      top: rect.top - targetRect.top + (target as HTMLElement).scrollTop,
      left: rect.left - targetRect.left + (target as HTMLElement).scrollLeft,
      width: rect.width,
      height: rect.height,
    };
  }
};

// 获取滚动信息
const getScroll = (target: Window | HTMLElement) => {
  if (target === window) {
    return {
      scrollTop:
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop,
      scrollLeft:
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
    };
  } else {
    return {
      scrollTop: (target as HTMLElement).scrollTop,
      scrollLeft: (target as HTMLElement).scrollLeft,
    };
  }
};

// 获取容器尺寸
const getTargetSize = (target: Window | HTMLElement) => {
  if (target === window) {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight,
    };
  } else {
    return {
      width: (target as HTMLElement).clientWidth,
      height: (target as HTMLElement).clientHeight,
    };
  }
};

const Affix = React.forwardRef<HTMLDivElement, AffixProps>((props, ref) => {
  const {
    children,
    offsetTop,
    offsetBottom,
    target,
    onChange,
    className,
    style,
    as: Component = "div",
    zIndex = 100,
    variant = "default",
    shadow = false,
    bordered = false,
    position = "top",
  } = props;

  const affixRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [affixState, setAffixState] = useState<AffixState>({
    affixed: false,
    affixedType: null,
    originalStyle: {},
    placeholderSize: { width: 0, height: 0 },
  });

  // 计算是否需要固定
  const updatePosition = useCallback(() => {
    const affixElement = affixRef.current;
    const placeholderElement = placeholderRef.current;

    if (!affixElement || !placeholderElement) return;

    const targetElement = getTargetElement(target);
    const scroll = getScroll(targetElement);
    const targetSize = getTargetSize(targetElement);
    const elementOffset = getElementOffset(placeholderElement, targetElement);

    let newAffixed = false;
    let newAffixedType: "top" | "bottom" | null = null;

    // 计算固定位置
    if (offsetTop !== undefined && position === "top") {
      // 顶部固定
      if (scroll.scrollTop > elementOffset.top - offsetTop) {
        newAffixed = true;
        newAffixedType = "top";
      }
    }

    if (offsetBottom !== undefined && position === "bottom") {
      // 底部固定
      const elementBottom = elementOffset.top + elementOffset.height;
      const viewportBottom = scroll.scrollTop + targetSize.height;

      if (viewportBottom < elementBottom + offsetBottom) {
        newAffixed = true;
        newAffixedType = "bottom";
      }
    }

    // 更新状态
    setAffixState((prevState) => {
      if (
        prevState.affixed !== newAffixed ||
        prevState.affixedType !== newAffixedType
      ) {
        const newState = {
          ...prevState,
          affixed: newAffixed,
          affixedType: newAffixedType,
          placeholderSize: {
            width: elementOffset.width,
            height: elementOffset.height,
          },
        };

        // 触发回调
        if (onChange && prevState.affixed !== newAffixed) {
          onChange(newAffixed);
        }

        return newState;
      }
      return prevState;
    });
  }, [offsetTop, offsetBottom, target, onChange, position]);

  // 监听滚动事件
  useEffect(() => {
    const targetElement = getTargetElement(target);

    // 初始计算
    updatePosition();

    // 添加事件监听
    const handleScroll = () => {
      updatePosition();
    };

    const handleResize = () => {
      updatePosition();
    };

    if (targetElement === window) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
    } else {
      (targetElement as HTMLElement).addEventListener("scroll", handleScroll, {
        passive: true,
      });
      window.addEventListener("resize", handleResize, { passive: true });
    }

    return () => {
      if (targetElement === window) {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      } else {
        (targetElement as HTMLElement).removeEventListener(
          "scroll",
          handleScroll
        );
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [target, updatePosition]);

  // 计算固定时的样式
  const getAffixedStyle = (): React.CSSProperties => {
    if (!affixState.affixed) return {};

    const baseStyle: React.CSSProperties = {
      zIndex,
      width: affixState.placeholderSize.width,
    };

    if (affixState.affixedType === "top" && offsetTop !== undefined) {
      baseStyle.top = offsetTop;
    }

    if (affixState.affixedType === "bottom" && offsetBottom !== undefined) {
      baseStyle.bottom = offsetBottom;
    }

    return baseStyle;
  };

  // 占位元素样式
  const placeholderStyle: React.CSSProperties = {
    width: affixState.placeholderSize.width,
    height: affixState.placeholderSize.height,
  };

  const affixClassName = cn(
    affixVariants({
      variant: shadow ? "shadow" : bordered ? "bordered" : variant,
      position: affixState.affixedType || position,
      affixed: affixState.affixed,
    }),
    className
  );

  const placeholderClassName = cn(
    affixPlaceholderVariants({
      active: affixState.affixed,
    })
  );

  return (
    <>
      {/* 占位元素 */}
      <div
        ref={placeholderRef}
        className={placeholderClassName}
        style={placeholderStyle}
        aria-hidden="true"
      />

      {/* 实际内容 */}
      <Component
        ref={ref || affixRef}
        className={affixClassName}
        style={{
          ...style,
          ...getAffixedStyle(),
        }}
      >
        {children}
      </Component>
    </>
  );
});

Affix.displayName = "Affix";

export { Affix };
export type { AffixProps };
