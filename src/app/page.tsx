"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

interface Quiz {
  question: string;
  answer: string;
}

interface EssayQuestion {
  question: string;
}

interface GlossaryTerm {
  term: string;
  definition: string;
}

// クイズデータ
const quizzes: Quiz[] = [
  {
    question: "shadcn/ui の主な特徴を2つ説明してください。それは従来のUIライブラリとどのように異なりますか？",
    answer: "shadcn/ui は、美しくデザインされたアクセシブルなUIコンポーネントのセットであり、コード配布プラットフォームでもあります。従来のUIライブラリとは異なり、npmパッケージとして配布されず、必要なコンポーネントのソースコードを直接プロジェクトにコピーして使用し、Tailwind CSSで自由にカスタマイズできる点が特徴です。"
  },
  {
    question: "Next.js プロジェクトに shadcn/ui を導入する基本的な手順を説明してください。CLIを使用する場合の最初のコマンドは何ですか？",
    answer: "Next.js プロジェクトに shadcn/ui を導入する基本的な手順は、まずプロジェクトのルートディレクトリで npx shadcn@latest init コマンドを実行し、その後表示される質問に答えて設定を行います。これにより、components.json ファイルなどの初期設定ファイルが作成されます。"
  },
  {
    question: "components.json ファイルの役割は何ですか？その中の重要な設定項目を2つ挙げ、それぞれの目的を説明してください。",
    answer: "components.json ファイルは、shadcn/ui CLI がプロジェクトのセットアップ方法を理解し、プロジェクトに合わせてカスタマイズされたコンポーネントを生成するために使用する設定ファイルです。重要な設定項目としては、style（コンポーネントの基本スタイル）と tailwind オブジェクト内の config（Tailwind CSS設定ファイルのパス）、css（Tailwind CSSインポートファイルのパス）、baseColor（基本カラーパレット）などがあります。"
  },
  {
    question: "Tailwind CSS を shadcn/ui と共に使用する利点を2つ挙げてください。また、Tailwind CSS v4 における tailwind.config.js の扱いについて説明してください。",
    answer: "Tailwind CSS を shadcn/ui と共に使用する利点は、高いカスタマイズ性と軽量さです。Tailwind CSS のユーティリティクラスを活用することで、コンポーネントのスタイルを効率的に設定・変更でき、プロジェクトのデザイン要件に柔軟に対応できます。Tailwind CSS v4 では、tailwind.config.js ファイルのパスを components.json で指定する必要はありません。"
  },
  {
    question: "shadcn/ui のコンポーネントのスタイリングをカスタマイズする主な方法を2つ説明してください。className プロパティと cn() 関数の役割について触れてください。",
    answer: "shadcn/ui のコンポーネントのスタイリングをカスタマイズする主な方法は、コンポーネントを使用する際に className プロパティを通じて Tailwind CSS のユーティリティクラスを追加する方法と、コンポーネント内部のスタイルを直接変更する方法です。cn() 関数は、複数の条件付きクラス名を簡潔に結合するために使用されます。"
  },
  {
    question: "Next.js において、ダークモードを shadcn/ui を用いて実装する基本的な手順を説明してください。next-themes ライブラリの役割は何ですか？",
    answer: "Next.js でダークモードを shadcn/ui を用いて実装する基本的な手順は、まず next-themes ライブラリをインストールし、ThemeProvider を作成してルートレイアウトでラップします。その後、モード切り替えを行うためのUIコンポーネント（例えば Switch）を実装します。next-themes ライブラリは、アプリケーション全体でテーマの切り替えと永続化を簡単に行うための機能を提供します。"
  },
  {
    question: "shadcn/ui がアクセシビリティ（a11y）に配慮している点はどのようなところですか？具体的な技術やライブラリ名に言及してください。",
    answer: "shadcn/ui は、ベースとなるUIプリミティブとしてアクセシビリティに優れた Radix UI を採用しており、aria-* 属性による明示的なラベル付けやキーボードナビゲーション・フォーカス制御などが考慮されています。shadcn/ui + Radix UI の組み合わせにより、自動的に高水準のアクセシビリティが担保されるように設計されています。"
  },
  {
    question: "React Server Components (RSC) と shadcn/ui の関連性について説明してください。\"use client\" ディレクティブはどのような状況で使用されますか？",
    answer: "React Server Components (RSC) はサーバー側でレンダリングされるコンポーネントであり、shadcn/ui はクライアント側のインタラクティビティを提供するコンポーネントも多く含んでいます。クライアント側の機能（イベントハンドリング、state など）が必要なコンポーネントでは、ファイルの先頭に \"use client\" ディレクティブを記述することで、クライアントコンポーネントとして扱われます。"
  },
  {
    question: "shadcn/ui のコンポーネントを npm パッケージとして配布しない理由は何ですか？このアプローチの利点は何ですか？",
    answer: "shadcn/ui のコンポーネントを npm パッケージとして配布しない主な理由は、コードの所有権と制御を開発者に与え、コンポーネントの構築方法とスタイルを自由に決定できるようにするためです。このアプローチの利点は、スタイルと実装が密結合になることを避け、プロジェクトのニーズに合わせてコンポーネントを柔軟にカスタマイズできることです。"
  },
  {
    question: "shadcn/ui で利用できる主要なUIコンポーネントのカテゴリを3つ挙げ、それぞれのカテゴリに属するコンポーネントの例を1つずつ挙げてください。",
    answer: "shadcn/ui で利用できる主要なUIコンポーネントのカテゴリとしては、例えば「入力と選択」（Button, Input, Checkbox など）、「表示」（Alert, Card, Avatar など）、「ナビゲーション」（Navigation Menu, Tabs, Breadcrumb など）が挙げられます。"
  }
];

