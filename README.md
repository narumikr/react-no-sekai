<img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=0:00bbdd,100:33dd99&text=Hello%20SEKAI&fontAlign=45&fontAlignY=40&fontSize=50&animation=fadeIn&desc=React%20%2B%20Vite%20Template%20Repo&descAlign=65&descAlignY=55&fontColor=f5f5f7&descSize=-1&reversal=true&section=header&textBg=false" />

# **_React no SEKAI_**

![welcome comment](https://readme-typing-svg.herokuapp.com?color=%23ff7722&width=500&lines=Hello+there!!+Thanks+for+stopping+by+🎵;Welcome+to+my+SEKAI+💫)

React + Vite のプロジェクト開始テンプレートリポジトリ

#### **_Tech Stack_**

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff)](#)

### 💫 **_Getting Started_** 💫![Leo/need-divider](https://capsule-render.vercel.app/api?type=rect&height=2&color=0:3367cc,100:f5f5f7)

#### セットアップ

```bash
pnpm install
```

#### 開発サーバの起動

```bash
pnpm dev
```

#### ビルド

```bash
pnpm build
```

> [!note]
>
> `dist/` に静的ファイルが生成されます。任意の HTTP サーバに配置するだけで動作します。

#### ビルド結果のプレビュー

```bash
pnpm preview
```

#### テスト

```bash
pnpm test
```

> [!note]
>
> `pnpm test:watch` でファイル変更を監視しながら実行できます。

#### Lint / Format

```bash
pnpm check
```

### 🍀 **_HashRouter への切り替え_** 🍀![MOREMORE-JUMP-divider](https://capsule-render.vercel.app/api?type=rect&height=2&color=0:88dd44,100:f5f5f7)

デプロイ先のサーバでフォールバック設定（全リクエストを `index.html` に向ける設定）ができない場合、`createBrowserRouter` を `createHashRouter` に切り替えてください。
URL が `/about` → `/#/about` 形式になり、リロード時の 404 を回避できます。

**変更ファイル: `src/App.tsx`**

```diff
-import { createBrowserRouter, RouterProvider } from 'react-router-dom';
+import { createHashRouter, RouterProvider } from 'react-router-dom';
 import { routes } from './routes';

-const router = createBrowserRouter(routes);
+const router = createHashRouter(routes);

 export function App() {
   return <RouterProvider router={router} />;
 }
```

変更箇所は `createBrowserRouter` → `createHashRouter` の置き換えのみです。
