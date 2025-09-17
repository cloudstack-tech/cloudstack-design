#!/usr/bin/env node

/**
 * 手动部署 Storybook 到 GitHub Pages 的脚本
 * 使用方法: node deploy.js 或者 pnpm run deploy-storybook
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 开始部署 Storybook 到 GitHub Pages...\n");

try {
  // 1. 检查是否已安装依赖
  console.log("📦 检查依赖...");
  if (!fs.existsSync("node_modules")) {
    console.log("安装依赖中...");
    execSync("pnpm install", { stdio: "inherit" });
  }

  // 2. 构建 Storybook
  console.log("🔨 构建 Storybook...");
  execSync("pnpm run build-storybook", { stdio: "inherit" });

  // 3. 检查构建结果
  const storybookStaticPath = path.join(process.cwd(), "storybook-static");
  if (!fs.existsSync(storybookStaticPath)) {
    throw new Error("Storybook 构建失败：找不到 storybook-static 文件夹");
  }

  console.log("✅ Storybook 构建成功！");

  // 4. 部署到 GitHub Pages
  console.log("🌐 部署到 GitHub Pages...");

  // 检查是否为 git 仓库
  try {
    execSync("git status", { stdio: "ignore" });
  } catch (error) {
    throw new Error("当前目录不是 Git 仓库。请先初始化 Git 并推送到 GitHub。");
  }

  // 使用 gh-pages 部署
  execSync("npx gh-pages -d storybook-static", { stdio: "inherit" });

  console.log("\n🎉 Storybook 已成功部署到 GitHub Pages！");
  console.log("📱 您的 Storybook 将在几分钟内在以下地址可用：");

  // 尝试获取仓库信息
  try {
    const remoteUrl = execSync("git config --get remote.origin.url", {
      encoding: "utf8",
    }).trim();
    let repoName = "";
    let username = "";

    if (remoteUrl.includes("github.com")) {
      const match = remoteUrl.match(
        /github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/
      );
      if (match) {
        username = match[1];
        repoName = match[2];
        console.log(`🔗 https://${username}.github.io/${repoName}/`);
      }
    }
  } catch (error) {
    console.log("🔗 https://[your-username].github.io/[your-repo-name]/");
  }

  console.log("\n💡 提示：");
  console.log("1. 确保在 GitHub 仓库设置中启用了 Pages 功能");
  console.log("2. 选择 gh-pages 分支作为 Pages 源");
  console.log("3. 部署可能需要几分钟才能生效");
} catch (error) {
  console.error("❌ 部署失败：", error.message);
  process.exit(1);
}
