# 🛠️ 本地开发联调指南

当组件库处于快速迭代的 alpha 阶段时，本文档提供多种方案让您能够快速在应用项目中测试组件库的修改。

## 🎯 方案对比

| 方案         | 设置复杂度 | 实时性 | 稳定性 | 推荐场景 |
| ------------ | ---------- | ------ | ------ | -------- |
| **npm link** | ⭐         | ⭐⭐⭐ | ⭐     | 临时测试 |
| **本地路径** | ⭐⭐       | ⭐⭐   | ⭐⭐⭐ | 中期开发 |
| **开发模式** | ⭐⭐       | ⭐⭐⭐ | ⭐⭐   | 频繁修改 |
| **Monorepo** | ⭐⭐⭐     | ⭐⭐⭐ | ⭐⭐⭐ | 长期维护 |
| **分支发布** | ⭐         | ⭐⭐   | ⭐⭐⭐ | 团队协作 |

## 🚀 方案 1：npm/pnpm link（最快速）

### 组件库端设置

```bash
cd D:\Projects\cloudstack\cloudstack-design
pnpm install
pnpm run build:lib
pnpm link --global
```

### 应用端使用

```bash
cd 你的应用项目
pnpm link --global cloudstack-design
```

### 开发流程

```bash
# 在组件库项目中修改代码后
pnpm run build:lib
# 应用端会立即生效
```

**优点：**

- ✅ 设置最简单
- ✅ 修改后立即生效
- ✅ 不影响 package.json

**缺点：**

- ❌ 需要手动构建
- ❌ 可能有符号链接问题
- ❌ 依赖冲突风险

## 📦 方案 2：本地路径安装（推荐）

### 修改应用的 package.json

```json
{
  "dependencies": {
    "cloudstack-design": "file:../cloudstack-design"
  }
}
```

### 安装和使用

```bash
cd 你的应用项目
pnpm install  # 自动链接本地组件库
```

### 开发流程

```bash
# 在组件库修改后
cd cloudstack-design
pnpm run build:lib

# 在应用项目重新安装（可选）
cd 你的应用项目
pnpm install
```

**优点：**

- ✅ 依赖管理清晰
- ✅ 版本控制友好
- ✅ 支持自动安装依赖

**缺点：**

- ❌ 需要手动构建
- ❌ 路径相对性要求

## ⚡ 方案 3：开发模式 + 监听构建（实时开发）

我已经为您的组件库添加了开发模式支持。

### 安装新依赖

```bash
cd D:\Projects\cloudstack\cloudstack-design
pnpm install  # 安装concurrently等新依赖
```

### 启动监听模式

```bash
# 方式一：仅监听JS/TS构建
pnpm run dev:lib

# 方式二：同时监听JS/TS和类型声明
pnpm run build:lib:watch
```

### 配合本地路径使用

```json
// 应用项目的package.json
{
  "dependencies": {
    "cloudstack-design": "file:../cloudstack-design"
  }
}
```

### 开发流程

```bash
# 1. 启动组件库监听模式
cd cloudstack-design
pnpm run build:lib:watch

# 2. 在另一个终端启动应用
cd 你的应用项目
npm run dev

# 3. 修改组件库代码，自动构建，应用热重载生效
```

**优点：**

- ✅ 修改立即生效
- ✅ 无需手动构建
- ✅ 支持热重载

**缺点：**

- ❌ 需要两个终端
- ❌ 资源占用稍高

## 🏗️ 方案 4：Monorepo 模式（最佳长期方案）

### 创建工作区结构

```
your-workspace/
├── packages/
│   ├── cloudstack-design/     # 组件库
│   └── your-app/             # 应用项目
├── package.json              # 根package.json
└── pnpm-workspace.yaml       # 工作区配置
```

### 根目录 package.json

```json
{
  "name": "your-workspace",
  "private": true,
  "scripts": {
    "dev:lib": "pnpm --filter cloudstack-design dev:lib",
    "dev:app": "pnpm --filter your-app dev",
    "dev": "concurrently \"pnpm dev:lib\" \"pnpm dev:app\"",
    "build": "pnpm --filter cloudstack-design build:lib && pnpm --filter your-app build"
  },
  "devDependencies": {
    "concurrently": "^9.1.0"
  }
}
```

