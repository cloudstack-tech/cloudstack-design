# 🚀 CloudStack Design

[![npm version](https://badge.fury.io/js/cloudstack-design.svg)](https://badge.fury.io/js/cloudstack-design)
[![GitHub Release](https://img.shields.io/github/release/rokuko/cloudstack-design.svg)](https://github.com/rokuko/cloudstack-design/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

一个现代化的 React 组件库，专为云计算界面设计。提供丰富的 UI 组件，支持 TypeScript，具有优秀的可访问性和主题定制能力。

## ✨ 特性

- 🎨 **现代设计**: 简洁美观的 UI 设计，适合云计算界面
- 🔧 **TypeScript 支持**: 完整的类型定义，提供卓越的开发体验
- 📱 **响应式**: 支持各种屏幕尺寸，移动端友好
- 🎯 **可访问性**: 遵循 WCAG 指南，支持键盘导航和屏幕阅读器
- 🎨 **主题定制**: 基于 Tailwind CSS，支持深度定制
- 📖 **文档完整**: Storybook 交互式文档，示例丰富

## 📦 安装

### 从 npm 安装（推荐）

```bash
npm install cloudstack-design
# 或
pnpm add cloudstack-design
# 或
yarn add cloudstack-design
```

### 从 GitHub Packages 安装

```bash
# 配置 registry
echo "@rokuko:registry=https://npm.pkg.github.com" >> .npmrc

# 安装包
npm install @rokuko/cloudstack-design
```

## 🚀 快速开始

```tsx
import React from "react";
import { Button, Card, Input } from "cloudstack-design";
import "cloudstack-design/dist/index.css";

function App() {
  return (
    <div className="p-6">
      <Card className="max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">登录</h2>
        <div className="space-y-4">
          <Input placeholder="用户名" />
          <Input type="password" placeholder="密码" />
          <Button variant="primary" className="w-full">
            登录
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
```

## 📚 组件库

### 基础组件

- **Button**: 多种样式的按钮组件
- **Input**: 输入框和文本区域
- **Card**: 卡片容器组件
- **Badge**: 标记和状态指示器
- **Tag**: 标签组件

### 布局组件

- **Grid**: 网格布局系统
- **Flex**: 弹性布局组件
- **Space**: 间距组件
- **Stack**: 堆叠布局
- **Divider**: 分割线

### 导航组件

- **Menu**: 导航菜单
- **Breadcrumb**: 面包屑导航
- **Tabs**: 标签页
- **Steps**: 步骤条
- **Anchor**: 锚点导航

### 数据展示

- **Table**: 表格组件（基于 TanStack Table）
- **Progress**: 进度条
- **Timeline**: 时间线
- **Descriptions**: 描述列表
- **Empty**: 空状态

### 反馈组件

- **Alert**: 警告提示
- **Toast**: 消息提示
- **Spin**: 加载指示器
- **Skeleton**: 骨架屏

### 表单组件

- **Checkbox**: 复选框
- **Radio**: 单选框
- **Select**: 选择器
- **Switch**: 开关
- **Slider**: 滑块

## 🎨 在线文档

访问我们的 Storybook 文档查看所有组件的交互式示例：

**[📖 在线文档](https://rokuko.github.io/cloudstack-design/)**

## 🔧 开发

### 本地开发

```bash
# 克隆项目
git clone https://github.com/rokuko/cloudstack-design.git
cd cloudstack-design

# 安装依赖
pnpm install

# 启动Storybook
pnpm run storybook

# 启动开发服务器
pnpm run dev
```

### 构建

```bash
# 构建组件库
pnpm run build:lib

# 监听模式构建（开发时）
pnpm run build:lib:watch

# 构建Storybook
pnpm run build-storybook
```

### 本地联调开发

```bash
# 启动组件库监听构建
pnpm run build:lib:watch

# 在应用项目中使用本地路径
# package.json: "cloudstack-design": "file:../cloudstack-design"
```

> 📖 查看 **[本地开发联调指南](./LOCAL_DEVELOPMENT_GUIDE.md)** 了解完整的 alpha 阶段快速开发方案

## 📋 发布流程

本项目采用自动化多平台发布流程：

- 🔄 **自动 Release**: 推送到 main 分支时自动创建 GitHub Release
- 📦 **npm 发布**: 发布到 npm 官方仓库
- 🏢 **GitHub Packages**: 发布到 GitHub Packages
- 📝 **Changelog**: 自动生成版本更新说明

查看详细指南：

- **[📖 发布流程文档](./RELEASE_GUIDE.md)** - 完整发布指南
- **[📦 GitHub Packages 指南](./GITHUB_PACKAGES_GUIDE.md)** - GitHub Packages 配置

### 发布选项

```bash
# 1. 仅 GitHub Release（默认）
pnpm run release:patch      # 0.1.0 → 0.1.1

# 2. 发布到 npm
pnpm run release:patch      # 先更新版本
pnpm run release:npm        # 发布到 npm

# 3. 发布到 GitHub Packages
pnpm run release:patch      # 先更新版本
pnpm run release:github     # 发布到 GitHub Packages

# 4. 双平台发布
pnpm run release:patch      # 先更新版本
pnpm run release:all        # 同时发布到 npm 和 GitHub Packages
```

## 📖 相关文档

- **[🛠️ 本地开发联调指南](./LOCAL_DEVELOPMENT_GUIDE.md)** - alpha 阶段快速联调方案
- **[🚀 发布指南](./RELEASE_GUIDE.md)** - 自动化发布流程说明
- **[📦 GitHub Packages 指南](./GITHUB_PACKAGES_GUIDE.md)** - GitHub Packages 配置和使用
- **[🔑 NPM 配置指南](./NPM_SETUP_GUIDE.md)** - NPM Token 配置说明
- **[📚 Storybook 部署](./STORYBOOK_DEPLOYMENT.md)** - Storybook 部署到 GitHub Pages

## 🤝 贡献

欢迎贡献代码！请查看我们的贡献指南：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情

## 🏷️ 版本历史

查看 [Releases](https://github.com/rokuko/cloudstack-design/releases) 了解版本更新历史。

---

❤️ 用 React + TypeScript + Tailwind CSS 构建
