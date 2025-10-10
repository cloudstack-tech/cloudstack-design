import type {Ref, RefObject, MutableRefObject} from "react";

import {useImperativeHandle, useLayoutEffect, useRef} from "react";

/**
 * A hook to create a ref that is attached to a DOM element
 * @param ref
 * @returns
 */
export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T | null> | Ref<T | null>,
) {
  const domRef = useRef<T>(null);

  //   @ts-expect-error - we need to cast the type to T
  useImperativeHandle<T>(ref, () => domRef.current);

  return domRef;
}
