import React from "react";
import {Tabs, Tab} from "../src";

export default function TabsExample() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">基础示例</h2>
        <Tabs defaultActiveKey="1">
          <Tab key="1" tabKey="1">
            首页
          </Tab>
          <Tab key="2" tabKey="2">
            产品
          </Tab>
          <Tab key="3" tabKey="3">
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">带图标</h2>
        <Tabs defaultActiveKey="home">
          <Tab key="home" tabKey="home" icon={<span>🏠</span>}>
            首页
          </Tab>
          <Tab key="products" tabKey="products" icon={<span>📦</span>}>
            产品
          </Tab>
          <Tab key="about" tabKey="about" icon={<span>ℹ️</span>}>
            关于
          </Tab>
        </Tabs>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同变体</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Underlined</h3>
            <Tabs defaultActiveKey="1" variant="underlined">
              <Tab key="1" tabKey="1">
                Tab 1
              </Tab>
              <Tab key="2" tabKey="2">
                Tab 2
              </Tab>
              <Tab key="3" tabKey="3">
                Tab 3
              </Tab>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm text-gray-600 mb-2">Solid</h3>
            <Tabs defaultActiveKey="1" variant="solid">
              <Tab key="1" tabKey="1">
                Tab 1
              </Tab>
              <Tab key="2" tabKey="2">
                Tab 2
              </Tab>
              <Tab key="3" tabKey="3">
                Tab 3
              </Tab>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm text-gray-600 mb-2">Light</h3>
            <Tabs defaultActiveKey="1" variant="light">
              <Tab key="1" tabKey="1">
                Tab 1
              </Tab>
              <Tab key="2" tabKey="2">
                Tab 2
              </Tab>
              <Tab key="3" tabKey="3">
                Tab 3
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">不同动画效果</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Slide (默认)</h3>
            <Tabs defaultActiveKey="1" animation="slide">
              <Tab key="1" tabKey="1">
                Tab 1
              </Tab>
              <Tab key="2" tabKey="2">
                Tab 2
              </Tab>
              <Tab key="3" tabKey="3">
                Tab 3
              </Tab>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm text-gray-600 mb-2">Flash</h3>
            <Tabs defaultActiveKey="1" animation="flash">
              <Tab key="1" tabKey="1">
                Tab 1
              </Tab>
              <Tab key="2" tabKey="2">
                Tab 2
              </Tab>
              <Tab key="3" tabKey="3">
                Tab 3
              </Tab>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm text-gray-600 mb-2">None</h3>
            <Tabs defaultActiveKey="1" animation="none">
              <Tab key="1" tabKey="1">
                Tab 1
              </Tab>
              <Tab key="2" tabKey="2">
                Tab 2
              </Tab>
              <Tab key="3" tabKey="3">
                Tab 3
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
