import type {Meta, StoryObj} from "@storybook/nextjs-vite";
import React from "react";

import {Switch} from "../src";

const meta: Meta<typeof Switch> = {
  title: "Components/Data Entry 数据输入/Switch 开关",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    isSelected: {
      control: {type: "boolean"},
      description: "是否选中（受控模式）",
    },
    defaultSelected: {
      control: {type: "boolean"},
      description: "默认是否选中（非受控模式）",
    },
    isDisabled: {
      control: {type: "boolean"},
      description: "是否禁用",
    },
    isLoading: {
      control: {type: "boolean"},
      description: "是否加载中",
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
      description: "开关尺寸",
    },
    label: {
      control: {type: "text"},
      description: "标签文本",
    },
    checkedChildren: {
      control: {type: "text"},
      description: "选中时显示的内容",
    },
    unCheckedChildren: {
      control: {type: "text"},
      description: "未选中时显示的内容",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基础用法
 *
 * 最简单的用法，点击开关切换状态。
 */
export const Default: Story = {
  args: {
    defaultSelected: false,
  },
};

/**
 * 带标签
 *
 * 可以在开关旁边显示文本标签，说明开关的用途。
 */
export const WithLabel: Story = {
  args: {
    label: "接收通知",
    defaultSelected: true,
  },
};

/**
 * 选中状态
 *
 * 展示开关的选中和未选中状态。
 */
export const Checked: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch defaultSelected={false} label="未选中" />
      <Switch defaultSelected={true} label="已选中" />
    </div>
  ),
};

/**
 * 禁用状态
 *
 * 禁用状态下，开关无法点击，显示为半透明。
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch isDisabled label="禁用未选中" />
      <Switch isDisabled isSelected label="禁用已选中" />
    </div>
  ),
};

/**
 * Loading 状态
 *
 * 加载状态下，开关显示转圈动画，无法点击。
 * 通常用于异步操作时显示处理中状态。
 */
export const Loading: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch isLoading label="加载中未选中" />
      <Switch isLoading isSelected label="加载中已选中" />
    </div>
  ),
};

/**
 * 不同尺寸
 *
 * 提供三种尺寸：小、中、大。
 */
export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Switch size="sm" defaultSelected />
        <span className="text-sm">小尺寸 (sm)</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="md" defaultSelected />
        <span className="text-sm">中尺寸 (md) - 默认</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="lg" defaultSelected />
        <span className="text-sm">大尺寸 (lg)</span>
      </div>
    </div>
  ),
};

/**
 * 带内容
 *
 * 可以在轨道内显示文字或图标，直观展示当前状态。
 */
export const WithContent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch defaultSelected={true} checkedChildren="开" unCheckedChildren="关" label="开关" />
      <Switch
        size="lg"
        defaultSelected={false}
        checkedChildren="ON"
        unCheckedChildren="OFF"
        label="电源开关"
      />
      <Switch defaultSelected={true} checkedChildren="✓" unCheckedChildren="✕" label="确认开关" />
      <Switch
        size="lg"
        defaultSelected={false}
        checkedChildren="是"
        unCheckedChildren="否"
        label="同意条款"
      />
    </div>
  ),
};

/**
 * 受控模式
 *
 * 使用 `isSelected` 和 `onChange` 实现完全受控的开关。
 * 开关的状态由父组件控制。
 */
export const ControlledSwitch: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="flex flex-col gap-4">
        <Switch
          isSelected={checked}
          onChange={(newChecked) => setChecked(newChecked)}
          label={`开关状态: ${checked ? "开启" : "关闭"}`}
        />
        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 bg-primary text-white rounded text-sm hover:bg-primary-600"
            onClick={() => setChecked(true)}
          >
            开启
          </button>
          <button
            className="px-3 py-1.5 bg-default-300 text-default-900 rounded text-sm hover:bg-default-400"
            onClick={() => setChecked(false)}
          >
            关闭
          </button>
          <button
            className="px-3 py-1.5 bg-success text-white rounded text-sm hover:bg-success-600"
            onClick={() => setChecked(!checked)}
          >
            切换
          </button>
        </div>
      </div>
    );
  },
};

/**
 * 使用子元素作为标签
 *
 * 可以传入 children 作为标签，支持更复杂的内容。
 */
export const WithChildren: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch defaultSelected>
        <span className="font-medium">自定义标签内容</span>
      </Switch>
      <Switch>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">接收邮件通知</span>
          <span className="text-xs text-default-500">(推荐)</span>
        </div>
      </Switch>
      <Switch defaultSelected>
        <div className="flex flex-col">
          <span className="font-medium text-sm">自动保存</span>
          <span className="text-xs text-default-500">编辑时自动保存草稿</span>
        </div>
      </Switch>
    </div>
  ),
};

/**
 * 表单示例
 *
 * 在实际表单中使用 Switch 组件的示例。
 * 展示如何管理多个开关的状态。
 */
