import { useState } from "react";
import { Tabs } from "@/packages/components";
import Card from "@/packages/components/Card";

export default function ExampleTabCard() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <Card>
      <Tabs value={activeTab} onChange={setActiveTab} className="min-w-72">
        <Tabs.Item key="Tab 1">Tab 1</Tabs.Item>
        <Tabs.Item key="Tab 2">Tab 2</Tabs.Item>
        <Tabs.Item key="Tab 3">Tab 3</Tabs.Item>
      </Tabs>

      {activeTab === "Tab 1" && <div className="pt-4 px-4">Tab 1 Content</div>}
      {activeTab === "Tab 2" && <div className="pt-4 px-4">Tab 2 Content</div>}
      {activeTab === "Tab 3" && <div className="pt-4 px-4">Tab 3 Content</div>}
    </Card>
  );
}
