import plugin from "tailwindcss/plugin";

const DEFAULT_PREFIX = "cs";

interface CloudstackDesignOptions {
  primary?: string; // 改为可选
}

const twPlugin = () => {
  return plugin.withOptions<CloudstackDesignOptions>(
    (options = {}) => {
      return ({addBase, addUtilities, addVariant, addComponents}) => {
        addBase({});
        addUtilities({});
        addComponents({});
      };
    },
    () => {
      return {
        theme: {
          extend: {
            colors: {},
            // 添加自定义动画 keyframes，用于 Skeleton 组件的波浪效果
            keyframes: {
              shimmer: {
                "0%": {transform: "translateX(-100%)"},
                "100%": {transform: "translateX(100%)"},
              },
            },
            // 注册动画到 animation 配置中
            animation: {
              shimmer: "shimmer 2s infinite",
            },
          },
        },
      };
    },
  );
};

export const cloudstackDesign = (): ReturnType<
  typeof plugin.withOptions<CloudstackDesignOptions>
> => {
  return twPlugin();
};
