"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ShadcnUiTailwindPage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">shadcn/ui と Tailwind CSS の連携</h1>
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
            shadcn/ui と Tailwind CSS を組み合わせることで、開発者は多くの恩恵を受けることができます。それぞれの技術の強みが連携することで、<strong className="text-primary">効率的な開発ワークフロー、高いカスタマイズ性、そして一貫性のあるUIの構築</strong>が可能になります。
          </p>
        </CardContent>
      </Card>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">それぞれの技術の強み</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium">shadcn/ui の強み</h3>
            </div>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>美しくデザインされた、アクセシブルな UI コンポーネント</strong> を提供します。</li>
                <li><strong>Radix UI をベース</strong> にしており、アクセシビリティ（a11y）に優れたコンポーネントを提供します。</li>
                <li>npm パッケージとして配布されるのではなく、<strong>コンポーネントのソースコードを直接プロジェクトにコピーして使用する</strong> ため、依存関係を気にせず、必要なコンポーネントだけを導入できます。</li>
                <li><strong>Tailwind CSS を通じてスタイルをカスタマイズ</strong> できます。</li>
                <li><strong>柔軟性と拡張性が高く</strong>、コンポーネントを自由にカスタマイズできます。</li>
                <li><strong>React Server Components (RSC) をサポート</strong> しており、<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">components.json</code> の設定で自動的に <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">&quot;use client&quot;</code> ディレクティブを付与できます。</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium">Tailwind CSS の強み</h3>
            </div>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>高速で柔軟なユーティリティスタイリング</strong> を提供します。</li>
                <li><strong>スタイルのカスタマイズ性と軽量さを両立</strong> します。</li>
                <li><strong>テーマ設定やレスポンシブ対応が容易</strong> です。</li>
                <li>ユーティリティクラスを用いることで、<strong>HTML 上で直接スタイリング</strong> が可能です。</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">連携による恩恵と開発ワークフロー</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p className="mb-4">
              shadcn/ui と Tailwind CSS を組み合わせることで、以下のような恩恵を受けられます：
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <h3 className="font-medium mb-2">1. 迅速なUI構築</h3>
                <p className="text-sm">
                  shadcn/ui が提供する実務品質の UI コンポーネントと、Tailwind CSS のユーティリティクラスを組み合わせることで、<strong>コーディング量を減らし、迅速に UI を構築</strong> できます。
                  shadcn/ui は基本的な UI 要素を網羅しており、Tailwind CSS はそれらのスタイリングを効率的に行えます。
                </p>
              </div>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <h3 className="font-medium mb-2">2. 高いカスタマイズ性</h3>
                <p className="text-sm">
                  shadcn/ui のコンポーネントは Tailwind CSS をベースにスタイリングされているため、<strong>Tailwind CSS のユーティリティクラスを className プロパティを通じて自由に追加・変更</strong> できます。
                  これにより、プロジェクトのデザイン要件に合わせてコンポーネントの外観を柔軟にカスタマイズできます。
                </p>
              </div>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <h3 className="font-medium mb-2">3. デザインの一貫性</h3>
                <p className="text-sm">
                  Tailwind CSS のユーティリティクラスを使用することで、<strong>アプリケーション全体でデザインの一貫性を保ちやすく</strong> なります。
                  shadcn/ui のコンポーネントもこのデザインシステムに沿ってスタイリングできるため、統一感のある UI を容易に実現できます。
                </p>
              </div>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <h3 className="font-medium mb-2">4. アクセシビリティの確保</h3>
                <p className="text-sm">
                  shadcn/ui は Radix UI をベースにしているため、<strong>アクセシビリティ（a11y）が考慮されたコンポーネント</strong> を利用できます。
                  Tailwind CSS を用いたカスタマイズ時にも、ARIA属性などを適切に付与することで、アクセシビリティを維持した開発が可能です。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">具体的な開発ワークフローとコード例</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p className="mb-4">
              一般的な開発ワークフローは以下のようになります：
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-6">
              <li><strong>Next.js プロジェクトの作成と Tailwind CSS の設定</strong>: まず、Next.js のプロジェクトを作成し、Tailwind CSS を設定します。</li>
              <li><strong>shadcn/ui の初期化</strong>: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">npx shadcn@latest init</code> コマンドを実行し、shadcn/ui をプロジェクトに初期化します。</li>
              <li><strong>コンポーネントの追加</strong>: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">npx shadcn@latest add &lt;component-name&gt;</code> コマンドを使用して、必要なコンポーネントを追加します。</li>
              <li><strong>コンポーネントの利用とカスタマイズ</strong>: 追加したコンポーネントを React コンポーネントとしてインポートし、JSX 内で使用します。</li>
            </ol>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
              <h3 className="font-medium mb-3">コード例:</h3>
              <div className="bg-slate-200 dark:bg-slate-900 p-4 rounded-md text-xs font-mono overflow-x-auto mb-4 whitespace-pre-wrap">
                {`"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-4">
        shadcn/ui + Tailwind CSS Example
      </h1>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        カスタマイズされたボタン
      </Button>
      <div className="mt-4">
        <Button variant="outline">
          アウトラインボタン
        </Button>
      </div>
    </main>
  );
}`}
              </div>
              <p className="text-sm">
                実際の表示例:
              </p>
              <div className="mt-4 space-y-4">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                  カスタマイズされたボタン
                </Button>
                <Button variant="outline" className="w-full">
                  アウトラインボタン
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Card className="border-none bg-slate-50 dark:bg-slate-800 shadow-md mb-6">
        <CardContent className="pt-6">
          <p className="text-center italic">
            shadcn/ui と Tailwind CSS の組み合わせは、<strong>UI 開発の効率性、カスタマイズ性、デザインの一貫性、そしてアクセシビリティ</strong> の面で大きなメリットをもたらします。
            shadcn/ui の高品質なコンポーネントをベースに、Tailwind CSS の柔軟なスタイリング機能を活用することで、開発者は迅速かつ効率的に、独自のデザイントークンに沿った洗練された UI を構築できます。
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