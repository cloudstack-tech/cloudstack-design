import {HTMLCloudStackDesignProps} from "@cloudstack-design/system";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {
  useMemo,
  useCallback,
  useState,
  useRef,
  useEffect,
  ReactNode,
  Children,
  isValidElement,
  CSSProperties,
  ReactElement,
} from "react";
import {SplitterPanelProps} from "./splitter-panel";

/**
 * Splitter 方向类型
 */
export type SplitterDirection = "horizontal" | "vertical";

/**
 * 调整大小模式
 * - "live": 实时更新面板大小（默认）
 * - "delayed": 延迟更新，拖拽时显示预览线，松手时才更新面板大小
 */
export type ResizeMode = "live" | "delayed";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * 分割方向
   * @default "horizontal"
   */
  direction?: SplitterDirection;
  /**
   * 分割条大小（像素）
   * @default 4
   */
  gutterSize?: number;
  /**
   * 分割条自定义渲染函数
   */
  gutterRender?: (index: number, direction: SplitterDirection) => ReactNode;
  /**
   * 面板尺寸变化时的回调（拖拽结束时）
   */
  onResizeEnd?: (sizes: number[]) => void;
  /**
   * 面板尺寸变化时的实时回调
   */
  onResize?: (sizes: number[]) => void;
  /**
   * 调整大小模式
   * @default "live"
   */
  resizeMode?: ResizeMode;
  /**
   * 受控模式：面板尺寸数组（百分比）
   * 当提供此属性时，组件将处于受控模式
   */
  sizes?: number[];
}

export type UseSplitterProps = Props;

/**
 * 面板配置信息
 */
interface PanelConfig {
  minSize?: number | string;
  maxSize?: number | string;
  defaultSize?: number;
  collapsible?: boolean;
  collapsedSize?: number;
  resizable?: boolean;
}

/**
 * 从子元素中提取面板配置
 */
function extractPanelConfigs(children: ReactNode): PanelConfig[] {
  const configs: PanelConfig[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement<SplitterPanelProps>(child)) {
      configs.push({
        minSize: child.props.minSize,
        maxSize: child.props.maxSize,
        defaultSize: child.props.defaultSize,
        collapsible: child.props.collapsible ?? false,
        collapsedSize: child.props.collapsedSize ?? 0,
        resizable: child.props.resizable ?? true,
      });
    } else {
      // 对于非 SplitterPanel 的子元素，使用默认配置
      configs.push({
        collapsible: false,
        collapsedSize: 0,
        resizable: true,
      });
    }
  });

  return configs;
}

/**
 * useSplitter Hook
 *
 * 实现可拖拽调整的分割面板布局。
 *
 * 主要特点：
 * 1. 支持水平和垂直方向
 * 2. 支持拖拽调整面板大小
 * 3. 支持最小/最大尺寸限制
 * 4. 支持可折叠面板
 * 5. 平滑的拖拽体验
 */
