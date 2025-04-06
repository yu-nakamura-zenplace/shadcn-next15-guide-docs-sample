"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ShadcnUiSetupPage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">shadcn/ui の導入手順と注意点</h1>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            ← ホームに戻る
          </Link>
          <ThemeToggle />
        </div>
      </div>
      
      <Card className="mb-8 border border-slate-200 dark:border-slate-800">
        <CardContent className="pt-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            既存の Next.js プロジェクトに shadcn/ui を導入する際の注意点と、スムーズに導入するためのステップについて、
            具体的な設定ファイルやコマンドを挙げながら説明します。
          </p>
        </CardContent>
      </Card>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">導入時の注意点</h2>
        </div>
        
        <div className="space-y-4">
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">Tailwind CSSの設定</h3>
              <p className="text-sm">
                shadcn/ui は <strong>Tailwind CSS を前提</strong>としているため、プロジェクトに Tailwind CSS が設定されている必要があります。
                まだ設定されていない場合は、先に Tailwind CSS をインストールし、設定する必要があります。
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">components.json の管理</h3>
              <p className="text-sm">
                <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">components.json</code> ファイルは、
                shadcn/ui CLI がプロジェクトの設定を理解し、コンポーネントをカスタマイズして生成するために使用されます。
                <strong>初期化後にスタイルやベースカラーなどの重要な設定は変更できない</strong>ため、慎重に選択する必要があります。
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">React Server Components (RSC) のサポート</h3>
              <p className="text-sm">
                <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">components.json</code> の 
                <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">rsc</code> オプションで RSC のサポートを有効にするか選択できます。
                有効にすると、クライアントコンポーネントに自動的に <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">'use client'</code> ディレクティブが追加されます。
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">既存のスタイルとの競合</h3>
              <p className="text-sm">
                既存の CSS や他の UI ライブラリのスタイルと競合する可能性があります。
                Tailwind CSS のプレフィックス (<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">tailwind.prefix</code> オプション) を
                設定することで、競合を避けることができる場合があります。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">導入手順</h2>
        </div>

        <div className="space-y-6">
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">1. Tailwind CSSのインストールと設定</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  もしプロジェクトに Tailwind CSS が設定されていない場合は、まず Tailwind CSS をインストールし、
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">tailwind.config.ts</code> (または <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">.js</code>) ファイルと 
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">globals.css</code> ファイルを設定します。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-xs block">npm install -D tailwindcss postcss autoprefixer</code>
                  <code className="text-xs block mt-2">npx tailwindcss init -p</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">2. shadcn/uiの初期化</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  プロジェクトのルートディレクトリで以下のコマンドを実行します:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-xs block">npx shadcn@latest init</code>
                </div>
                <div className=" p-4 rounded-lg">
                  <h4 className="font-medium mb-2">初期化時の質問:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Which style would you like to use?</strong> - <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">new-york</code> (推奨) または <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">default</code></li>
                    <li><strong>Which color would you like to use as the base color?</strong> - <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">neutral</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">gray</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">zinc</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">stone</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">slate</code></li>
                    <li><strong>Would you like to use CSS variables for theming?</strong> - CSS変数の使用が推奨</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">3. components.jsonの設定確認</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  作成された <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">components.json</code> ファイルの内容を確認し、
                  必要に応じてエイリアス (<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">aliases</code>) などを設定します。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <pre className="text-xs overflow-x-auto">
{`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">4. コンポーネントの追加</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  必要なコンポーネントを以下のコマンドで追加します:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-xs block">npx shadcn@latest add button</code>
                  <code className="text-xs block mt-2">npx shadcn@latest add card</code>
                  <code className="text-xs block mt-2">npx shadcn@latest add dialog</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">5. コンポーネントの使用</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  追加されたコンポーネントは、指定したエイリアスを使用してインポートし、アプリケーション内で使用できます:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <pre className="text-xs overflow-x-auto">
{`import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}`}
                  </pre>
                </div>
                <div className=" p-4 rounded-lg">
                  <h4 className="font-medium mb-2">実装例:</h4>
                  <div className="space-x-2">
                    <Button variant="default">Default Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">追加の設定</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">スタイルのカスタマイズ</h3>
              <p className="text-sm">
                コンポーネントの見た目をカスタマイズするには、<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">className</code> プロパティに
                Tailwind CSS のクラスを追加します。また、CSS変数を使用している場合は、<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">globals.css</code>
                ファイル内の CSS 変数を変更することで、テーマ全体をカスタマイズできます。
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="font-medium mb-3">ダークモードの設定</h3>
              <p className="text-sm">
                ダークモードをサポートする場合は、<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">next-themes</code> ライブラリをインストールし、
                <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">ThemeProvider</code> をルートレイアウトに追加し、
                モード切り替えの UI を実装します。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Card className="border-none bg-slate-50 dark:bg-slate-800 shadow-md mb-6">
        <CardContent className="pt-6">
          <p className="text-center italic">
            これらのステップと注意点を守ることで、既存の Next.js プロジェクトに shadcn/ui をスムーズに導入できます。
            特に、初期化時の設定と React 19 を使用している場合の依存関係の処理には注意してください。
          </p>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-10">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          学習ガイドトップへ戻る
        </Link>
      </div>
    </main>
  );
} 