import React from "react";
import {Meta} from "@storybook/nextjs-vite";
import {skeleton} from "@cloudstack-design/theme";

import {Skeleton, SkeletonProps} from "../src";

export default {
  title: "Components/Data Display 数据展示/Skeleton 骨架屏",
  component: Skeleton,
  argTypes: {
    variant: {
      control: {type: "select"},
      options: ["pulse", "wave", "none"],
      description: "动画变体",
    },
    shape: {
      control: {type: "select"},
      options: ["text", "circle", "rect"],
      description: "形状变体",
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg", "xl"],
      description: "尺寸",
    },
    isLoaded: {
      control: {type: "boolean"},
      description: "是否已加载完成",
    },
    disableAnimation: {
      control: {type: "boolean"},
      description: "是否禁用动画",
    },
  },
} as Meta<typeof Skeleton>;

const defaultProps = {
  ...skeleton.defaultVariants,
};

const Template = (args: SkeletonProps) => <Skeleton {...args} />;

/**
 * 默认骨架屏
 * 使用默认的脉冲动画和矩形形状
 */
export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

/**
 * 文本行骨架屏
 * 适合用于段落文本的占位
 */
export const TextLines = {
  render: () => (
    <div className="space-y-3 w-full max-w-md">
      <Skeleton shape="text" size="lg" />
      <Skeleton shape="text" size="md" className="w-4/5" />
      <Skeleton shape="text" size="md" className="w-3/4" />
      <Skeleton shape="text" size="sm" className="w-2/3" />
    </div>
  ),
};

/**
 * 圆形骨架屏
 * 适合用于头像的占位
 */
export const Circles = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Skeleton shape="circle" size="sm" />
      <Skeleton shape="circle" size="md" />
      <Skeleton shape="circle" size="lg" />
      <Skeleton shape="circle" size="xl" />
    </div>
  ),
};

/**
 * 矩形骨架屏
 * 适合用于卡片、图片等内容的占位
 */
export const Rectangles = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-4xl">
      <Skeleton shape="rect" size="sm" />
      <Skeleton shape="rect" size="md" />
      <Skeleton shape="rect" size="lg" />
    </div>
  ),
};

/**
 * 波浪动画
 * 使用波浪扫光效果替代脉冲动画
 */
export const WaveAnimation = {
  render: () => (
    <div className="space-y-3 w-full max-w-md">
      <Skeleton variant="wave" shape="rect" size="md" />
      <Skeleton variant="wave" shape="text" size="lg" />
      <Skeleton variant="wave" shape="text" size="md" className="w-4/5" />
      <Skeleton variant="wave" shape="text" size="sm" className="w-2/3" />
    </div>
  ),
};

/**
 * 无动画
 * 静态的骨架屏占位符
 */
export const NoAnimation = {
  render: () => (
    <div className="space-y-3 w-full max-w-md">
      <Skeleton variant="none" shape="rect" size="md" />
      <Skeleton variant="none" shape="text" size="lg" />
      <Skeleton variant="none" shape="text" size="md" className="w-4/5" />
    </div>
  ),
};

/**
 * 卡片骨架屏
 * 模拟卡片内容的加载状态
 */
export const CardSkeleton = {
  render: () => (
    <div className="border border-gray-200 rounded-lg p-4 max-w-sm">
      <div className="flex items-center space-x-3 mb-4">
        <Skeleton shape="circle" size="lg" />
        <div className="flex-1 space-y-2">
          <Skeleton shape="text" size="md" className="w-1/2" />
          <Skeleton shape="text" size="sm" className="w-1/3" />
        </div>
      </div>
      <Skeleton shape="rect" size="lg" className="mb-3" />
      <div className="space-y-2">
        <Skeleton shape="text" size="md" />
        <Skeleton shape="text" size="md" className="w-5/6" />
        <Skeleton shape="text" size="sm" className="w-4/6" />
      </div>
    </div>
  ),
};

/**
 * 列表骨架屏
 * 模拟列表项的加载状态
 */
export const ListSkeleton = {
  render: () => (
    <div className="space-y-4 max-w-md">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="flex items-center space-x-3">
          <Skeleton shape="circle" size="md" />
          <div className="flex-1 space-y-2">
            <Skeleton shape="text" size="md" />
            <Skeleton shape="text" size="sm" className="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * 加载状态切换
 * 演示骨架屏和实际内容的切换
 */
export const LoadingState = {
  render: () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="max-w-sm relative">
        {/* 骨架屏 */}
        <div
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-0 absolute inset-0" : "opacity-100"
          }`}
        >
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Skeleton shape="circle" size="lg" />
              <div className="flex-1 space-y-2">
                <Skeleton shape="text" size="md" className="w-1/2" />
                <Skeleton shape="text" size="sm" className="w-1/3" />
              </div>
            </div>
            <Skeleton shape="rect" size="md" className="mb-3" />
            <div className="space-y-2">
              <Skeleton shape="text" size="md" />
              <Skeleton shape="text" size="sm" className="w-4/6" />
            </div>
          </div>
        </div>

        {/* 实际内容 */}
        <div
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">@johndoe</div>
              </div>
            </div>
            <img
              alt="Content"
              className="w-full h-32 object-cover rounded-lg mb-3"
              src="https://via.placeholder.com/400x200"
            />
            <div className="text-gray-700">
              <p>这是实际加载的内容。骨架屏已经隐藏，现在显示真实数据。</p>
            </div>
          </div>
        </div>

        {/* 重置按钮 */}
        {isLoaded && (
          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
            onClick={() => setIsLoaded(false)}
          >
            重新加载
          </button>
        )}
      </div>
    );
  },
};

/**
 * 表格骨架屏
 * 模拟表格的加载状态
 */
export const TableSkeleton = {
  render: () => (
    <div className="border border-gray-200 rounded-lg overflow-hidden max-w-2xl">
      {/* 表头 */}
      <div className="bg-gray-50 p-3 grid grid-cols-4 gap-4 border-b border-gray-200">
        <Skeleton shape="text" size="sm" />
        <Skeleton shape="text" size="sm" />
        <Skeleton shape="text" size="sm" />
        <Skeleton shape="text" size="sm" />
      </div>
      {/* 表格行 */}
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="p-3 grid grid-cols-4 gap-4 border-b border-gray-200 last:border-b-0"
        >
          <Skeleton shape="text" size="sm" />
          <Skeleton shape="text" size="sm" />
          <Skeleton shape="text" size="sm" />
          <Skeleton shape="text" size="sm" />
        </div>
      ))}
    </div>
  ),
};