export function useSplitter(originalProps: UseSplitterProps) {
  const {
    ref,
    as,
    className,
    children,
    direction = "horizontal",
    gutterSize = 4,
    gutterRender,
    onResizeEnd,
    onResize,
    resizeMode = "live",
    sizes: controlledSizes,
    style,
    ...otherProps
  } = originalProps;

  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const containerRef = useRef<HTMLDivElement>(null);

  // 判断是否为受控模式
  const isControlled = controlledSizes !== undefined;

  // 存储拖拽状态
  const [isDragging, setIsDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState(-1);

  // 存储面板尺寸（百分比）- 非受控模式使用
  const [internalPanelSizes, setInternalPanelSizes] = useState<number[]>([]);

  // 实际使用的面板尺寸（受控或非受控）
  const panelSizes = isControlled ? controlledSizes : internalPanelSizes;

  // 延迟模式下的临时尺寸（用于预览）
  const [tempPanelSizes, setTempPanelSizes] = useState<number[] | null>(null);

  // 折叠状态（每个面板是否折叠）
  const [collapsedPanels, setCollapsedPanels] = useState<boolean[]>([]);

  // 记录面板折叠前的尺寸，用于展开时恢复
  const panelSizesBeforeCollapse = useRef<Map<number, number>>(new Map());

  // 过滤有效的子元素
  const childrenArray = useMemo(
    () =>
      Children.toArray(children).filter(
        (child) => isValidElement(child) || typeof child === "string" || typeof child === "number",
      ),
    [children],
  );

  const panelCount = childrenArray.length;

  // 提取面板配置
  const panelConfigs = useMemo(() => extractPanelConfigs(children), [children]);

  // 初始化面板尺寸和折叠状态（仅非受控模式）
  useMemo(() => {
    if (!isControlled && internalPanelSizes.length !== panelCount && panelCount > 0) {
      // 根据 defaultSize 计算初始尺寸
      const sizes: number[] = [];
      let totalAssigned = 0;
      let unassignedCount = 0;

      // 第一遍：分配有 defaultSize 的面板
      panelConfigs.forEach((config) => {
        if (config.defaultSize !== undefined) {
          sizes.push(config.defaultSize);
          totalAssigned += config.defaultSize;
        } else {
          sizes.push(0);
          unassignedCount++;
        }
      });

      // 第二遍：为没有指定 defaultSize 的面板分配剩余空间
      if (unassignedCount > 0) {
        const remainingSize = Math.max(0, 100 - totalAssigned);
        const sizePerPanel = remainingSize / unassignedCount;

        for (let i = 0; i < sizes.length; i++) {
          if (sizes[i] === 0) {
            sizes[i] = sizePerPanel;
          }
        }
      }

      // 如果总和不是 100%，进行归一化
      const total = sizes.reduce((sum, size) => sum + size, 0);

      if (total !== 100 && total > 0) {
        const normalized = sizes.map((size) => (size / total) * 100);

        setInternalPanelSizes(normalized);
      } else {
        setInternalPanelSizes(sizes);
      }

      // 初始化折叠状态（所有面板默认展开）
      setCollapsedPanels(new Array(panelCount).fill(false));
    }
  }, [isControlled, panelCount, internalPanelSizes.length, panelConfigs]);

  // 更新面板尺寸的统一函数
  const updatePanelSizes = useCallback(
    (newSizes: number[]) => {
      if (isControlled) {
        // 受控模式：通过回调通知父组件
        onResize?.(newSizes);
      } else {
        // 非受控模式：更新内部状态
        setInternalPanelSizes(newSizes);
        onResize?.(newSizes);
      }
    },
    [isControlled, onResize],
  );

  // 切换面板折叠状态
  const togglePanelCollapse = useCallback(
    (panelIndex: number) => {
      const config = panelConfigs[panelIndex];

      if (!config || !config.collapsible) return;

      const isCollapsed = collapsedPanels[panelIndex];

      if (isCollapsed) {
        // 展开：恢复到折叠前的尺寸
        const previousSize = panelSizesBeforeCollapse.current.get(panelIndex);

        if (previousSize !== undefined) {
          const newSizes = [...panelSizes];
          const collapsedSize = config.collapsedSize || 0;
          const sizeIncrease = previousSize - collapsedSize;

          // 从其他面板中减去增加的尺寸
          const otherPanelsCount = panelCount - 1;
          const sizeDecreasePerPanel = sizeIncrease / otherPanelsCount;

          for (let i = 0; i < newSizes.length; i++) {
            if (i === panelIndex) {
              newSizes[i] = previousSize;
            } else {
              newSizes[i] = Math.max(10, newSizes[i] - sizeDecreasePerPanel);
            }
          }

          // 归一化
          const total = newSizes.reduce((sum, size) => sum + size, 0);
          const normalized = newSizes.map((size) => (size / total) * 100);

          updatePanelSizes(normalized);
          panelSizesBeforeCollapse.current.delete(panelIndex);
        }
      } else {
        // 折叠：保存当前尺寸，然后缩小到 collapsedSize
        panelSizesBeforeCollapse.current.set(panelIndex, panelSizes[panelIndex]);

        const newSizes = [...panelSizes];
        const collapsedSize = config.collapsedSize || 0;
        const sizeDecrease = newSizes[panelIndex] - collapsedSize;

        // 将减少的尺寸分配给其他面板
        const otherPanelsCount = panelCount - 1;
        const sizeIncreasePerPanel = sizeDecrease / otherPanelsCount;

        for (let i = 0; i < newSizes.length; i++) {
          if (i === panelIndex) {
            newSizes[i] = collapsedSize;
          } else {
            newSizes[i] += sizeIncreasePerPanel;
          }
        }

        updatePanelSizes(newSizes);
      }

      // 更新折叠状态
      const newCollapsedPanels = [...collapsedPanels];

      newCollapsedPanels[panelIndex] = !isCollapsed;
      setCollapsedPanels(newCollapsedPanels);
    },
    [collapsedPanels, panelSizes, panelConfigs, panelCount, updatePanelSizes],
  );

  // 处理拖拽开始
  const handleDragStart = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      // 检查相邻的两个面板是否都允许调整大小
      const currentPanelResizable = panelConfigs[index]?.resizable ?? true;
      const nextPanelResizable = panelConfigs[index + 1]?.resizable ?? true;

      if (!currentPanelResizable || !nextPanelResizable) {
        return; // 如果任一面板禁用了调整大小，则不允许拖拽
      }

      e.preventDefault();
      setIsDragging(true);
      setDragIndex(index);
    },
    [panelConfigs],
  );

  // 处理拖拽移动
  const handleDragMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || dragIndex === -1 || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // 计算鼠标位置的百分比
      let percentage: number;

      if (direction === "horizontal") {
        const x = e.clientX - rect.left;

        percentage = (x / rect.width) * 100;
      } else {
        const y = e.clientY - rect.top;

        percentage = (y / rect.height) * 100;
      }

      // 计算当前面板和下一个面板的累计尺寸
      const currentPanelStart = panelSizes.slice(0, dragIndex).reduce((sum, size) => sum + size, 0);
      const nextPanelEnd = panelSizes.slice(0, dragIndex + 2).reduce((sum, size) => sum + size, 0);

      // 获取当前面板和下一个面板的尺寸限制
      const currentConfig = panelConfigs[dragIndex];
      const nextConfig = panelConfigs[dragIndex + 1];

      // 计算最小/最大尺寸（百分比）
      const containerSize = direction === "horizontal" ? rect.width : rect.height;
      const currentMinSize = currentConfig?.minSize
        ? typeof currentConfig.minSize === "number"
          ? (currentConfig.minSize / containerSize) * 100
          : parseFloat(currentConfig.minSize)
        : 10; // 默认最小 10%
      const currentMaxSize = currentConfig?.maxSize
        ? typeof currentConfig.maxSize === "number"
          ? (currentConfig.maxSize / containerSize) * 100
          : parseFloat(currentConfig.maxSize)
        : nextPanelEnd - currentPanelStart - 10; // 默认最大为剩余空间减去下一个面板的最小尺寸

      const nextMinSize = nextConfig?.minSize
        ? typeof nextConfig.minSize === "number"
          ? (nextConfig.minSize / containerSize) * 100
          : parseFloat(nextConfig.minSize)
        : 10;

      // 限制拖拽范围
      const maxCurrentSize = Math.min(
        currentMaxSize,
        nextPanelEnd - currentPanelStart - nextMinSize,
      );
      const newCurrentSize = Math.max(
        currentMinSize,
        Math.min(maxCurrentSize, percentage - currentPanelStart),
      );
      const newNextSize = nextPanelEnd - currentPanelStart - newCurrentSize;

      // 计算新的尺寸数组
      const newSizes = [...panelSizes];

      newSizes[dragIndex] = newCurrentSize;
      newSizes[dragIndex + 1] = newNextSize;

      // 根据 resizeMode 决定是立即更新还是只更新临时预览
      if (resizeMode === "live") {
        // 实时模式：立即更新面板尺寸
        updatePanelSizes(newSizes);
      } else {
        // 延迟模式：只更新临时尺寸用于预览
        setTempPanelSizes(newSizes);
      }
    },
    [isDragging, dragIndex, direction, panelSizes, resizeMode, panelConfigs, updatePanelSizes],
  );

  // 处理拖拽结束
  const handleDragEnd = useCallback(() => {
    if (isDragging) {
      // 延迟模式下，在松手时才真正更新面板尺寸
      if (resizeMode === "delayed" && tempPanelSizes) {
        updatePanelSizes(tempPanelSizes);
        setTempPanelSizes(null);
        onResizeEnd?.(tempPanelSizes);
      } else {
        onResizeEnd?.(panelSizes);
      }

      setIsDragging(false);
      setDragIndex(-1);
    }
  }, [isDragging, panelSizes, tempPanelSizes, resizeMode, onResizeEnd, updatePanelSizes]);

  // 添加和移除事件监听器
  // 修复 bug: 使用 useEffect 而不是 useMemo，确保事件监听器能正确移除
  useEffect(() => {
    if (isDragging) {
      // 防止拖拽时选中文本
      document.body.style.userSelect = "none";
      document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize";

      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);

      return () => {
        // 恢复默认样式
        document.body.style.userSelect = "";
        document.body.style.cursor = "";

        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [isDragging, handleDragMove, handleDragEnd, direction]);

  const styles = className || "";

  // 构建容器样式
  const containerStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      flexDirection: direction === "horizontal" ? ("row" as const) : ("column" as const),
      width: "100%",
      height: "100%",
      overflow: "hidden",
      ...style,
    }),
    [direction, style],
  );

  return {
    Component,
    styles,
    domRef,
    containerRef,
    containerStyle,
    direction,
    gutterSize,
    gutterRender,
    panelSizes,
    tempPanelSizes,
    resizeMode,
    isDragging,
    dragIndex,
    handleDragStart,
    childrenArray,
    panelConfigs,
    collapsedPanels,
    togglePanelCollapse,
    ...otherProps,
  };
}

export type UseSplitterReturn = ReturnType<typeof useSplitter>;
