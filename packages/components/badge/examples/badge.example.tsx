import React from "react";
import {Badge} from "../src";

export default function BadgeExample() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* 基础用法 */}
      <section>
        <h2 className="text-lg font-bold mb-4">基础用法</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="danger">Danger</Badge>
        </div>
      </section>

      {/* 不同变体 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同变体</h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="solid" color="primary">
            Solid
          </Badge>
          <Badge variant="outline" color="primary">
            Outline
          </Badge>
          <Badge variant="flat" color="primary">
            Flat
          </Badge>
          <Badge variant="dot" color="primary" />
        </div>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同尺寸</h2>
        <div className="flex items-center gap-4">
          <Badge size="sm" color="primary">
            Small
          </Badge>
          <Badge size="md" color="primary">
            Medium
          </Badge>
          <Badge size="lg" color="primary">
            Large
          </Badge>
        </div>
      </section>

      {/* 不同圆角 */}
      <section>
        <h2 className="text-lg font-bold mb-4">不同圆角</h2>
        <div className="flex flex-wrap gap-4">
          <Badge radius="none" color="primary">
            None
          </Badge>
          <Badge radius="sm" color="primary">
            Small
          </Badge>
          <Badge radius="md" color="primary">
            Medium
          </Badge>
          <Badge radius="lg" color="primary">
            Large
          </Badge>
          <Badge radius="full" color="primary">
            Full
          </Badge>
        </div>
      </section>

      {/* 数字徽章 */}
      <section>
        <h2 className="text-lg font-bold mb-4">数字徽章</h2>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">消息</button>
            <Badge className="absolute -top-2 -right-2" color="danger" size="sm" radius="full">
              99+
            </Badge>
          </div>

          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">通知</button>
            <Badge className="absolute -top-2 -right-2" color="danger" size="sm" radius="full">
              5
            </Badge>
          </div>

          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">邮件</button>
            <Badge variant="dot" className="absolute top-0 right-0" color="danger" />
          </div>
        </div>
      </section>

      {/* 状态指示器 */}
      <section>
        <h2 className="text-lg font-bold mb-4">状态指示器</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="success" />
            <span>在线</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="warning" />
            <span>离开</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="danger" />
            <span>离线</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="dot" color="default" />
            <span>未知</span>
          </div>
        </div>
      </section>

      {/* 标签组合 */}
      <section>
        <h2 className="text-lg font-bold mb-4">标签组合</h2>
        <div className="flex flex-wrap gap-2">
          <Badge color="primary">React</Badge>
          <Badge color="secondary">TypeScript</Badge>
          <Badge color="success">Tailwind CSS</Badge>
          <Badge color="info">Next.js</Badge>
          <Badge variant="outline" color="default">
            Storybook
          </Badge>
          <Badge variant="flat" color="warning">
            Beta
          </Badge>
        </div>
      </section>

      {/* 禁用状态 */}
      <section>
        <h2 className="text-lg font-bold mb-4">禁用状态</h2>
        <div className="flex flex-wrap gap-4">
          <Badge isDisabled color="primary">
            Disabled
          </Badge>
          <Badge isDisabled variant="outline" color="success">
            Disabled
          </Badge>
          <Badge isDisabled variant="flat" color="warning">
            Disabled
          </Badge>
        </div>
      </section>
    </div>
  );
}
