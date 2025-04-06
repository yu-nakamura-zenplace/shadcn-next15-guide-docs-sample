"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { 
  ArrowLeft, 
  Home, 
  Palette, 
  SquarePen, 
  RefreshCw, 
  Download, 
  Edit, 
  Paintbrush,
  Code,
  FileCode
} from "lucide-react";
import { Icon } from "@/components/ui/icon";

export default function ShadcnUiCustomizePage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <Icon
            icon={Palette}
            className="h-7 w-7 mr-2 text-primary"
            animation="none"
            label="カスタマイズ"
          />
          shadcn/ui の柔軟なカスタマイズ性
        </h1>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium hover:underline flex items-center">
            <Icon
              icon={Home}
              className="h-4 w-4 mr-1 text-slate-500"
              animateOnHover
              label="ホーム"
            />
            ← ホームに戻る
          </Link>
          <ThemeToggle />
        </div>
      </div>
      
      <Card className="mb-8 border border-slate-200 dark:border-slate-800">
        <CardContent className="pt-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            shadcn/ui の柔軟なカスタマイズ性を活かし、特定のブランドガイドラインに沿ったUIを構築するプロセスについてご説明します。このプロセスは、<strong className="text-primary">テーマ設定、コンポーネントのオーバーライド、独自のスタイルの追加</strong>といった観点から具体的に進めることができます。
          </p>
        </CardContent>
      </Card>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={Paintbrush}
            className="h-6 w-6 text-primary"
            animation="none"
            label="テーマ設定"
          />
          <h2 className="text-2xl font-semibold">テーマ設定</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p className="mb-4">
              shadcn/ui のテーマ設定は、<strong>CSS変数またはTailwind CSSのユーティリティクラス</strong>を使用して行うことができます。
              <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">components.json</code> ファイルの 
              <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">tailwind.cssVariables</code> の値を 
              <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">true</code> に設定するとCSS変数を使用し、
              <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">false</code> に設定するとユーティリティクラスを使用します。
              この設定は<strong>初期化後に変更できない</strong>ため、プロジェクトの初期段階で決定する必要があります。
            </p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium flex items-center">
                <Icon
                  icon={FileCode}
                  className="h-4 w-4 mr-1 text-slate-700 dark:text-slate-300"
                  label="CSS変数"
                />
                CSS変数を使用する場合
              </h3>
            </div>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li>
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">app/globals.css</code> ファイル内の 
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs mx-1">:root</code> および 
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs mx-1">.dark</code> セレクタで、背景色やプライマリーカラーなど、
                  <strong>多くのCSS変数を定義</strong>できます。
                </li>
                <li>
                  shadcn/ui は、コンポーネントの背景色には <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">--background</code> 変数を、
                  テキストカラーには <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">--foreground</code> 変数を使用する
                  <strong>シンプルな規約</strong>に従っています。
                </li>
                <li>
                  新しい色を追加するには、CSS変数を追加し、必要に応じて <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">tailwind.config.js</code> にも追加します。
                </li>
                <li>
                  Tailwind v4 では、HSLカラーがOKLCHに変換され、<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">@theme inline</code> オプションで
                  JavaScriptでの色の使用が容易になります。
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium flex items-center">
                <Icon
                  icon={Palette}
                  className="h-4 w-4 mr-1 text-slate-700 dark:text-slate-300"
                  label="ユーティリティ"
                />
                ユーティリティクラスを使用する場合
              </h3>
            </div>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li>
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">app/globals.css</code> を編集する代わりに、
                  Tailwind CSSの既存のユーティリティクラス（例: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">bg-zinc-950</code>）を
                  直接コンポーネントに適用します。
                </li>
                <li>
                  この方法では、CSS変数の管理は行いません。
                </li>
                <li>
                  直感的で理解しやすいアプローチですが、テーマの一貫性を維持するには追加の作業が必要になる場合があります。
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={RefreshCw}
            className="h-6 w-6 text-primary"
            animation="none"
            label="オーバーライド"
          />
          <h2 className="text-2xl font-semibold">コンポーネントのオーバーライド</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p>
              shadcn/ui は、<strong>インストール不要でソースコードをコピーして使用できる</strong>コンポーネント集であるため、特定のコンポーネントのデザインをブランドガイドラインに合わせて直接変更することが可能です。
            </p>
          </CardContent>
        </Card>
        
        <div className="space-y-4 mt-6">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon
                      icon={Download}
                      className="h-4 w-4 mr-1 text-slate-500"
                      label="ダウンロード"
                    />
                    コンポーネントのダウンロード
                  </h3>
                  <p className="text-sm">
                    <strong>コンポーネントのコードはCLIでダウンロード</strong>できます。例えば、
                    <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs mx-1">npx shadcn@latest add button</code> を実行すると、
                    Buttonコンポーネントのコードが <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">components/ui/button.tsx</code> に追加されます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon
                      icon={Edit}
                      className="h-4 w-4 mr-1 text-slate-500"
                      label="編集"
                    />
                    コンポーネントの直接編集
                  </h3>
                  <p className="text-sm">
                    ダウンロードしたコンポーネントのJSX構造やTailwind CSSのクラス名を直接編集することで、
                    <strong>コンポーネントのスタイルを完全にオーバーライド</strong>できます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon
                      icon={SquarePen}
                      className="h-4 w-4 mr-1 text-slate-500"
                      label="バリアント"
                    />
                    バリアントの活用
                  </h3>
                  <p className="text-sm">
                    コンポーネントによっては、<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">variant</code> や 
                    <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">size</code> などの<strong>独自のセレクタ（props）</strong>が用意されており、
                    <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">cva</code> (Class Variance Authority) を使用すると、
                    バリアントをより構造的に管理できます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={Code}
            className="h-6 w-6 text-primary"
            animation="none"
            label="スタイル追加"
          />
          <h2 className="text-2xl font-semibold">独自のスタイルの追加</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p>
              shadcn/ui のコンポーネントに加えて、<strong>独自のCSSスタイル</strong>を追加することも容易です。
            </p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium flex items-center">
                <Icon
                  icon={Palette}
                  className="h-4 w-4 mr-1 text-slate-700 dark:text-slate-300"
                  label="Tailwind"
                />
                Tailwind CSSの活用
              </h3>
            </div>
            <CardContent className="pt-4">
              <p className="text-sm mb-3">
                Tailwind CSSが提供する豊富なユーティリティクラスを組み合わせることで、必要なスタイルを効率的に実現できます。
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md text-xs font-mono overflow-x-auto">
                &lt;button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"&gt;
                  カスタムボタン
                &lt;/button&gt;
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium flex items-center">
                <Icon
                  icon={FileCode}
                  className="h-4 w-4 mr-1 text-slate-700 dark:text-slate-300"
                  label="CSS"
                />
                カスタムCSSの記述
              </h3>
            </div>
            <CardContent className="pt-4">
              <p className="text-sm mb-3">
                必要に応じて、グローバルなCSSファイルや、個別のコンポーネントのCSSファイルに<strong>独自のCSSルール</strong>を記述できます。
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md text-xs font-mono overflow-x-auto">
                {`/* globals.css */
                .brand-gradient {
                  background: linear-gradient(to right, #3b82f6, #10b981);
                }`}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Card className="border-none bg-slate-50 dark:bg-slate-800 shadow-md mb-6">
        <CardContent className="pt-6">
          <p className="text-center italic">
            このように、shadcn/ui は、テーマ設定による全体的なスタイルの調整、コンポーネントの直接的な編集による詳細なカスタマイズ、
            そして独自のスタイルの追加という柔軟な方法を提供することで、特定のブランドガイドラインに完全に合致するUIの構築を支援します。
            重要なのは、shadcn/ui の<strong>構造とスタイルの分離</strong>という思想を理解し、プロジェクトの要件に応じて適切なカスタマイズ戦略を選択することです。
          </p>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-10">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
          <Icon
            icon={ArrowLeft}
            className="h-4 w-4"
            animateOnHover
            label="戻る"
          />
          学習ガイドトップへ戻る
        </Link>
      </div>
    </main>
  );
}