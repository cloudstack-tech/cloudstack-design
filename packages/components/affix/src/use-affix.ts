import type {AffixVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {affix} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import React, {useMemo, useState, useEffect, useCallback, useRef, CSSProperties} from "react";

interface Props extends Omit<HTMLCloudStackDesignProps<"div">, "onChange"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  /**
   * 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
   */
  target?: () => Window | HTMLElement | null;
  /**
   * 固定状态改变时触发的回调函数
   */
  onChange?: (affixed: boolean) => void;
  /**
   * z-index 层级
   */
  zIndex?: number;
}

export type UseAffixProps = Props & AffixVariantProps;

interface AffixState {
  affixed: boolean;
  affixedType: "top" | "bottom" | null;
  placeholderSize: {width: number; height: number};
}

// 获取滚动容器
const getTargetElement = (target?: () => Window | HTMLElement | null): Window | HTMLElement => {
  if (!target) {
    return window;
  }
  const targetElement = target();
  return targetElement || window;
};

// 获取元素的偏移信息
const getElementOffset = (element: HTMLElement, target: Window | HTMLElement) => {
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
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      scrollLeft:
        window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
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

export function useAffix(originalProps: UseAffixProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, affix.variantKeys);

  const {
    ref,
    as,
    className,
    children,
    offsetTop,
    offsetBottom,
    target,
    onChange,
    zIndex = 100,
    style,
    ...otherProps
  } = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const [affixState, setAffixState] = useState<AffixState>({
    affixed: false,
    affixedType: null,
    placeholderSize: {width: 0, height: 0},
  });

  // 计算是否需要固定
  const updatePosition = useCallback(() => {
    const affixElement = domRef.current;
    const placeholderElement = placeholderRef.current;

    if (!affixElement || !placeholderElement) return;

    const targetElement = getTargetElement(target);
    const scroll = getScroll(targetElement);
    const targetSize = getTargetSize(targetElement);
    const elementOffset = getElementOffset(placeholderElement, targetElement);

    let newAffixed = false;
    let newAffixedType: "top" | "bottom" | null = null;

    // 计算固定位置
    if (offsetTop !== undefined) {
      // 顶部固定
      if (scroll.scrollTop > elementOffset.top - offsetTop) {
        newAffixed = true;
        newAffixedType = "top";
      }
    }

    if (offsetBottom !== undefined && !newAffixed) {
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
      if (prevState.affixed !== newAffixed || prevState.affixedType !== newAffixedType) {
        const newState: AffixState = {
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
  }, [offsetTop, offsetBottom, target, onChange, domRef]);

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
      window.addEventListener("scroll", handleScroll, {passive: true});
      window.addEventListener("resize", handleResize, {passive: true});
    } else {
      (targetElement as HTMLElement).addEventListener("scroll", handleScroll, {
        passive: true,
      });
      window.addEventListener("resize", handleResize, {passive: true});
    }

    return () => {
      if (targetElement === window) {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      } else {
        (targetElement as HTMLElement).removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [target, updatePosition]);

  // 计算固定时的样式
  const getAffixedStyle = useCallback((): React.CSSProperties => {
    if (!affixState.affixed) return {};

    const baseStyle: CSSProperties = {
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
  }, [
    affixState.affixed,
    affixState.affixedType,
    affixState.placeholderSize,
    zIndex,
    offsetTop,
    offsetBottom,
  ]);

  // 占位元素样式
  const placeholderStyle: CSSProperties = useMemo(
    () => ({
      width: affixState.placeholderSize.width,
      height: affixState.placeholderSize.height,
    }),
    [affixState.placeholderSize],
  );

  const styles = useMemo(
    () =>
      affix({
        ...variantProps,
        affixed: affixState.affixed,
        position: affixState.affixedType || (variantProps as AffixVariantProps).position || "top",
      }),
    [objectToDeps(variantProps), affixState.affixed, affixState.affixedType],
  );

  const contentStyle = useMemo(
    (): React.CSSProperties => ({
      ...style,
      ...getAffixedStyle(),
    }),
    [style, getAffixedStyle],
  );

  return {
    Component,
    styles,
    domRef,
    placeholderRef,
    placeholderStyle,
    contentStyle,
    children,
    ...otherProps,
  };
}

export type UseAffixReturn = ReturnType<typeof useAffix>;
