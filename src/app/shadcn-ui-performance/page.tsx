"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { 
  ArrowLeft, 
  Home, 
  Gauge, 
  Server, 
  Cpu, 
  Clock, 
  ImageIcon,
  Loader2,
  Package,
  Check
} from "lucide-react";
import { Icon } from "@/components/ui/icon";

export default function ShadcnUiPerformancePage() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <Icon
            icon={Gauge}
            className="h-7 w-7 mr-2 text-primary"
            animation="none"
            label="パフォーマンス"
          />
          shadcn/ui を用いたパフォーマンス最適化戦略
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
            shadcn/ui を用いたアプリケーションのパフォーマンスを最適化する上で重要なのは、<strong className="text-primary">React のレンダリング戦略を適切に理解し、適用すること</strong>です。React Server Components (RSC)、クライアントコンポーネント、遅延読み込みなどの概念に触れながら、具体的な手法をご提案します。
          </p>
        </CardContent>
      </Card>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={Server}
            className="h-6 w-6 text-primary"
            animation="none"
            label="RSC"
          />
          <h2 className="text-2xl font-semibold">React Server Components (RSC) の優先</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p className="mb-4">
              <strong>可能な限り、React Server Components (RSC) を優先的に使用する</strong>ことが、初期ロード時のパフォーマンス向上に大きく貢献します。RSC はサーバー側でレンダリングされ、HTML としてクライアントに送信されるため、初期表示に必要なJavaScriptの量を減らし、First Contentful Paint (FCP) を高速化します。
            </p>
            <p className="mb-4">
              Next.js App Router を利用している場合、デフォルトでコンポーネントは RSC として扱われます。shadcn/ui は UI コンポーネントのライブラリであり、<strong>多くのコンポーネントはクライアント側のインタラクティビティを必要としません</strong>。例えば、レイアウトや基本的な表示要素などは RSC として実装できる可能性があります。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={Cpu}
            className="h-6 w-6 text-primary"
            animation="none"
            label="クライアント最適化"
          />
          <h2 className="text-2xl font-semibold">クライアントコンポーネントの最適化</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p className="mb-4">
              クライアント側のインタラクティビティが必要なコンポーネントでは、<strong>&quot;use client&quot; ディレクティブを使用して明示的にクライアントコンポーネントとして定義</strong>する必要があります。<code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">components.json</code> ファイルの <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">rsc</code> オプションを <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">true</code> に設定すると、CLI で追加されるコンポーネントに自動的に <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm mx-1">&quot;use client&quot;</code> ディレクティブが付与されます。
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium flex items-center">
                <Icon
                  icon={Cpu}
                  className="h-4 w-4 mr-1 text-slate-700 dark:text-slate-300"
                  label="最小化"
                />
                クライアントコンポーネントの最小化
              </h3>
            </div>
            <CardContent className="pt-4">
              <p className="text-sm mb-3">
                <strong>クライアントコンポーネントの数を最小限に抑える</strong>ことで、クライアントに送信される JavaScript の量を減らし、アプリケーションのロード時間を短縮できます。
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md text-xs font-mono overflow-x-auto">
                {`// 必要な場合のみクライアントコンポーネントとして定義
"use client";

export function InteractiveComponent() {
  // クライアント側の処理が必要なコンポーネント
}`}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-medium flex items-center">
                <Icon
                  icon={Cpu}
                  className="h-4 w-4 mr-1 text-slate-700 dark:text-slate-300"
                  label="再レンダリング"
                />
                再レンダリングの最適化
              </h3>
            </div>
            <CardContent className="pt-4">
              <p className="text-sm mb-3">
                React の再レンダリングを最適化するために、<strong>useMemo や useCallback を適切に使用する</strong>ことが重要です。
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md text-xs font-mono overflow-x-auto">
                {`const memoizedValue = useMemo(() => {
  // 計算コストの高い処理
}, [dependencies]);`}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={Clock}
            className="h-6 w-6 text-primary"
            animation="none"
            label="遅延読み込み"
          />
          <h2 className="text-2xl font-semibold">遅延読み込みの活用</h2>
        </div>
        
        <Card className="border-none shadow-md mb-6">
          <CardContent className="pt-6">
            <p className="mb-4">
              <strong>モーダルやグラフなど、初期ロード時に必要のないコンポーネントは、dynamic() と React.Suspense を組み合わせて遅延読み込み</strong>することを推奨します。これにより、アプリケーションの初期ロード時間を短縮し、ユーザーが必要としたときにのみコンポーネントのコードがロードされるようになります。
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md text-xs font-mono overflow-x-auto mt-4">
              {`// 遅延読み込みの実装例
const LazyDialog = dynamic(() => import("@/components/ui/dialog"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});`}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <Icon
            icon={Gauge}
            className="h-6 w-6 text-primary"
            animation="none"
            label="その他の最適化"
          />
          <h2 className="text-2xl font-semibold">その他の最適化手法</h2>
        </div>
        
        <div className="space-y-4">
          <Card className="border border-slate-200 dark:border-slate-800 overflow-hidden">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Icon
                      icon={ImageIcon}
                      className="h-4 w-4 mr-1 text-slate-500"
                      label="画像最適化"
                    />
                    画像の最適化
                  </h3>
                  <p className="text-sm">
                    <strong>Next.js の &lt;Image /&gt; コンポーネントを使用し、WebP 形式での提供や遅延読み込みを適用</strong>することで最適化します。
                    画像のサイズ最適化やレスポンシブな画像の提供、viewport に入った画像の遅延読み込みなどを自動的に行ってくれます。
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
                      icon={Loader2}
                      className="h-4 w-4 mr-1 text-slate-500"
                      label="ローディング状態"
                    />
                    ローディング状態の表示
                  </h3>
                  <p className="text-sm">
                    コンポーネントの読み込みに時間がかかる場合、<strong>shadcn/ui の Skeleton コンポーネントなどを活用してローディング状態を視覚的に表示</strong>することで、
                    ユーザー体験を向上させることができます。
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
                      icon={Package}
                      className="h-4 w-4 mr-1 text-slate-500"
                      label="依存関係"
                    />
                    不要な依存関係の削減
                  </h3>
                  <p className="text-sm">
                    アプリケーションで使用しないライブラリやコンポーネントは削除し、<strong>依存関係を最小限に保つ</strong>ことで、バンドルサイズを削減できます。
                    shadcn/ui は必要なコンポーネントだけを追加できるため、この点で有利です。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Card className="border-none bg-slate-50 dark:bg-slate-800 shadow-md mb-6">
        <CardContent className="pt-6">
          <p className="text-center italic">
            これらのパフォーマンス最適化戦略を、shadcn/ui を用いたアプリケーション開発の各段階で意識的に適用することで、高速で快適なユーザー体験を提供することが可能になります。
            特に、<strong>RSC の優先、クライアントコンポーネントの最小化、そして遅延読み込みの活用</strong>は、初期ロード時のパフォーマンス改善に非常に効果的です。
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