// 論述問題データ
const essayQuestions: EssayQuestion[] = [
  {
    question: "shadcn/ui を既存の Next.js プロジェクトに導入する際の注意点と、スムーズに導入するためのステップについて、具体的な設定ファイルやコマンドを挙げながら説明してください。"
  },
  {
    question: "shadcn/ui のコンポーネント設計思想である「構造とスタイルの分離」について、具体的なコンポーネント（例：Button や Dialog）を例に挙げながら詳しく解説してください。この設計思想の利点と潜在的な課題についても議論してください。"
  },
  {
    question: "shadcn/ui と Tailwind CSS を組み合わせることで、開発者はどのような恩恵を受けられるでしょうか？具体的な開発ワークフローやコード例を交えながら、それぞれの技術の強みがどのように連携するのかを説明してください。"
  },
  {
    question: "shadcn/ui を用いたアプリケーションにおけるパフォーマンス最適化戦略について、React Server Components (RSC)、クライアントコンポーネント、遅延読み込みなどの概念に触れながら、具体的な手法を提案してください。"
  },
  {
    question: "shadcn/ui の柔軟なカスタマイズ性を活かし、特定のブランドガイドラインに沿ったUIを構築するプロセスについて、テーマ設定、コンポーネントのオーバーライド、独自のスタイルの追加などの観点から具体的に説明してください。"
  }
];

