import type {As, RightJoinProps, PropsOf, ForwardRefRenderFunction} from "./types";
import type * as React from "react";

import {forwardRef as baseForwardRef} from "react";

/**
 * Forward ref
 * @param component - The component to forward ref to.
 * @param props - The props to forward ref to.
 * @param omitKeys - The keys to omit from the props.
 * @returns The forward ref component.
 *
 * @description Forward ref component
 * @example
 * const Component = forwardRef<"div", FlexProps>((props, ref) => {
 *   return <div ref={ref} {...props} />;
 * });
 * console.log(Component); // {$$typeof: Symbol(react.forward_ref), propTypes: undefined, defaultProps: undefined, displayName: "Component"}
 */
export function forwardRef<
  Component extends As,
  Props extends object,
  OmitKeys extends keyof any = never,
>(
  component: React.ForwardRefRenderFunction<
    Component extends React.ComponentType
      ? React.ComponentRef<Component>
      : Component extends keyof React.JSX.IntrinsicElements
      ? React.ComponentRef<Component>
      : HTMLElement,
    React.PropsWithoutRef<
      RightJoinProps<PropsOf<Component>, Props> & {
        as?: As;
      }
    >
  >,
) {
  return baseForwardRef(component) as ForwardRefRenderFunction<Component, Props, OmitKeys>;
}

/**
 * Maps the props to the variant props.
 *
 * @param props - The props to map.
 * @param variantKeys - The variant keys to map.
 * @param removeVariantProps - Whether to remove the variant props.
 * @returns The mapped props and variant props.
 *
 * @example
 * const props = { variant: "primary", size: "md" };
 * const variantKeys = ["variant", "size"];
 * const [omitted, picked] = mapPropsVariants(props, variantKeys);
 * console.log(omitted); // { size: "md" }
 * console.log(picked); // { variant: "primary" }
 */
export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
  props: T,
  variantKeys?: K[],
  removeVariantProps = true,
): readonly [Omit<T, K> | T, Pick<T, K> | {}] => {
  if (!variantKeys) {
    return [props, {}];
  }

  const picked = variantKeys.reduce((acc, key) => {
    // Only include the key in `picked` if it exists in `props`
    if (key in props) {
      return {...acc, [key]: props[key]};
    } else {
      return acc;
    }
  }, {});

  if (removeVariantProps) {
    const omitted = Object.keys(props)
      .filter((key) => !variantKeys.includes(key as K))
      .reduce((acc, key) => ({...acc, [key]: props[key as keyof T]}), {});

    return [omitted, picked] as [Omit<T, K>, Pick<T, K>];
  } else {
    return [props, picked] as [T, Pick<T, K>];
  }
};
