import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Timeline from "./timeline";

const meta = {
  title: "Display 展示/Timeline 时间线",
  component: Timeline,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["left", "right", "alternate"],
      description: "时间线模式",
    },
    reverse: {
      control: { type: "boolean" },
      description: "是否反向显示",
    },
    showLabel: {
      control: { type: "boolean" },
      description: "是否显示时间标签",
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    mode: "left",
    reverse: false,
  },
  render: (args) => (
    <Timeline {...args}>
      <Timeline.Item
        title="创建项目"
        description="项目已成功创建，开始进行初始化配置"
        label="2023-12-01"
        status="finish"
      />
      <Timeline.Item
        title="开发阶段"
        description="正在进行功能开发和代码编写"
        label="2023-12-02"
        status="process"
      />
      <Timeline.Item
        title="测试阶段"
        description="等待进行单元测试和集成测试"
        label="2023-12-03"
        status="pending"
      />
    </Timeline>
  ),
};

export const WithDifferentStatus: Story = {
  name: "不同状态",
  render: () => (
    <Timeline>
      <Timeline.Item
        title="完成状态"
        description="任务已完成"
        status="finish"
        label="2023-12-01 10:00"
      />
      <Timeline.Item
        title="进行中状态"
        description="任务正在进行中"
        status="process"
        label="2023-12-01 11:00"
      />
      <Timeline.Item
        title="等待状态"
        description="任务等待处理"
        status="pending"
        label="2023-12-01 12:00"
      />
      <Timeline.Item
        title="成功状态"
        description="任务执行成功"
        status="success"
        label="2023-12-01 13:00"
      />
      <Timeline.Item
        title="错误状态"
        description="任务执行出现错误"
        status="error"
        label="2023-12-01 14:00"
      />
    </Timeline>
  ),
};

export const RightMode: Story = {
  name: "右侧模式",
  render: () => (
    <Timeline mode="right">
      <Timeline.Item
        title="第一步"
        description="完成需求分析和设计文档"
        label="第1天"
        status="finish"
      />
      <Timeline.Item
        title="第二步"
        description="开始编码实现功能"
        label="第2天"
        status="process"
      />
      <Timeline.Item
        title="第三步"
        description="进行测试和优化"
        label="第3天"
        status="pending"
      />
    </Timeline>
  ),
};

export const AlternateMode: Story = {
  name: "交替模式",
  render: () => (
    <Timeline mode="alternate">
      <Timeline.Item
        title="项目启动"
        description="召开项目启动会议，确定项目目标和时间线"
        label="2023年12月1日"
        status="finish"
      />
      <Timeline.Item
        title="需求分析"
        description="收集和分析用户需求，制定产品规格说明书"
        label="2023年12月5日"
        status="finish"
      />
      <Timeline.Item
        title="设计阶段"
        description="完成UI/UX设计和系统架构设计"
        label="2023年12月10日"
        status="process"
      />
      <Timeline.Item
        title="开发阶段"
        description="进行前端和后端功能开发"
        label="2023年12月20日"
        status="pending"
      />
      <Timeline.Item
        title="测试上线"
        description="完成测试验收后正式上线"
        label="2023年12月30日"
        status="pending"
      />
    </Timeline>
  ),
};

export const WithCustomDot: Story = {
  name: "自定义节点",
  render: () => (
    <Timeline>
      <Timeline.Item
        title="完成任务"
        description="使用自定义图标表示完成状态"
        dot={
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        }
        label="已完成"
      />
      <Timeline.Item
        title="进行中任务"
        description="使用自定义图标表示进行中状态"
        dot={
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        }
        label="进行中"
      />
      <Timeline.Item
        title="待处理任务"
        description="使用自定义颜色"
        color="#ff6b6b"
        label="待处理"
      />
    </Timeline>
  ),
};

export const Reverse: Story = {
  name: "反向显示",
  render: () => (
    <Timeline reverse>
      <Timeline.Item
        title="最新更新"
        description="这是最新的时间线项目"
        label="刚刚"
        status="success"
      />
      <Timeline.Item
        title="之前更新"
        description="这是之前的时间线项目"
        label="1小时前"
        status="finish"
      />
      <Timeline.Item
        title="早期更新"
        description="这是早期的时间线项目"
        label="2小时前"
        status="finish"
      />
    </Timeline>
  ),
};

export const OnlyTitle: Story = {
  name: "仅标题",
  render: () => (
    <Timeline>
      <Timeline.Item title="简单时间线项目 1" status="finish" />
      <Timeline.Item title="简单时间线项目 2" status="process" />
      <Timeline.Item title="简单时间线项目 3" status="pending" />
    </Timeline>
  ),
};

export const Complex: Story = {
  name: "复杂内容",
  render: () => (
    <Timeline mode="left">
      <Timeline.Item title="版本 1.0.0 发布" label="2023-12-01" status="finish">
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-2">发布内容：</p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>新增用户管理模块</li>
            <li>优化页面加载性能</li>
            <li>修复已知的 15 个 bug</li>
          </ul>
        </div>
      </Timeline.Item>
      <Timeline.Item
        title="版本 1.1.0 开发中"
        label="2023-12-15"
        status="process"
      >
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-2">开发进度：</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">75% 完成</p>
        </div>
      </Timeline.Item>
      <Timeline.Item
        title="版本 2.0.0 规划"
        label="2024-01-01"
        status="pending"
      >
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            计划重构整个系统架构，提升用户体验。
          </p>
        </div>
      </Timeline.Item>
    </Timeline>
  ),
};
