import _Breadcrumb from "./breadcrumb";
import BreadcrumbItem from "./breadcrumb-item";
import BreadcrumbSeparator from "./breadcrumb-separator";

// export { default as Breadcrumb } from "./breadcrumb";
// export { default as BreadcrumbItem } from "./breadcrumb-item";
// export { default as BreadcrumbSeparator } from "./breadcrumb-separator";

export const Breadcrumb = _Breadcrumb as typeof _Breadcrumb & {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadcrumbSeparator;
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;
