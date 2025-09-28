# 🚀 自动化发布指南

本项目已配置自动化 GitHub Release 和 npm 发布流程。当版本号发生变化并推送到`main`分支时，将自动创建 GitHub Release。

## 📋 工作流程概述

```mermaid
graph LR
    A[修改代码] --> B[更新版本号]
    B --> C[推送到main分支]
    C --> D[GitHub Actions检测版本变化]
    D --> E[自动创建GitHub Release]
    E --> F{包含 [publish-npm] ?}
    F -->|是| G[同时发布到npm]
    F -->|否| H[仅创建GitHub Release]
```

## 🎯 发布类型

### 1. 仅 GitHub Release（推荐）

**适用场景：** 日常开发，功能更新，修复 bug

```bash
# 补丁版本 (0.1.0 → 0.1.1) - 修复bug
pnpm run release:patch

# 次要版本 (0.1.0 → 0.2.0) - 新增功能
pnpm run release:minor

# 主要版本 (0.1.0 → 1.0.0) - 重大变更
pnpm run release:major
```

### 2. GitHub Release + npm 发布

**适用场景：** 正式版本发布，需要同步到 npm

```bash
# 先更新版本
pnpm run release:patch  # 或 minor/major

# 然后触发npm发布
pnpm run release:npm
```

## 🔧 详细操作步骤

### 步骤 1：开发和测试

1. 在功能分支开发新功能
2. 确保代码质量和测试通过
3. 合并到 main 分支

### 步骤 2：版本发布

**选择发布方式：**

#### A. 标准发布（仅 GitHub Release）

```bash
# 根据变更类型选择版本更新
pnpm run release:patch   # 修复bug
pnpm run release:minor   # 新功能
pnpm run release:major   # 重大更新
```

#### B. npm 发布（GitHub Release + npm）

```bash
# 1. 先更新版本
pnpm run release:patch

# 2. 触发npm发布
pnpm run release:npm
```

### 步骤 3：验证发布

- 查看 GitHub Releases 页面确认 Release 已创建
- 如果发布到 npm，检查 npm 包页面

## 🤖 自动化流程详情

### 触发条件

- ✅ 推送到`main`分支
- ✅ `package.json`中的版本号发生变化
- ✅ 可通过 GitHub 界面手动触发

### 自动执行内容

1. **版本检测**: 对比当前版本与上一次提交的版本
2. **构建测试**: 安装依赖，运行测试，构建组件库
3. **生成 Changelog**: 自动生成版本更新说明
4. **创建 Release**: 在 GitHub 创建带标签的 Release
5. **npm 发布**: （可选）如果提交信息包含`[publish-npm]`

### 生成的 Release 内容

- **标签名**: `v{version}` (如 v0.1.1)
- **发布名**: `Release v{version}`
- **描述**: 包含 Changelog 和安装指南
- **附件**: 自动附加源码压缩包

## 📱 使用示例

### 日常 bug 修复

```bash
# 在功能分支修复bug后
git checkout main
git pull origin main

# 更新补丁版本并发布
pnpm run release:patch

# 自动执行：版本 0.1.0 → 0.1.1，推送代码，创建GitHub Release
```

### 新功能发布

```bash
# 新功能开发完成后
pnpm run release:minor

# 自动执行：版本 0.1.1 → 0.2.0，推送代码，创建GitHub Release
```

### 正式版本发布到 npm

```bash
# 重大版本更新
pnpm run release:major  # 0.2.0 → 1.0.0

# 同时发布到npm
pnpm run release:npm    # 触发npm发布流程
```

## 🔍 Release 页面示例

发布后，您可以在以下地址查看 Release：
`https://github.com/rokuko/cloudstack-design/releases`

每个 Release 将包含：

- 📝 自动生成的 Changelog
- 📦 安装命令
- 🔗 源码下载链接
- 🏷️ 版本标签

## ⚙️ 高级配置

### 自定义 Changelog

如果需要自定义 Changelog，可以在发布前手动编辑：

```bash
# 更新版本但不推送
npm version patch --no-git-tag-version

# 编辑CHANGELOG.md文件
# 然后手动推送
git add .
git commit -m "chore: release v0.1.1"
git tag v0.1.1
git push && git push --tags
```

### npm Token 配置

要启用自动 npm 发布，需要在 GitHub 仓库设置中配置：

1. 进入 GitHub 仓库 → Settings → Secrets and variables → Actions
2. 添加 Secret：`NPM_TOKEN`
3. 值为您的 npm 访问令牌

### 修改触发条件

编辑 `.github/workflows/release.yml` 文件以自定义：

- 触发分支
- 发布条件
- 构建步骤

## 🔧 故障排除

### 常见问题

1. **Release 没有创建**

   - 检查版本号是否真的发生了变化
   - 查看 GitHub Actions 日志

2. **npm 发布失败**

   - 确认 NPM_TOKEN 已正确配置
   - 检查包名是否已被占用

3. **版本冲突**
   - 确保本地代码是最新的
   - 解决合并冲突后重新发布

### 手动回滚

```bash
# 删除错误的标签
git tag -d v0.1.1
git push origin :refs/tags/v0.1.1

# 在GitHub删除对应的Release
# 重新发布正确版本
```

## 📈 最佳实践

1. **版本语义化**：遵循语义化版本控制

   - `patch`: 修复 bug
   - `minor`: 新增功能（向后兼容）
   - `major`: 重大变更（可能不兼容）

2. **提交信息规范**：

   ```
   feat: 添加新的Button组件变体
   fix: 修复Table组件排序bug
   docs: 更新API文档
   ```

3. **发布频率**：

   - 修复 bug：及时发布 patch 版本
   - 新功能：积累后发布 minor 版本
   - 重大更新：谨慎发布 major 版本

4. **测试验证**：
   - 发布前充分测试
   - 检查 Storybook 展示
   - 验证 TypeScript 类型定义

---

🎉 **现在您的组件库已具备完全自动化的发布流程！**
