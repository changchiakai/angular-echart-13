

# angular-echart-13 Demo

這個專案是基於 Angular 13 和 ECharts 5.3.3 建立的，用於展示如何在 Angular 應用中整合 ECharts 和 ngx-echarts 套件。

使用 angular cli 13.3.11

```
npm install -g @angular/cli@13.3.11
```

## 安裝與啟動

### 1. 安裝專案相依套件
首先，請確保已經安裝了 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/)。接著，使用以下命令安裝專案的相依套件：

```bash
npm install
```

### 2. 啟動開發伺服器
安裝完成後，使用下面的指令啟動 Angular 開發伺服器：

```bash
npm start
```

這樣，你的應用將會在 `http://localhost:4200/` 上啟動。當修改源碼時，開發伺服器會自動重新載入頁面。

### 3. 其他常用指令

- **構建專案**: `npm run build`
  - 這個指令會構建專案並將結果輸出到 `dist/` 資料夾中。

- **開發環境監控**: `npm run watch`
  - 啟動監控模式，會在你修改檔案時自動重新建構專案。

- **測試**: `npm test`
  - 執行單元測試並顯示測試結果。

## 套件說明

### `echarts`
ECharts 是一個開源的可視化圖表庫，用於呈現各類圖表，如折線圖、長條圖、圓餅圖等。

### `ngx-echarts`
`ngx-echarts` 是 Angular 用來包裝 ECharts 的套件，提供了 Angular 版的 ECharts 組件，讓你可以在 Angular 中更輕鬆地使用 ECharts。


```
npm install echarts@5.3.3 -S
npm install ngx-echarts@8.0.1 -S
```


## 意圖

這個專案的目的是展示如何將 ECharts 和 ngx-echarts 整合到 Angular 應用中

## 使用方式

1. 將 `ngx-echarts` 組件加入到 Angular 組件中。
2. 使用 ECharts 配置來設定顯示的圖表內容。
3. 可依照需要調整配置項，來展示各種不同的圖表樣式與功能。

## 其他說明

- 本專案使用 `normalize.css` 來規範瀏覽器默認樣式，確保樣式的一致性。
- 使用 `rxjs` 來處理異步操作與數據流，並且搭配 `zone.js` 管理 Angular 的變更檢測。

```
