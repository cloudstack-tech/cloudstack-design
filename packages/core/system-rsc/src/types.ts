/**
 * Part of this code is taken from @heroui/system ❤️
 */

/**
 * As
 */
export type As<Props = any> = React.ElementType<Props>;

/**
 * DOM element
 */
export interface DOMElement extends Element, HTMLOrSVGElement {}

/**
 * Data attributes
 */
type DataAttributes = {
  [dataAttr: string]: any;
};

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

/**
 * DOM attributes
 */
export type DOMAttributes<T = DOMElement> = React.AriaAttributes &
  React.DOMAttributes<T> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

/**
 * Merge two types
 */
export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;

/**
 * HTML CloudStack Design props
 */
export type HTMLCloudStackDesignProps<
  T extends As = "div",
  OmitKeys extends keyof any = never,
> = Omit<
  PropsOf<T>,
  "ref" | "color" | "slot" | "size" | "defaultChecked" | "defaultValue" | OmitKeys
> & {
  as?: As;
};

/**
 * Prop getter
 */
export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;
