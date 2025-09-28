# 🔑 NPM 自动发布配置指南

本文档详细说明如何配置 NPM_TOKEN，实现 GitHub Actions 自动发布到 npm。

## 📋 前提条件

- ✅ 已有 npm 账户并完成邮箱验证
- ✅ 本地已登录 npm 账户
- ✅ GitHub 仓库已设置完成

## 🔐 配置步骤

### 1. 生成 npm 访问令牌

#### 方式一：通过网页生成（推荐）

1. **访问 npm 官网**：

   ```
   https://www.npmjs.com/
   ```

2. **登录并进入令牌管理**：

   - 点击头像 → `Access Tokens`
   - 或访问：`https://www.npmjs.com/settings/你的用户名/tokens`

3. **创建新令牌**：

   - 点击 `Generate New Token` → `Classic Token`
   - **Token Type**: `Automation` （自动化用途）
   - **Token Name**: `GitHub Actions - cloudstack-design`
   - 点击 `Generate Token`

4. **复制令牌**：
   ⚠️ **重要**：令牌仅显示一次，请立即复制！
   ```
   npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

#### 方式二：通过命令行生成

```bash
npm token create --type=automation --cidr=0.0.0.0/0
```

### 2. 在 GitHub 中配置 Secret

1. **打开仓库设置**：

   ```
   https://github.com/你的用户名/cloudstack-design/settings/secrets/actions
   ```

2. **添加 Repository Secret**：
   - 点击 `New repository secret`
   - **Name**: `NPM_TOKEN`
   - **Value**: 粘贴 npm 访问令牌
   - 点击 `Add secret`

### 3. 验证配置

配置完成后，您可以通过以下方式验证：

#### 手动触发发布测试

```bash
# 更新版本号
pnpm run release:patch

# 触发npm发布
pnpm run release:npm
```

#### 查看 GitHub Actions 日志

1. 访问：`https://github.com/你的用户名/cloudstack-design/actions`
2. 点击最新的 workflow 运行
3. 查看 "发布到 NPM" 步骤的日志

## 🔍 故障排除

### 常见错误

1. **401 Unauthorized**

   ```
   npm error code E401
   npm error Unable to authenticate
   ```

   **解决方案**：

   - 检查 NPM_TOKEN 是否正确配置
   - 确认令牌类型为 `Automation`
   - 重新生成令牌并更新 GitHub Secret

2. **403 Forbidden**

   ```
   npm error code E403
   npm error 403 Forbidden
   ```

   **解决方案**：

   - 确认您有该包的发布权限
   - 检查包名是否已被占用
   - 确认令牌有发布权限

3. **Package not found**
   ```
   npm error 404 Not Found
   ```
   **解决方案**：
   - 首次发布可能出现此错误，属正常
   - 确认 package.json 中的包名正确

### 调试命令

```bash
# 检查当前登录用户
npm whoami

# 测试令牌是否有效
npm token list

# 本地测试发布（不会真正发布）
npm publish --dry-run
```

## 🚀 自动发布流程

配置完成后的自动发布流程：

```mermaid
graph LR
    A[代码提交] --> B[版本号变化?]
    B -->|是| C[GitHub Actions触发]
    B -->|否| D[跳过发布]
    C --> E[构建项目]
    E --> F[创建GitHub Release]
    F --> G[包含 [publish-npm]?]
    G -->|是| H[发布到npm]
    G -->|否| I[仅GitHub Release]
    H --> J[发布成功✅]
    I --> J
```

## 📝 发布命令参考

### 仅 GitHub Release

```bash
pnpm run release:patch   # 0.1.0 → 0.1.1
pnpm run release:minor   # 0.1.0 → 0.2.0
pnpm run release:major   # 0.1.0 → 1.0.0
```

### GitHub Release + npm 发布

```bash
# 方式一：先更新版本再触发npm发布
pnpm run release:patch
pnpm run release:npm

# 方式二：手动提交并包含触发标识
git add .
git commit -m "feat: 新增功能 [publish-npm]"
git push
```

## 🔒 安全说明

- ✅ NPM_TOKEN 只存储在 GitHub Secrets 中，不会暴露在代码中
- ✅ 令牌权限仅限于包发布，无法访问其他 npm 功能
- ✅ 可随时在 npm 官网撤销令牌
- ✅ 建议定期更换访问令牌

## 📱 令牌管理

### 查看现有令牌

```bash
npm token list
```

### 撤销令牌

```bash
npm token revoke <token-id>
```

### 更新令牌

1. 在 npm 官网撤销旧令牌
2. 生成新令牌
3. 更新 GitHub Secret 中的 NPM_TOKEN

---

🎉 **配置完成后，您的组件库将具备完全自动化的 npm 发布能力！**
