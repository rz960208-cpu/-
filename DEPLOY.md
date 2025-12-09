# 🚀 GitHub Pages 快速部署指南

## ⚡ 最常見問題：文件位置錯誤

**GitHub Pages 要求 `index.html` 必須在倉庫根目錄！**

### ✅ 正確的文件結構

```
你的倉庫名稱/
├── index.html      ← 必須在根目錄！
├── styles.css      ← 必須在根目錄！
├── app.js          ← 必須在根目錄！
├── .nojekyll       ← 已自動創建
└── README.md
```

### ❌ 錯誤的文件結構

```
你的倉庫名稱/
└── inari-game/     ← 錯誤！不要放在子文件夾
    ├── index.html
    ├── styles.css
    └── app.js
```

## 📋 部署步驟（逐步檢查）

### 步驟 1：確認文件位置
- [ ] 打開你的 GitHub 倉庫
- [ ] 確認 `index.html` 在根目錄（不在任何文件夾內）
- [ ] 確認 `styles.css` 在根目錄
- [ ] 確認 `app.js` 在根目錄

### 步驟 2：啟用 GitHub Pages
1. 進入倉庫 → 點擊 **Settings**
2. 左側選單找到 **Pages**
3. 在 **Source** 選擇：
   - **Deploy from a branch**
   - Branch: **main** (或 master)
   - Folder: **/ (root)**
4. 點擊 **Save**

### 步驟 3：等待部署
- 等待 1-2 分鐘
- 頁面會顯示：`Your site is live at https://你的用戶名.github.io/倉庫名/`

### 步驟 4：訪問網站
- 訪問顯示的 URL
- 如果看到空白頁，繼續看下面的排查

## 🔧 問題排查

### 問題 1：頁面完全空白
**解決方法：**
1. 按 F12 打開開發者工具
2. 查看 Console 標籤是否有錯誤
3. 查看 Network 標籤，確認 CSS/JS 是否載入成功

### 問題 2：CSS 樣式沒有載入
**檢查：**
- 確認 `styles.css` 文件名正確（大小寫敏感）
- 確認文件在根目錄
- 清除瀏覽器緩存（Ctrl+F5）

### 問題 3：JavaScript 沒有運行
**檢查：**
- 確認 `app.js` 文件名正確
- 打開 Console 查看是否有錯誤訊息
- 確認文件在根目錄

### 問題 4：404 錯誤
**檢查：**
- URL 是否正確：`https://用戶名.github.io/倉庫名/`
- 如果倉庫名是 `username.github.io`，URL 是 `https://username.github.io/`
- 確認倉庫是 **Public**（免費帳戶）

## 🎯 快速修復清單

如果還是不行，按順序檢查：

1. ✅ **文件在根目錄**（最重要！）
2. ✅ **GitHub Pages 已啟用**
3. ✅ **倉庫是 Public**
4. ✅ **等待 1-2 分鐘**
5. ✅ **清除瀏覽器緩存**
6. ✅ **檢查 URL 是否正確**
7. ✅ **查看瀏覽器 Console 錯誤訊息**

## 📞 需要幫助？

訪問診斷頁面：`https://你的用戶名.github.io/倉庫名/check.html`

這個頁面會自動檢查文件是否存在和可訪問。

## 💡 提示

- GitHub Pages 區分大小寫，文件名必須完全匹配
- 修改文件後需要等待幾分鐘才會更新
- 使用 `https://` 協議訪問（不要用 `http://`）

