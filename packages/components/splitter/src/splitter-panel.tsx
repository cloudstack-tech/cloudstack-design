import {forwardRef} from "@cloudstack-design/system";
import {HTMLCloudStackDesignProps} from "@cloudstack-design/system";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {CSSProperties} from "react";

export interface SplitterPanelProps extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * 最小尺寸（像素或百分比）
   */
  minSize?: number | string;
  /**
   * 最大尺寸（像素或百分比）
   */
  maxSize?: number | string;
  /**
   * 初始尺寸（百分比）
   */
  defaultSize?: number;
  /**
   * 是否可折叠
   * @default false
   */
  collapsible?: boolean;
  /**
   * 折叠到的尺寸（百分比），默认为 0
   * @default 0
   */
  collapsedSize?: number;
  /**
   * 是否禁用调整大小
   * @default false
   */
  resizable?: boolean;
}

/**
 * SplitterPanel 组件
 *
 * Splitter 组件的子面板。
 * 每个面板可以设置最小/最大尺寸、初始尺寸等。
 *
 * @example
 * ```tsx
 * <Splitter>
 *   <SplitterPanel minSize={200} defaultSize={30}>
 *     Left Panel
 *   </SplitterPanel>
 *   <SplitterPanel>
 *     Right Panel
 *   </SplitterPanel>
 * </Splitter>
 * ```
 */
const SplitterPanel = forwardRef<"div", SplitterPanelProps>((props, ref) => {
  const {
    as,
    children,
    minSize,
    maxSize,
    defaultSize,
    collapsible,
    className,
    style,
    ...otherProps
  } = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  // 构建面板样式
  const panelStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    overflow: "auto",
    ...style,
  };

  return (
    <Component ref={domRef} className={className} style={panelStyle} {...otherProps}>
      {children}
    </Component>
  );
});

SplitterPanel.displayName = "CloudStackDesign.SplitterPanel";

export default SplitterPanel;
