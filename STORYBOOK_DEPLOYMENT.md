# Storybook 部署到 GitHub Pages 指南

## 🚀 快速开始

您的项目现在已经配置好了将 Storybook 自动部署到 GitHub Pages。有两种部署方式：

### 方式一：自动部署（推荐）

每当您推送代码到 `main` 分支时，GitHub Actions 会自动构建并部署 Storybook。

**设置步骤：**

1. **启用 GitHub Pages**：

   - 进入您的 GitHub 仓库
   - 点击 `Settings` → `Pages`
   - 在 `Source` 下选择 `GitHub Actions`

2. **推送代码**：

   ```bash
   git add .
   git commit -m "添加 Storybook 自动部署配置"
   git push origin main
   ```

3. **查看部署状态**：
   - 在仓库的 `Actions` 标签页查看部署进度
   - 部署完成后，您的 Storybook 将在以下地址可用：
   - `https://[your-username].github.io/cloudstack-design/`

### 方式二：手动部署

如果您需要立即部署或不想使用自动化，可以使用手动部署：

1. **安装新依赖**：

   ```bash
   pnpm install
   ```

2. **运行部署命令**：

   ```bash
   # 使用 npm script
   pnpm run deploy-storybook

   # 或者直接运行部署脚本
   node deploy.js
   ```

## 📋 配置详情

### 新增的文件和配置

1. **`.github/workflows/deploy-storybook.yml`**

   - GitHub Actions 工作流配置
   - 自动构建和部署 Storybook

2. **`deploy.js`**

   - 手动部署脚本
   - 包含错误处理和用户友好的提示

3. **更新的 `package.json`**

   - 新增部署相关脚本：
     - `deploy-storybook`: 手动部署到 GitHub Pages
     - `predeploy`: 预部署钩子
   - 添加 `gh-pages` 依赖

4. **更新的 `.storybook/main.ts`**
   - 添加 GitHub Pages 路径配置
   - 确保静态资源正确加载

### 工作原理

1. **自动部署流程**：

   ```
   推送到 main 分支 → GitHub Actions 触发 → 安装依赖 → 构建 Storybook → 部署到 Pages
   ```

2. **手动部署流程**：
   ```
   运行部署命令 → 构建 Storybook → 推送到 gh-pages 分支 → GitHub Pages 更新
   ```

## 🔧 自定义配置

### 更改基础路径

如果您的仓库名不是 `cloudstack-design`，请更新 `.storybook/main.ts` 中的路径：

```typescript
<base href="${process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'}">
```

### 更改触发分支

要从其他分支部署，修改 `.github/workflows/deploy-storybook.yml` 中的分支配置：

```yaml
on:
  push:
    branches:
      - your-branch-name # 改为您想要的分支
```

## 📱 访问您的 Storybook

部署完成后，您可以在以下地址访问您的 Storybook：

- **默认地址**: `https://[your-username].github.io/cloudstack-design/`
- **自定义域名**: 如果您设置了自定义域名，请在仓库设置中配置

## 🔍 故障排除

### 常见问题

1. **部署失败**：

   - 检查 GitHub Actions 的错误日志
   - 确保 GitHub Pages 功能已启用

2. **静态资源加载失败**：

   - 检查 `.storybook/main.ts` 中的基础路径配置
   - 确保仓库名称正确

3. **Pages 页面显示 404**：

   - 确保选择了正确的 Pages 源（GitHub Actions）
   - 等待几分钟让部署生效

4. **权限错误**：
   - 确保仓库有 Pages 写入权限
   - 检查 Actions 的权限设置

### 调试命令

```bash
# 本地构建 Storybook 测试
pnpm run build-storybook

# 本地预览构建结果
npx http-server storybook-static -p 8080

# 查看当前分支和远程仓库
git branch
git remote -v
```

## 🎯 下一步

- ✅ 推送代码触发自动部署
- ✅ 在仓库设置中启用 GitHub Pages
- ✅ 访问您的在线 Storybook
- ✅ 与团队分享 Storybook 链接

---

**注意**: 首次部署可能需要几分钟才能生效。后续的部署通常会更快。
