import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { Switch } from "./";

const meta = {
  title: "Data 数据/Switch 开关",
  component: Switch,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "是否选中",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "默认是否选中",
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用",
    },
    loading: {
      control: { type: "boolean" },
      description: "是否加载中",
    },
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
      description: "开关尺寸",
    },
    label: {
      control: { type: "text" },
      description: "标签文本",
    },
    checkedChildren: {
      control: { type: "text" },
      description: "选中时的内容",
    },
    unCheckedChildren: {
      control: { type: "text" },
      description: "未选中时的内容",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const WithLabel: Story = {
  name: "带标签",
  args: {
    label: "启用通知",
    defaultChecked: true,
  },
};

export const Checked: Story = {
  name: "选中状态",
  args: {
    defaultChecked: true,
    label: "已启用",
  },
};

export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch disabled label="禁用未选中" />
      <Switch disabled checked label="禁用已选中" />
    </div>
  ),
};

export const Loading: Story = {
  name: "加载状态",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch loading label="加载中未选中" />
      <Switch loading checked label="加载中已选中" />
    </div>
  ),
};

export const DifferentSizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Switch size="small" defaultChecked />
        <span className="text-sm">小尺寸</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="default" defaultChecked />
        <span className="text-sm">默认尺寸</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="large" defaultChecked />
        <span className="text-sm">大尺寸</span>
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  name: "带内容",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch
        defaultChecked={true}
        checkedChildren="开"
        unCheckedChildren="关"
        label="开关"
      />
      <Switch
        size="large"
        defaultChecked={false}
        checkedChildren="ON"
        unCheckedChildren="OFF"
        label="电源开关"
      />
      <Switch
        defaultChecked={true}
        checkedChildren="✓"
        unCheckedChildren="✕"
        label="确认开关"
      />
    </div>
  ),
};

export const ControlledSwitch: Story = {
  name: "受控模式",
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Switch
          checked={checked}
          onChange={(newChecked) => setChecked(newChecked)}
          label={`开关状态: ${checked ? "开启" : "关闭"}`}
        />
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setChecked(true)}
          >
            开启
          </button>
          <button
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
            onClick={() => setChecked(false)}
          >
            关闭
          </button>
          <button
            className="px-3 py-1 bg-green-500 text-white rounded text-sm"
            onClick={() => setChecked(!checked)}
          >
            切换
          </button>
        </div>
      </div>
    );
  },
};

export const WithChildren: Story = {
  name: "使用子元素作为标签",
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch defaultChecked>
        <span className="font-medium">自定义标签内容</span>
      </Switch>
      <Switch>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">接收邮件通知</span>
          <span className="text-xs text-gray-500">(推荐)</span>
        </div>
      </Switch>
    </div>
  ),
};

export const FormExample: Story = {
  name: "表单示例",
  render: () => {
    const [settings, setSettings] = React.useState({
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      darkMode: false,
      autoSave: true,
    });

    const updateSetting = (key: string, value: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    };

    return (
      <div className="max-w-md space-y-4">
        <h3 className="text-lg font-medium mb-4">通知设置</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">邮件通知</span>
            <Switch
              checked={settings.emailNotifications}
              onChange={(checked) =>
                updateSetting("emailNotifications", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">短信通知</span>
            <Switch
              checked={settings.smsNotifications}
              onChange={(checked) => updateSetting("smsNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">推送通知</span>
            <Switch
              checked={settings.pushNotifications}
              onChange={(checked) =>
                updateSetting("pushNotifications", checked)
              }
            />
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-lg font-medium mb-4">偏好设置</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">深色模式</span>
            <Switch
              checked={settings.darkMode}
              onChange={(checked) => updateSetting("darkMode", checked)}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">自动保存</span>
            <Switch
              checked={settings.autoSave}
              onChange={(checked) => updateSetting("autoSave", checked)}
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-xs">
          <strong>当前设置:</strong>
          <pre className="mt-2 text-xs">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

export const AsyncSwitch: Story = {
  name: "异步切换",
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleChange = async (newChecked: boolean) => {
      setLoading(true);

      // 模拟 API 调用
      setTimeout(() => {
        setChecked(newChecked);
        setLoading(false);
      }, 1500);
    };

    return (
      <div className="space-y-4">
        <Switch
          checked={checked}
          loading={loading}
          onChange={handleChange}
          label={`服务状态: ${checked ? "启用" : "禁用"} ${
            loading ? "(处理中...)" : ""
          }`}
        />
        <p className="text-sm text-gray-600">
          切换开关会模拟异步操作，显示加载状态
        </p>
      </div>
    );
  },
};
