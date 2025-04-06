# Shadcn UI 学習サイト

このリポジトリは Shadcn UI を学習するための Next.js プロジェクトです。

Vercel Deploy済み：
https://shadcn-next15-guide-docs-sample.vercel.app

## ✨ 目的

*   Shadcn UI の基本的な使い方を理解する
*   様々なコンポーネントの実装方法を学ぶ
*   カスタマイズ方法を探る

## 🚀 セットアップ

1.  **リポジトリをクローン:**
    ```bash
    git clone <リポジトリURL> # ここにご自身のリポジトリURLを記載してください
    cd <リポジトリ名>
    ```
2.  **依存関係をインストール:**
    ```bash
    npm install
    # または
    yarn install
    # または
    pnpm install
    ```
3.  **開発サーバーを起動:**
    ```bash
    npm run dev
    # または
    yarn dev
    # または
    pnpm dev
    ```
    ブラウザで `http://localhost:3000` を開きます。

## 🔧 Shadcn UI コンポーネントの追加

Shadcn UI CLI を使用して新しいコンポーネントを追加できます。

```bash
npx shadcn-ui@latest add [コンポーネント名]
```

例: ボタンコンポーネントを追加する場合

```bash
npx shadcn-ui@latest add button
```

追加されたコンポーネントは `src/components/ui` ディレクトリ（設定によって異なる場合があります）に配置されます。

## 📄 使い方

*   `src/app` ディレクトリ内の各ページでコンポーネントの使用例を確認できます。（これから作成していく想定です）
*   `src/components/ui` ディレクトリで各コンポーネントのソースコードを確認できます。
*   自由にコードを変更し、動作を確認しながら学習を進めてください。

## 🤝 コントリビューション

改善提案やバグ報告は Issue または Pull Request でお願いします。（必要に応じて変更してください）

## 📜 ライセンス

[ライセンスの種類を記載] (例: MIT License)
