import { default as TabsComponent } from "./tabs";
import { default as TabComponent } from "./tab";

export { default as Tab } from "./tab";

export const Tabs = TabsComponent as typeof TabsComponent & {
  Item: typeof TabComponent;
};

Tabs.Item = TabComponent;

export default Tabs;
