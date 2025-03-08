# 簡易計時器/碼錶前端專案

## 專案需求

1. 通用
   1. [x] 透過 Tab 切換計時器與碼表
   2. [x] 切換的行為不影響計時器/碼表的背景運作
   3. [x] 利用 timestamp 計算實際經過時間，避免因瀏覽器凍結等原因導致 interval 失準
   4. [x] 增添全螢幕功能
2. 計時器
   1. [x] 預設為 5 分鐘
   2. [x] 時間顯示格式為 `{h}h {m}m {s}s`
   3. [x] 點擊時間暫定倒數並可修改倒數時間
   4. [x] 按下 Start 開始倒數
   5. [x] 按下 Pause 暫停倒數，再次 Start 則恢復倒數
   6. [x] 按下 Reset 還原回初始設定，如有修改過時間則還原回設定之時間
3. 碼表
   1. [x] 時間顯示格式為 `{h}h {m}m {s}s {sss/10}`
   2. [x] 按下 Start 開始計時
   3. [x] 按下 Pause 暫停計時，再次 Start 則恢復計時
   4. [x] 按下 Reset 還原回初始設定，如有修改過時間則還原回設定之時間

## 環境設置

### 前置需求

- Node.js (建議版本 14 以上)
- Docker (建議版本 20 以上)
- Docker Compose (建議版本 1.27 以上)

### 安裝步驟

1. 將專案複製到本地端：

   ```sh
   git clone <專案網址>
   cd <專案目錄>
   ```

#### 進行部署

##### 使用 Docker 部署

1. 建立並啟動 Docker 容器：

   ```sh
   docker-compose up --build
   ```

##### 使用 npm 指令 (不使用容器)

1. 安裝相依套件：

   ```sh
   npm install --legacy-peer-deps
   ```

2. 打包編譯伺服器程式碼：

   ```sh
   npm run build
   ```

3. 透過 nginx 等工具 serve ./out/ 即可

#### 建立開發環境

##### 使用 Docker 開發

1. 建立並啟動 Docker 容器：

   ```sh
   docker-compose up --build
   ```

2. 進入 Docker 容器：

   ```sh
   docker-compose exec app sh
   ```

3. 在容器內執行應用服務：

   ```sh
   npm run dev
   ```

##### 本地開發環境

1. 安裝相依套件：

   ```sh
   npm install
   ```

2. 啟動開發伺服器：

   ```sh
   npm run dev
   ```

3. 開啟瀏覽器並訪問 <http://localhost:3000> 查看應用服務。
