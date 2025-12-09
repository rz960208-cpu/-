# 稻禾村：眠行疑案 - GitHub Pages 部署指南

## 📁 文件结构要求

GitHub Pages 需要以下文件结构：

```
你的仓库/
├── index.html          ← 必须在根目录
├── styles.css
├── app.js
└── README.md
```

## 🚀 部署步骤

### 方法一：根目录部署（推荐）

1. **确保文件在仓库根目录**
   - `index.html` 必须在仓库根目录
   - `styles.css` 和 `app.js` 也在根目录

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择：**Deploy from a branch**
   - Branch 选择：**main** (或 master)
   - Folder 选择：**/ (root)**
   - 点击 Save

3. **等待部署**
   - 通常需要 1-2 分钟
   - 访问：`https://你的用户名.github.io/仓库名/`

### 方法二：docs 文件夹部署

如果使用 docs 文件夹：

1. 创建 `docs` 文件夹
2. 将所有文件（index.html, styles.css, app.js）放入 `docs` 文件夹
3. Settings → Pages → Source 选择 **/docs**

## ⚠️ 常见问题排查

### 1. 页面空白
- ✅ 检查浏览器控制台（F12）是否有错误
- ✅ 确认文件路径正确（CSS/JS 使用相对路径）
- ✅ 检查 GitHub Pages 是否已启用

### 2. CSS/JS 无法加载
- ✅ 确认文件在同一目录
- ✅ 检查文件名大小写（GitHub 区分大小写）
- ✅ 清除浏览器缓存

### 3. 404 错误
- ✅ 确认仓库是 Public（免费账户）
- ✅ 检查 URL 是否正确：`https://用户名.github.io/仓库名/`
- ✅ 如果仓库名是 `username.github.io`，URL 是 `https://username.github.io/`

## 🔧 快速修复

如果页面不显示，尝试：

1. **添加 .nojekyll 文件**（禁用 Jekyll）
   ```
   在仓库根目录创建 .nojekyll 文件（空文件即可）
   ```

2. **检查文件路径**
   - 确保 `href="styles.css"` 和 `src="app.js"` 使用相对路径
   - 不要使用绝对路径如 `/styles.css`

3. **强制刷新**
   - 在 GitHub 仓库中点击任意文件，然后 Commit
   - 这会触发重新部署

## 📝 验证清单

- [ ] index.html 在仓库根目录
- [ ] styles.css 在仓库根目录
- [ ] app.js 在仓库根目录
- [ ] GitHub Pages 已启用（Settings → Pages）
- [ ] 仓库是 Public
- [ ] 等待 1-2 分钟让部署完成
- [ ] 访问正确的 URL

## 🌐 访问地址格式

- 普通仓库：`https://你的用户名.github.io/仓库名/`
- 特殊仓库（用户名.github.io）：`https://你的用户名.github.io/`

