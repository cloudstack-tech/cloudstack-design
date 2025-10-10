import type {TV} from "tailwind-variants";

import {tv as tvBase} from "tailwind-variants";
import {twMergeConfig} from "./tw-merge-config";

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
      },
    },
  });
