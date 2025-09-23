import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
// import { twMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["xxs"] }],
    },
  },
});

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}
