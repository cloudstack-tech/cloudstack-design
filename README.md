# CloudStack Design

<div align="center">
  <img width="128" height="128" alt="Logo" src="https://raw.githubusercontent.com/cloudstack-tech/cloudstack-design/main/raws/logo.png">
  <p>专为云原生/云计算场景打造的现代化组件库</p>
</div>

## 特性

- **基于 Tailwind CSS v4** - 充分利用 Tailwind CSS 的强大功能和灵活性
- **云原生场景优化** - 专注于云计算/云原生业务场景的组件设计
- **灵活的主题定制** - 支持 CSS-first 和 JS 配置两种主题定制方式
- **Monorepo 架构** - 使用 pnpm workspace 管理多包项目，支持按需引用和全量使用
- **完善的开发工具** - 集成 TypeScript、Storybook、Vitest 等现代化工具链
- **组件文档** - 提供完整的组件示例和使用文档

## 安装

```bash
# 使用 pnpm（推荐）
pnpm add @cloudstack-design/react @cloudstack-design/theme

# 使用 npm
npm install @cloudstack-design/react @cloudstack-design/theme

# 使用 yarn
yarn add @cloudstack-design/react @cloudstack-design/theme
```

## 快速开始

### 1. 引入样式与默认主题

在你的全局 CSS 文件中（例如 `app/globals.css`）：

```css
@import "tailwindcss";

@plugin "@cloudstack-design/theme";
```

### 2. 使用组件

```tsx
import {Button} from "@cloudstack-design/react";

export default function App() {
  return <Button variant="primary">点击我</Button>;
}
```

## 主题定制

CloudStack Design 基于 tailwindcss@v4 提供了灵活且现代化的主题定制方案，支持两种方式：

### CSS-First 方式

直接在 CSS 文件中定制主题：

```css
@plugin "@cloudstack-design/theme" {
  primary: "#000";
}
```

### JavaScript 配置方式

通过 JavaScript 配置文件定制主题：

```js
// ./cloudstack-design.ts
import {cloudstackDesign} from "@cloudstack-design/theme";

export default cloudstackDesign({
  theme: {
    colors: {
      primary: "#000",
      secondary: "#666",
    },
  },
});
```

然后在 CSS 中引入：

```css
@import "tailwindcss";
@plugin "./cloudstack-design.ts";
```

## 项目结构

```
cloudstack-design/
├── apps/
│   ├── docs/           # 文档站点（Next.js）
│   └── storybook/      # Storybook 开发环境
├── packages/
│   ├── components/     # UI 组件包
│   │   ├── ...         # 组件
│   │   └── template/   # 组件模板
│   ├── core/
│   │   ├── react/      # React 核心包
│   │   └── theme/      # 主题配置包
│   ├── hooks/          # React Hooks
│   └── utilities/      # 工具函数
└── scripts/            # 脚本工具
```

## 本地开发

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 克隆项目

```bash
git clone https://github.com/your-org/cloudstack-design.git
cd cloudstack-design
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
# 启动 Storybook
pnpm dev

# 启动文档站点
pnpm docs:dev
```

### 运行测试

```bash
# 运行所有测试
pnpm test

# 运行特定组件测试
pnpm --filter @cloudstack-design/button test
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @cloudstack-design/button build
```

## 创建新组件

我们提供了便捷的脚本来创建新组件：

```bash
pnpm new-component <component-name>
```

这将基于 `packages/components/template` 创建一个新的组件包，包含：

- 组件源码
- 测试文件
- Storybook 故事
- 示例代码
- README 文档

## 贡献指南

我们欢迎所有形式的贡献！如果你想为 CloudStack Design 做出贡献：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 [MIT](./LICENSE) 许可证。

## 相关链接

- [文档站点](#)
- [Storybook](#)
- [更新日志](#)
- [问题反馈](https://github.com/your-org/cloudstack-design/issues)

---

<div align="center">
  Made by CloudStack Design Team
</div>
