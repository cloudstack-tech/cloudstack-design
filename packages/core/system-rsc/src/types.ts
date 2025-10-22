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

/**
 * Omit common props
 *
 * @description Omit common props from the target props
 * @example
 * const props = { transition: "all 0.3s ease", as: "div", color: "red", size: "md" };
 * const omitted = OmitCommonProps<typeof props, "size">;
 * console.log(omitted); // { transition: "all 0.3s ease", as: "div", color: "red" }
 */
export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  "transition" | "as" | "color" | OmitAdditionalProps
>;

/**
 * Right join props
 *
 * @description Right join props from the source props and the override props
 * @example
 * const sourceProps = { transition: "all 0.3s ease", as: "div", color: "red", size: "md" };
 * const overrideProps = { size: "lg" };
 * const joined = RightJoinProps<typeof sourceProps, typeof overrideProps>;
 * console.log(joined); // { transition: "all 0.3s ease", as: "div", color: "red", size: "lg" }
 */
export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

/**
 * Merge with as
 */
export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As,
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
  as?: AsComponent;
};

/**
 * Internal forward ref render function
 */
export type ForwardRefRenderFunction<
  Component extends As,
  Props extends object = {},
  OmitKeys extends keyof any = never,
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >,
  ): React.ReactElement | null;
  readonly $$typeof: symbol;
  defaultProps?: Partial<Props> | undefined;
  // hint: propTypes is deprecated in React 19+, using TypeScript instead
  // propTypes?: React.WeakValidationMap<Props> | undefined;
  displayName?: string | undefined;
};
