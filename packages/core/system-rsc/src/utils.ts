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
