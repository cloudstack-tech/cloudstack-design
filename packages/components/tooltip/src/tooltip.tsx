import {FloatingPortal} from "@floating-ui/react";

import {UseTooltipProps, useTooltip} from "./use-tooltip";

export interface TooltipProps extends UseTooltipProps {}

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const {
    trigger,
    content,
    isOpen,
    setFloating,
    floatingStyles,
    arrowRef,
    showArrow,
    styles,
    className,
    getFloatingProps,
    isDisabled,
  } = useTooltip(props);

  // 如果没有内容或者被禁用，只渲染 trigger
  if (!content || isDisabled) {
    return trigger;
  }

  return (
    <>
      {trigger}
      <FloatingPortal>
        {isOpen && (
          <div
            ref={setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={styles.content({className})}
            data-show={isOpen}
          >
            {content}
            {showArrow && <div ref={arrowRef} className={styles.arrow()} />}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Tooltip.displayName = "CloudStackDesign.Tooltip";

export default Tooltip;
