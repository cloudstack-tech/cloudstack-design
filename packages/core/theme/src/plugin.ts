import plugin from "tailwindcss/plugin";

const DEFAULT_PREFIX = "cs";

interface CloudstackDesignOptions {
  primary?: string; // 改为可选
}

const twPlugin = () => {
  return plugin.withOptions<CloudstackDesignOptions>((options = {}) => {
    return ({addBase, addUtilities, addVariant, addComponents}) => {
      addBase({});
      addUtilities({});
      addComponents({});
    };
  });
};

export const cloudstackDesign = (): ReturnType<
  typeof plugin.withOptions<CloudstackDesignOptions>
> => {
  return twPlugin();
};
