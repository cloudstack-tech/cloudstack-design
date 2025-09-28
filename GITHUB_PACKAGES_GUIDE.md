# 📦 GitHub Packages 发布指南

本文档说明如何将组件库发布到 GitHub Packages，以及如何在项目中使用 GitHub Packages 上的包。

## 🔍 什么是 GitHub Packages？

GitHub Packages 是 GitHub 提供的包管理服务，可以托管多种类型的包（npm、Docker、Maven 等）。

### GitHub Packages vs npm 对比

| 特性         | GitHub Packages                  | npm 官方                 |
| ------------ | -------------------------------- | ------------------------ |
| **访问控制** | 支持私有包，基于 GitHub 仓库权限 | 私有包需付费订阅         |
| **集成度**   | 与 GitHub 深度集成，CI/CD 友好   | 独立平台                 |
| **发现性**   | 相对较低，主要通过 GitHub        | 全球开发者社区，搜索友好 |
| **流量限制** | 免费账户有月度流量限制           | 公开包无限制             |
| **企业应用** | 更适合企业内部包管理             | 更适合开源项目分发       |
| **安全性**   | 基于 GitHub 权限，细粒度控制     | 基于 npm 权限            |

### 适用场景

**使用 GitHub Packages：**

- ✅ 企业内部包管理
- ✅ 私有包托管
- ✅ 与 GitHub 工作流深度集成
- ✅ 精确的访问权限控制

**使用 npm 官方：**

- ✅ 开源项目
- ✅ 最大化包的可发现性
- ✅ 公共包分发
- ✅ 与 npm 生态系统集成

## 🚀 发布方式

您的项目现在支持 4 种发布模式：

### 1. 仅 GitHub Release（默认）

```bash
pnpm run release:patch   # 0.1.0 → 0.1.1
pnpm run release:minor   # 0.1.0 → 0.2.0
pnpm run release:major   # 0.1.0 → 1.0.0
```

### 2. 发布到 npm

```bash
# 先更新版本
pnpm run release:patch

# 然后发布到npm
pnpm run release:npm
```

### 3. 发布到 GitHub Packages

```bash
# 先更新版本
pnpm run release:patch

# 然后发布到GitHub Packages
pnpm run release:github
```

### 4. 双平台发布

```bash
# 先更新版本
pnpm run release:patch

# 然后同时发布到npm和GitHub Packages
pnpm run release:all
```

## 📝 手动提交方式

也可以通过提交信息触发：

```bash
# 发布到npm
git commit -m "feat: 新功能 [publish-npm]"

# 发布到GitHub Packages
git commit -m "feat: 新功能 [publish-github]"

# 双平台发布
git commit -m "feat: 重大更新 [publish-all]"
```

## 📦 如何使用 GitHub Packages 上的包

### 方式一：通过 .npmrc 配置（推荐）

在项目根目录创建 `.npmrc` 文件：

```bash
# .npmrc
@rokuko:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

然后正常安装：

```bash
npm install @rokuko/cloudstack-design
```

### 方式二：直接指定 registry

```bash
npm install @rokuko/cloudstack-design --registry=https://npm.pkg.github.com
```

### 方式三：使用 GitHub 个人访问令牌

1. **生成 GitHub Token**：

   - 访问：https://github.com/settings/tokens
   - 生成 classic token，勾选 `read:packages` 权限

2. **配置认证**：
   ```bash
   npm login --scope=@rokuko --registry=https://npm.pkg.github.com
   ```

## 🔧 项目配置详情

### package.json 配置

```json
{
  "name": "cloudstack-design",
  "publishConfig": {
    "@rokuko:registry": "https://npm.pkg.github.com"
  }
}
```

### GitHub Actions 配置

```yaml
- name: 发布到 GitHub Packages
  if: contains(github.event.head_commit.message, '[publish-github]')
  run: |
    echo "@rokuko:registry=https://npm.pkg.github.com" >> ~/.npmrc
    echo "//npm.pkg.github.com/:_authToken=${{ secrets.GITHUB_TOKEN }}" >> ~/.npmrc
    npm publish --registry=https://npm.pkg.github.com
```

## 📍 包访问地址

发布成功后，包可以在以下位置访问：

- **GitHub Packages**: https://github.com/rokuko/cloudstack-design/packages
- **包详情页**: https://github.com/users/rokuko/packages/npm/cloudstack-design

## 🔐 权限管理

### 公开包

- 任何人都可以安装
- 需要 GitHub 账户认证

### 私有包

- 仅有仓库访问权限的用户可以安装
- 基于 GitHub 仓库权限控制

### 设置包权限

1. 访问包页面：https://github.com/rokuko/cloudstack-design/packages
2. 点击包名进入详情
3. 在设置中调整可见性和权限

## 💰 费用说明

### 免费配额

- **公开仓库**: GitHub Packages 完全免费
- **私有仓库**:
  - 存储：500MB
  - 数据传输：1GB/月

### 超出限制

- 按使用量计费
- 详情：https://docs.github.com/en/billing/managing-billing-for-github-packages

## 🔍 故障排除

### 1. 认证失败

```
npm error code E401
npm error 401 Unauthorized
```

**解决方案**：

- 确认 GitHub Token 有 `read:packages` 权限
- 检查 `.npmrc` 配置是否正确
- 确认包名 scope 正确

### 2. 包不存在

```
npm error code E404
npm error 404 Not Found
```

**解决方案**：

- 确认包已发布到 GitHub Packages
- 检查包名和 scope 是否正确
- 确认有包的访问权限

### 3. 发布权限不足

```
npm error code E403
npm error 403 Forbidden
```

**解决方案**：

- 确认有仓库的写入权限
- 检查 GitHub Actions 的 GITHUB_TOKEN 权限
- 确认包名没有冲突

## 📱 使用示例

### 在 React 项目中使用

1. **配置 npm registry**：

   ```bash
   echo "@rokuko:registry=https://npm.pkg.github.com" >> .npmrc
   ```

2. **安装包**：

   ```bash
   npm install @rokuko/cloudstack-design
   ```

3. **在代码中使用**：

   ```tsx
   import { Button, Card } from "@rokuko/cloudstack-design";
   import "@rokuko/cloudstack-design/dist/index.css";

   function App() {
     return (
       <Card>
         <Button variant="primary">Hello from GitHub Packages!</Button>
       </Card>
     );
   }
   ```

### 在 CI/CD 中使用

```yaml
# .github/workflows/test.yml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: "20"
    registry-url: "https://npm.pkg.github.com"
    scope: "@rokuko"

- name: Install dependencies
  run: npm install
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 📊 最佳实践

### 1. 版本管理

- 遵循语义化版本控制
- 保持 npm 和 GitHub Packages 版本同步

### 2. 发布策略

- 开源项目：优先 npm 官方
- 企业内部：优先 GitHub Packages
- 重要版本：双平台发布

### 3. 文档维护

- 在 README 中说明安装方式
- 提供不同 registry 的安装示例

### 4. 权限控制

- 合理设置包的可见性
- 定期检查和更新访问权限

---

🎉 **现在您的组件库支持多平台发布，可以根据需要选择最适合的发布方式！**
