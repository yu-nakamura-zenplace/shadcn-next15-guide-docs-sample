"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ShadcnUiStructurePage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">shadcn/ui のコンポーネント設計思想</h1>
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
            shadcn/ui のコンポーネント設計における「構造とスタイルの分離」について、具体的なコンポーネントを例に挙げながら詳しく解説します。
            この設計思想は、<strong className="text-primary">コンポーネントの機能やアクセシビリティといった本質的な部分（構造）と、見た目や装飾といったスタイルに関する部分を明確に分離する</strong>という考え方です。
          </p>
        </CardContent>
      </Card>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">構造とスタイルの分離の概念</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium">構造 (Structure)</h3>
            </div>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li>コンポーネントの<strong>HTML構造、インタラクション、アクセシビリティ</strong>を担当</li>
                <li><strong>Radix UI</strong> をベースに、headless UIプリミティブを活用</li>
                <li>特定の機能に特化したライブラリ（React DayPicker、React Hook Form など）を利用</li>
                <li>アクセシビリティ（ARIA属性）の確保</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium">スタイル (Style)</h3>
            </div>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>Tailwind CSS</strong> を活用した視覚的なスタイリング</li>
                <li><strong>CVA (Class Variance Authority)</strong> によるバリアント管理</li>
                <li>ユーティリティクラスによる柔軟なカスタマイズ</li>
                <li>テーマ設定やダークモード対応</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">具体的なコンポーネントの例</h2>
        </div>

        <div className="space-y-8">
          {/* Button コンポーネントの例 */}
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Button コンポーネント</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">Button</code> コンポーネントは、
                  基本的な HTML の <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">&lt;button&gt;</code> 要素をベースに、
                  <strong>React.forwardRef</strong> を使用して参照を受け渡し可能にし、アクセシビリティを確保しています。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">実装例:</h4>
                  <div className="space-y-2">
                    <Button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                      カスタムボタン
                    </Button>
                    <Button variant="secondary">
                      セカンダリーボタン
                    </Button>
                    <Button size="lg">
                      大きなボタン
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dialog コンポーネントの例 */}
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Dialog コンポーネント</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">Dialog</code> コンポーネントは、
                  Radix UI の headless コンポーネントをベースに、複数の子コンポーネントで構成され、アクセシビリティとインタラクションを提供します。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">実装例:</h4>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">ダイアログを開く</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>確認</DialogTitle>
                        <DialogDescription>この操作は取り消せません。</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="destructive">削除</Button>
                        <Button variant="secondary">キャンセル</Button>
                      </div>
                      <DialogFooter>
                        {/* フッターコンテンツ */}
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">この設計思想の利点</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>高いカスタマイズ性</strong>: Tailwind CSSを用いて柔軟にスタイルをカスタマイズ可能</li>
                <li><strong>コードの保守性</strong>: スタイルと機能の変更が互いに影響を与えにくい</li>
                <li><strong>再利用性の向上</strong>: 同じ構造のコンポーネントを様々な場面で再利用可能</li>
                <li><strong>学習コストの分散</strong>: 各技術に特化した知識を活かせる</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>依存関係の管理</strong>: 必要なコンポーネントだけを導入可能</li>
                <li><strong>アクセシビリティの確保</strong>: Radix UIによる堅牢な基盤</li>
                <li><strong>デザインシステムとの統合</strong>: プロジェクトのデザイントークンに合わせやすい</li>
                <li><strong>パフォーマンス</strong>: 不要なコードを含まない最適化された構造</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">潜在的な課題</h2>
        </div>
        
        <Card className="border border-slate-200 dark:border-slate-800">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="p-4  rounded-lg">
                <h3 className="font-medium mb-2">1. 初期設定の必要性</h3>
                <p className="text-sm">
                  インストール後に初期化やコンポーネントの追加を個別に行う必要があります。
                </p>
              </div>
              
              <div className="p-4  rounded-lg">
                <h3 className="font-medium mb-2">2. Tailwind CSSの知識</h3>
                <p className="text-sm">
                  スタイリングを自由に行うためには、Tailwind CSSのユーティリティクラスに関する知識が必要です。
                </p>
              </div>
              
              <div className="p-4  rounded-lg">
                <h3 className="font-medium mb-2">3. 大規模アプリケーションにおける管理</h3>
                <p className="text-sm">
                  多くのコンポーネントをカスタマイズする場合、スタイルの一貫性を保つための設計やルール作りが重要になります。
                </p>
              </div>
              
              <div className="p-4  rounded-lg">
                <h3 className="font-medium mb-2">4. コンポーネントの組み合わせ</h3>
                <p className="text-sm">
                  複数のプリミティブなコンポーネントを組み合わせて目的のUIを実現する必要がある場合があります。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Card className="border-none bg-slate-50 dark:bg-slate-800 shadow-md mb-6">
        <CardContent className="pt-6">
          <p className="text-center italic">
            shadcn/ui の「構造とスタイルの分離」という設計思想は、<strong>高い柔軟性とカスタマイズ性を求める開発者にとって非常に強力なメリット</strong>を提供します。
            Radix UI による堅牢な構造とアクセシビリティ、そして Tailwind CSS による自由なスタイリングを組み合わせることで、
            独自のデザイントークンに沿った洗練された UI を効率的に構築できます。
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