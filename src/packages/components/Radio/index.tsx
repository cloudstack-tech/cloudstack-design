export * from "./radio";
export * from "./radio-group";
export * from "./type";

// 创建复合组件导出
import { Radio } from "./radio";
import { RadioGroup } from "./radio-group";

const RadioComponent = Radio as typeof Radio & {
  Group: typeof RadioGroup;
};

RadioComponent.Group = RadioGroup;

export { RadioComponent as RadioWithGroup };
export default RadioComponent;