### pnpm-workspace.yaml

```yaml
packages:
  - "packages/*"
```

### 应用项目依赖配置

```json
{
  "dependencies": {
    "cloudstack-design": "workspace:*"
  }
}
```

### 开发流程

```bash
# 在根目录一键启动
pnpm run dev
# 组件库和应用同时启动，修改立即生效
```

**优点：**

- ✅ 统一管理依赖
- ✅ 最佳开发体验
- ✅ 支持多项目联调
- ✅ 版本管理清晰

**缺点：**

- ❌ 初始设置复杂
- ❌ 需要重构项目结构

## 🌿 方案 5：Git 分支自动发布（团队协作）

### 设置分支自动发布

修改`.github/workflows/release.yml`，添加开发分支发布：

```yaml
on:
  push:
    branches:
      - main
      - develop # 添加开发分支
```

### 应用端使用 Git 依赖

```json
{
  "dependencies": {
    "cloudstack-design": "git+https://github.com/rokuko/cloudstack-design.git#develop"
  }
}
```

### 开发流程

```bash
# 组件库修改并推送到develop分支
git push origin develop

# 应用端更新依赖
pnpm update cloudstack-design
```

**优点：**

- ✅ 适合团队协作
- ✅ 版本追踪清晰
- ✅ 无需本地配置

**缺点：**

- ❌ 需要等待 CI 构建
- ❌ 依赖网络环境

## 🎛️ 方案 6：私有 registry + 自动发布

### 设置 npm 版本自动发布

```bash
# 添加alpha版本发布脚本
npm pkg set scripts.release:alpha="npm version prerelease --preid=alpha && npm publish --tag=alpha"
```

### 应用端使用 alpha 版本

```bash
pnpm add cloudstack-design@alpha
```

### 自动更新脚本

```json
{
  "scripts": {
    "update:lib": "pnpm add cloudstack-design@alpha"
  }
}
```

## 💡 推荐的开发流程

### 1. 日常开发（推荐方案 3）

```bash
# Terminal 1: 组件库监听构建
cd cloudstack-design
pnpm run build:lib:watch

# Terminal 2: 应用开发
cd your-app
npm run dev
```

### 2. 团队协作（推荐方案 5）

```bash
# 组件库开发者
git checkout develop
# 修改代码...
git push origin develop

# 应用开发者
pnpm update cloudstack-design
```

### 3. 长期项目（推荐方案 4）

```bash
# 一键启动所有项目
pnpm run dev
```

## 🔧 配置示例文件

### .vscode/settings.json（VSCode 用户）

```json
{
  "typescript.preferences.resolveJsonModule": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "npm.packageManager": "pnpm"
}
```

### .vscode/tasks.json（任务配置）

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Component Library Watch",
      "type": "shell",
      "command": "pnpm run build:lib:watch",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      },
      "options": {
        "cwd": "${workspaceFolder}/../cloudstack-design"
      }
    }
  ]
}
```

## ⚠️ 注意事项

### 1. 依赖冲突

- 确保 React 版本兼容
- 检查 peer dependencies
- 避免重复安装相同包

### 2. 构建缓存

```bash
# 清理构建缓存
rm -rf node_modules/.cache
rm -rf dist
pnpm install
```

### 3. TypeScript 路径解析

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "cloudstack-design": ["../cloudstack-design/src/packages"]
    }
  }
}
```

### 4. 热重载问题

如果热重载不生效，尝试：

```bash
# 重启开发服务器
# 或检查文件监听配置
```

## 📊 性能优化建议

1. **选择性构建**：只构建修改的组件
2. **增量编译**：启用 TypeScript 增量编译
3. **并行任务**：使用 concurrently 并行运行任务
4. **缓存策略**：合理使用构建缓存

---

🎯 **选择建议**：

- 🚀 **快速试验**：使用方案 1 (npm link)
- 🛠️ **日常开发**：使用方案 3 (监听构建)
- 🏗️ **长期维护**：使用方案 4 (Monorepo)
- 👥 **团队协作**：使用方案 5 (分支发布)
