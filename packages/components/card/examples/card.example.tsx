import React, {useState} from "react";
import {Card} from "../src";

export default function CardExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* 基础用法 */}
      <section>
        <h2 className="text-lg font-bold mb-4">基础用法</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>简单卡片内容</Card>
          <Card title="带标题的卡片">这是一个带标题的卡片</Card>
        </div>
      </section>

      {/* 不同变体 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同变体</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card variant="cube" title="Cube 变体">
            带边框和阴影的标准卡片
          </Card>
          <Card variant="flat" title="Flat 变体">
            扁平化背景色卡片
          </Card>
          <Card variant="bordered" title="Bordered 变体">
            仅边框无阴影卡片
          </Card>
          <Card variant="shadow" title="Shadow 变体">
            无边框带阴影卡片
          </Card>
        </div>
      </section>

      {/* 可悬停 */}
      <section>
        <h2 className="text-lg font-bold mb-4">可悬停效果</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card title="可悬停" hoverable={true}>
            鼠标悬停时会显示阴影效果
          </Card>
          <Card title="不可悬停" hoverable={false}>
            鼠标悬停时没有阴影效果
          </Card>
        </div>
      </section>

      {/* 可折叠 */}
      <section>
        <h2 className="text-lg font-bold mb-4">可折叠卡片</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card
            title="可折叠卡片"
            collapsible
            onCollapseChange={(collapsed) => console.log("折叠状态:", collapsed)}
          >
            <div className="space-y-2">
              <p>点击标题区域可以折叠/展开内容</p>
              <p>这对于需要节省空间的场景非常有用</p>
            </div>
          </Card>

          <Card title="默认折叠" collapsible defaultCollapsed>
            这个卡片默认是折叠状态
          </Card>
        </div>
      </section>

      {/* 自定义样式 */}
      <section>
        <h2 className="text-lg font-bold mb-4">自定义样式</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card
            title="自定义边框"
            classNames={{
              base: "border-2 border-blue-500",
            }}
          >
            自定义边框颜色的卡片
          </Card>

          <Card
            title="自定义标题"
            classNames={{
              title: "text-lg font-bold text-purple-600",
            }}
          >
            自定义标题样式的卡片
          </Card>

          <Card
            title="渐变背景"
            classNames={{
              header: "bg-gradient-to-r from-blue-500 to-purple-500",
              title: "text-white",
              body: "bg-gray-50",
            }}
          >
            完全自定义的卡片样式
          </Card>
        </div>
      </section>

      {/* 用户信息卡片 */}
      <section>
        <h2 className="text-lg font-bold mb-4">用户信息卡片</h2>
        <Card title="用户详情" variant="shadow" className="max-w-md">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                张三
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">张三</h3>
                <p className="text-sm text-gray-600">前端开发工程师</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">邮箱：</span>
                <span className="text-gray-900">zhangsan@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">电话：</span>
                <span className="text-gray-900">+86 138 0000 0000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">部门：</span>
                <span className="text-gray-900">技术部</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 统计卡片 */}
      <section>
        <h2 className="text-lg font-bold mb-4">统计卡片</h2>
        <div className="grid grid-cols-3 gap-4">
          <Card variant="flat" hoverable>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <div className="text-sm text-gray-600">总用户数</div>
            </div>
          </Card>

          <Card variant="flat" hoverable>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl font-bold text-green-600">856</div>
              <div className="text-sm text-gray-600">活跃用户</div>
            </div>
          </Card>

          <Card variant="flat" hoverable>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl font-bold text-purple-600">45</div>
              <div className="text-sm text-gray-600">新增用户</div>
            </div>
          </Card>
        </div>
      </section>

      {/* 内容列表卡片 */}
      <section>
        <h2 className="text-lg font-bold mb-4">内容列表卡片</h2>
        <Card title="待办事项" collapsible>
          <div className="space-y-3">
            {["完成项目文档", "代码审查", "修复 Bug #123", "更新依赖包"].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <input type="checkbox" className="w-4 h-4" />
                <span className="flex-1">{item}</span>
                <span className="text-xs text-gray-500">今天</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 嵌套卡片 */}
      <section>
        <h2 className="text-lg font-bold mb-4">嵌套卡片</h2>
        <Card title="项目概览" variant="shadow">
          <div className="space-y-4">
            <p className="text-gray-700">这是一个包含多个子卡片的复杂布局示例</p>

            <div className="grid grid-cols-2 gap-3">
              <Card title="前端开发" variant="bordered">
                <ul className="space-y-1 text-sm">
                  <li>✓ 完成组件开发</li>
                  <li>✓ 编写单元测试</li>
                  <li>⏳ 集成测试</li>
                </ul>
              </Card>

              <Card title="后端开发" variant="bordered">
                <ul className="space-y-1 text-sm">
                  <li>✓ API 开发</li>
                  <li>✓ 数据库设计</li>
                  <li>✓ 性能优化</li>
                </ul>
              </Card>
            </div>
          </div>
        </Card>
      </section>

      {/* 受控折叠 */}
      <section>
        <h2 className="text-lg font-bold mb-4">受控折叠状态</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setIsCollapsed(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              展开
            </button>
            <button
              onClick={() => setIsCollapsed(true)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              折叠
            </button>
          </div>

          <Card
            title="受控卡片"
            collapsible
            defaultCollapsed={isCollapsed}
            onCollapseChange={setIsCollapsed}
          >
            <p>这是一个受外部状态控制的可折叠卡片</p>
            <p className="text-sm text-gray-600 mt-2">当前状态: {isCollapsed ? "折叠" : "展开"}</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