export const FormExample: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      darkMode: false,
      autoSave: true,
      soundEffects: false,
    });

    const updateSetting = (key: string, value: boolean) => {
      setSettings((prev) => ({...prev, [key]: value}));
    };

    return (
      <div className="max-w-md space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">通知设置</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">邮件通知</span>
              <Switch
                isSelected={settings.emailNotifications}
                onChange={(checked) => updateSetting("emailNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">短信通知</span>
              <Switch
                isSelected={settings.smsNotifications}
                onChange={(checked) => updateSetting("smsNotifications", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">推送通知</span>
              <Switch
                isSelected={settings.pushNotifications}
                onChange={(checked) => updateSetting("pushNotifications", checked)}
              />
            </div>
          </div>
        </div>

        <hr className="border-default-200" />

        <div>
          <h3 className="text-lg font-medium mb-4">偏好设置</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium">深色模式</span>
                <span className="text-xs text-default-500">自动调整界面主题</span>
              </div>
              <Switch
                size="lg"
                isSelected={settings.darkMode}
                onChange={(checked) => updateSetting("darkMode", checked)}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium">自动保存</span>
                <span className="text-xs text-default-500">编辑时自动保存内容</span>
              </div>
              <Switch
                isSelected={settings.autoSave}
                onChange={(checked) => updateSetting("autoSave", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">音效</span>
              <Switch
                isSelected={settings.soundEffects}
                onChange={(checked) => updateSetting("soundEffects", checked)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-default-100 rounded text-xs">
          <strong>当前设置:</strong>
          <pre className="mt-2 text-xs overflow-auto">{JSON.stringify(settings, null, 2)}</pre>
        </div>
      </div>
    );
  },
};

/**
 * 异步切换
 *
 * 模拟异步操作，切换时显示 loading 状态。
 * 适用于需要调用 API 的场景。
 */
export const AsyncSwitch: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleChange = async (newChecked: boolean) => {
      setLoading(true);

      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setChecked(newChecked);
      setLoading(false);
    };

    return (
      <div className="space-y-4">
        <Switch
          isSelected={checked}
          isLoading={loading}
          onChange={handleChange}
          label={`服务状态: ${checked ? "启用" : "禁用"} ${loading ? "(处理中...)" : ""}`}
        />
        <p className="text-sm text-default-600">切换开关会模拟异步操作，显示 loading 状态 1.5 秒</p>
      </div>
    );
  },
};

/**
 * 尺寸对比
 *
 * 展示所有尺寸在不同状态下的外观。
 */
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-3">未选中</h4>
        <div className="flex items-center gap-6">
          <Switch size="sm" label="Small" />
          <Switch size="md" label="Medium" />
          <Switch size="lg" label="Large" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3">已选中</h4>
        <div className="flex items-center gap-6">
          <Switch size="sm" defaultSelected label="Small" />
          <Switch size="md" defaultSelected label="Medium" />
          <Switch size="lg" defaultSelected label="Large" />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3">带内容</h4>
        <div className="flex items-center gap-6">
          <Switch size="sm" defaultSelected checkedChildren="✓" unCheckedChildren="✕" />
          <Switch size="md" defaultSelected checkedChildren="ON" unCheckedChildren="OFF" />
          <Switch size="lg" defaultSelected checkedChildren="开" unCheckedChildren="关" />
        </div>
      </div>
    </div>
  ),
};

/**
 * 权限设置示例
 *
 * 在权限管理界面中使用 Switch 的真实场景。
 */
export const PermissionsExample: Story = {
  render: () => {
    const [permissions, setPermissions] = React.useState({
      canView: true,
      canEdit: true,
      canDelete: false,
      canShare: true,
      canDownload: false,
      canComment: true,
    });

    const togglePermission = (key: string) => {
      setPermissions((prev) => ({...prev, [key]: !prev[key as keyof typeof prev]}));
    };

    const permissionList = [
      {key: "canView", label: "查看", desc: "可以查看内容"},
      {key: "canEdit", label: "编辑", desc: "可以修改内容"},
      {key: "canDelete", label: "删除", desc: "可以删除内容"},
      {key: "canShare", label: "分享", desc: "可以分享给他人"},
      {key: "canDownload", label: "下载", desc: "可以下载文件"},
      {key: "canComment", label: "评论", desc: "可以发表评论"},
    ];

    return (
      <div className="max-w-lg">
        <h3 className="text-xl font-bold mb-2">用户权限管理</h3>
        <p className="text-sm text-default-600 mb-6">设置用户可以执行的操作</p>

        <div className="space-y-4">
          {permissionList.map(({key, label, desc}) => (
            <div key={key} className="flex items-center justify-between p-4 bg-default-50 rounded">
              <div className="flex-1">
                <div className="font-medium text-sm">{label}</div>
                <div className="text-xs text-default-500 mt-0.5">{desc}</div>
              </div>
              <Switch
                isSelected={permissions[key as keyof typeof permissions]}
                onChange={() => togglePermission(key)}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            className="px-4 py-2 text-sm border border-default-300 rounded hover:bg-default-100"
            onClick={() =>
              setPermissions({
                canView: true,
                canEdit: false,
                canDelete: false,
                canShare: false,
                canDownload: false,
                canComment: false,
              })
            }
          >
            重置
          </button>
          <button className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary-600">
            保存设置
          </button>
        </div>
      </div>
    );
  },
};
