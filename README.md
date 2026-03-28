# Getting Started

## 必要環境

- Node.js 20 以上
- pnpm 10 以上

## セットアップ

```bash
pnpm install
```

## 開発サーバの起動

```bash
pnpm dev
```

## ビルド

```bash
pnpm build
```

`dist/` に静的ファイルが生成されます。任意の HTTP サーバに配置するだけで動作します。

## ビルド結果のプレビュー

```bash
pnpm preview
```

## Lint / Format

```bash
pnpm check
```

---

## HashRouter への切り替え

デプロイ先のサーバでフォールバック設定（全リクエストを `index.html` に向ける設定）ができない場合、`BrowserRouter` を `HashRouter` に切り替えてください。
URL が `/about` → `/#/about` 形式になり、リロード時の 404 を回避できます。

**変更ファイル: `src/App.tsx`**

```diff
-import { BrowserRouter, Route, Routes } from 'react-router-dom';
+import { HashRouter, Route, Routes } from 'react-router-dom';

 export function App() {
   return (
-    <BrowserRouter>
+    <HashRouter>
       <Routes>
         <Route path="/" element={<Top />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
-    </BrowserRouter>
+    </HashRouter>
   );
 }
```

変更箇所は `BrowserRouter` → `HashRouter` の置き換えのみです。