// 用語集データ
const glossaryTerms: GlossaryTerm[] = [
  {
    term: "shadcn/ui",
    definition: "Radix UI と Tailwind CSS をベースにした、カスタマイズ可能な React UI コンポーネントのセット。npm パッケージとして配布されず、ソースコードを直接プロジェクトにコピーして使用する。"
  },
  {
    term: "Radix UI",
    definition: "アクセシビリティに優れた、ヘッドレス（スタイリングを持たない）UI プリミティブのライブラリ。shadcn/ui の多くのコンポーネントの基盤となっている。"
  },
  {
    term: "Tailwind CSS",
    definition: "ユーティリティファーストの CSS フレームワーク。HTML に直接適用できる再利用可能なクラスを提供し、迅速なスタイリングを可能にする。shadcn/ui の主要なスタイリングエンジン。"
  },
  {
    term: "Next.js",
    definition: "React ベースのフルスタック Web フレームワーク。サーバーサイドレンダリング (SSR) や静的サイト生成 (SSG) などの機能を提供する。shadcn/ui と組み合わせて使用されることが多い。"
  },
  {
    term: "React Server Components (RSC)",
    definition: "Next.js 13 以降で導入された新しい React コンポーネントのタイプ。サーバー側でレンダリングされ、クライアント側の JavaScript サイズを削減し、初期ロードパフォーマンスを向上させる。"
  },
  {
    term: "\"use client\"",
    definition: "React Server Components 内で使用され、そのコンポーネントとその子コンポーネントをクライアントサイドでレンダリングすることを明示するディレクティブ。"
  },
  {
    term: "components.json",
    definition: "shadcn/ui CLI の設定ファイル。プロジェクトのスタイル、Tailwind CSS の設定、エイリアスなどを定義する。"
  },
  {
    term: "npx shadcn@latest init",
    definition: "shadcn/ui をプロジェクトに初期化するための CLI コマンド。components.json ファイルなどを生成する。"
  },
  {
    term: "npx shadcn@latest add [component-name]",
    definition: "shadcn/ui の特定のコンポーネントをプロジェクトに追加するための CLI コマンド。コンポーネントのソースコードをコピーする。"
  },
  {
    term: "className",
    definition: "React の標準的なプロパティ。コンポーネントに CSS クラスを適用するために使用される。shadcn/ui コンポーネントのスタイリングをカスタマイズする主要な方法の一つ。"
  },
  {
    term: "cn()",
    definition: "clsx と tailwind-merge を組み合わせたユーティリティ関数。条件に基づいて複数の Tailwind CSS クラス名を効率的に結合するために使用される。"
  },
  {
    term: "Theming",
    definition: "アプリケーション全体のスタイル（色、フォントなど）を定義し、一貫性のある外観を実現する仕組み。shadcn/ui は CSS 変数またはユーティリティクラスを用いたテーマ設定をサポートする。"
  },
  {
    term: "next-themes",
    definition: "Next.js でダークモードやカスタムテーマを簡単に実装するための React ライブラリ。"
  },
  {
    term: "アクセシビリティ (a11y)",
    definition: "Web コンテンツや UI が、障害を持つ人々を含むすべてのユーザーにとって利用可能であるように設計する原則。shadcn/ui は Radix UI をベースに、アクセシビリティに配慮したコンポーネントを提供している。"
  },
  {
    term: "Web Vitals",
    definition: "Google が提唱する、ウェブページのユーザーエクスペリエンスを評価するための主要な指標（LCP, CLS, FID）。shadcn/ui を使用する際も、これらの指標を意識したパフォーマンス最適化が重要となる。"
  }
];

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">shadcn/ui 学習ガイド</h1>
          <p className="text-slate-500 dark:text-slate-400">モダンなUIライブラリを活用するための包括的なガイド</p>
        </div>
        <ThemeToggle />
      </div>
      
      {/* イントロダクション */}
      <Card className="mb-12 border-none shadow-md">
        <CardContent className="pt-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            このガイドでは、<strong className="text-primary">shadcn/ui</strong> の基本から応用まで、実践的な知識を体系的に学ぶことができます。
            Tailwind CSSと組み合わせた柔軟なUIコンポーネント設計から、特定のプロジェクト要件に合わせたカスタマイズまで、
            効率的な開発のための知識を身につけましょう。
          </p>
        </CardContent>
      </Card>

      {/* ShadcnUI概要のセクション */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">ShadcnUI概要</h2>
        </div>
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className=" border-b border-slate-200 dark:border-slate-700">
            <CardTitle>ShadcnUI概要</CardTitle>
          </CardHeader>
          <CardContent className="pt-2 space-y-6">

            <div className="prose dark:prose-invert max-w-none">
              <p>
                shadcn/ui は、<strong>美しくデザインされた、アクセス可能な React UI コンポーネントのセット</strong>であり、
                <strong>Tailwind CSS</strong> と <strong>Radix UI</strong> を基盤としています。
                npm パッケージとして配布されず、<strong>必要なコンポーネントのソースコードを CLI 経由でプロジェクトに直接コピーして使用</strong>する点が特徴です。
                これにより、コンポーネントの<strong>カスタマイズが容易</strong>になり、プロジェクトの<strong>依存関係にも影響を与えません</strong>。
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">今後の発展と最新技術への対応</h3>
                <p>
                  プロジェクトの今後の発展としては、ソースから<strong>Tailwind v4</strong> と <strong>React 19</strong> への<strong>フルサポート</strong>が
                  積極的に進められていることが伺えます。CLI で Tailwind v4 を使用したプロジェクトの初期化が可能になり、
                  コンポーネントも最新技術に対応するようにアップデートされています。また、非推奨となるコンポーネントの代替として
                  新しいライブラリ（例: `toast` コンポーネントの代わりに `sonner` を推奨）が導入されるなど、
                  <strong>より良い UI および開発体験の提供</strong>を目指していると考えられます。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* クイズセクション */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">クイズ (短答形式)</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {quizzes.map((quiz, index) => (
            <AccordionItem 
              key={index} 
              value={`quiz-${index}`}
              className="border border-slate-200 dark:border-slate-800 rounded-md mb-3 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-medium px-4 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">{index + 1}</span>
                  </div>
                  <span>{quiz.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-5  border-t border-slate-200 dark:border-slate-700">
                  {quiz.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      
      {/* 論述問題セクション */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">論述問題</h2>
        </div>
        
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className=" border-b border-slate-200 dark:border-slate-700">
            <CardTitle>論述式の問題</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              {essayQuestions.map((question, index) => (
                <li key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-100 dark:bg-slate-800 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                    {index === 4 ? (
                      <Link href="/shadcn-ui-customize" className="font-medium hover:underline text-blue-600 dark:text-blue-400">
                        {question.question}
                      </Link>
                    ) : index === 3 ? (
                      <Link href="/shadcn-ui-performance" className="font-medium hover:underline text-blue-600 dark:text-blue-400">
                        {question.question}
                      </Link>
                    ) : index === 2 ? (
                      <Link href="/shadcn-ui-tailwind" className="font-medium hover:underline text-blue-600 dark:text-blue-400">
                        {question.question}
                      </Link>
                    ) : index === 1 ? (
                      <Link href="/shadcn-ui-structure" className="font-medium hover:underline text-blue-600 dark:text-blue-400">
                        {question.question}
                      </Link>
                    ) : index === 0 ? (
                      <Link href="/shadcn-ui-setup" className="font-medium hover:underline text-blue-600 dark:text-blue-400">
                        {question.question}
                      </Link>
                    ) : (
                      <p className="font-medium">{question.question}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
      
      {/* 用語集セクション */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary h-8 w-1 rounded-full"></div>
          <h2 className="text-2xl font-semibold">用語集</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glossaryTerms.map((term, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className=" border-b border-slate-200 dark:border-slate-700 pt-3 pb-3">
                <CardTitle className="text-lg">{term.term}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">{term.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* フッター */}
      <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>shadcn/ui 学習リソース © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}