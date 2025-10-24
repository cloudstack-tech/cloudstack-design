/**
 * Skeleton 骨架屏组件示例
 *
 * 本文件展示了 Skeleton 组件的基本用法和常见场景
 */

import React from "react";
import {Skeleton} from "@cloudstack-design/skeleton";

/**
 * 基础示例：默认骨架屏
 * 使用默认的脉冲动画和矩形形状
 */
export const BasicExample = () => {
  return (
    <div className="space-y-4">
      <Skeleton />
      <Skeleton className="w-3/4" />
      <Skeleton className="w-1/2" />
    </div>
  );
};

/**
 * 文本行骨架屏示例
 * 适合用于模拟段落文本的加载状态
 */
export const TextLinesExample = () => {
  return (
    <div className="space-y-3 w-full max-w-md">
      <Skeleton shape="text" size="lg" />
      <Skeleton shape="text" size="md" className="w-4/5" />
      <Skeleton shape="text" size="md" className="w-3/4" />
      <Skeleton shape="text" size="sm" className="w-2/3" />
    </div>
  );
};

/**
 * 圆形骨架屏示例
 * 适合用于模拟头像的加载状态
 */
export const CircleExample = () => {
  return (
    <div className="flex gap-4 items-center">
      <Skeleton shape="circle" size="sm" />
      <Skeleton shape="circle" size="md" />
      <Skeleton shape="circle" size="lg" />
      <Skeleton shape="circle" size="xl" />
    </div>
  );
};

/**
 * 波浪动画示例
 * 使用波浪扫光效果替代脉冲动画
 */
export const WaveAnimationExample = () => {
  return (
    <div className="space-y-3 w-full max-w-md">
      <Skeleton variant="wave" shape="rect" size="md" />
      <Skeleton variant="wave" shape="text" size="lg" />
      <Skeleton variant="wave" shape="text" size="md" className="w-4/5" />
    </div>
  );
};

/**
 * 卡片骨架屏示例
 * 模拟社交媒体卡片的加载状态
 */
export const CardSkeletonExample = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 max-w-sm">
      {/* 头部：头像 + 用户信息 */}
      <div className="flex items-center space-x-3 mb-4">
        <Skeleton shape="circle" size="lg" />
        <div className="flex-1 space-y-2">
          <Skeleton shape="text" size="md" className="w-1/2" />
          <Skeleton shape="text" size="sm" className="w-1/3" />
        </div>
      </div>
      {/* 图片区域 */}
      <Skeleton shape="rect" size="lg" className="mb-3" />
      {/* 文本内容 */}
      <div className="space-y-2">
        <Skeleton shape="text" size="md" />
        <Skeleton shape="text" size="md" className="w-5/6" />
        <Skeleton shape="text" size="sm" className="w-4/6" />
      </div>
    </div>
  );
};

/**
 * 列表骨架屏示例
 * 模拟用户列表的加载状态
 */
export const ListSkeletonExample = () => {
  return (
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
  );
};

/**
 * 加载状态切换示例
 * 演示骨架屏和实际内容的切换效果
 */
export const LoadingStateExample = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // 模拟数据加载，3秒后显示实际内容
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-sm">
      {/* 使用 isLoaded 属性控制骨架屏的显示/隐藏 */}
      {!isLoaded ? (
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
      ) : (
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
      )}

      {/* 重置按钮 */}
      {isLoaded && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsLoaded(false)}
        >
          重新加载
        </button>
      )}
    </div>
  );
};

export default BasicExample;
