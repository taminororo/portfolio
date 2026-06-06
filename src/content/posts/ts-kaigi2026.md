---
title: TSKaigi2026
description: ブログを作りました
date: 2026-04-29
lang: ja
---


**TSKaigi2026 学生支援スポンサー様一覧**

- 株式会社アイスタイル
- 株式会社アサイン
- 株式会社SmartHR
- ソフトバンク株式会社 satto事業開発本部
- 株式会社ドワンゴ
- 株式会社プレイド
- レバレジーズ株式会社
- 株式会社LayerX

TSKaigi2026に参加しました。学生スポンサーを支援してくださった皆様、ありがとうございます。

## 事前イベント
事前イベントでは、企業の方から企業の紹介だけでなく、当日気をつけるべきこと、注目しているセッションの内容などを雑談していただき、助かりました。

## スカラシップランチ
アイスタイルの方と食べた、実際のバックエンドエンジニアとして働いているご経験や、他の学生の方の意見を聞けて、非常に助かった

## ハンズオン
型に意味を込めるって概念が理解できて、それからのセッションを受ける上で非常に助かった

## セッション
いろいろあったので、参加したセッションごとにまとめます

### Day1（5/22）

- **事前イベント**：企業紹介と「当日の楽しみ方」解説（セッションではなく導入イベント）
- **ご飯会**：アイスクリプト関連、組織の話など交流中心
- **ハンズオン**：「型に期待を込める/エラーは嬉しい」、Union型を使い倒した回（ジェネリクスまでは未到達）
- **AWS上でAI Agentを作るセッション**：Strands Agent SDK・Mastra・Deep Agents・Claude Agent SDK、CDK／Amplify Gen2、yamlだと1300行→コードだと199行の話（スポンサー系セッションと思われる）
- **freee の TypeSpec/スキーマ駆動のセッション**：Ruby×TypeScript、OpenAPI、SSoT、TypeSpecでWebhook型をきれいに書く話
- **型はAIにどこまで届いているか**：Text / Diagnosis / Semantics の3層、LSP、Codexは型に届かない、という回
- **TypeScript エンジニアのための WASM ランタイム入門：AssemblyScript から理解するメモリの実態**（ayano）← 公式タイトル一致。線形メモリ・TypedArray・ヘッダ＋ペイロードの話
- **Valibot のセッション**：zod系、ISBNのparse関数をOSSにコントリビュートする話
- **Navigation API のセッション**（yamanoku）：History APIの課題、lib.dom.d.ts、DOM API採用基準
- **TS 7: How We Got There**（Jake Bailey / Microsoft、招待講演）← 公式一致。「コンパイラをTSからGoにした話」とメモした最後の基調講演

### Day2（5/23）

- **制約と時代から読み解くTypeScriptコンパイラ設計史** ← 公式一致。なぜRustでなくGoか、Binder/Checker/Symbol、Roslynのred-green tree、immutability放棄の歴史
- **Reactのpropsは値の集合ではない**：discriminated union、TanStack Query、JSXのネストでUI状態を表現
- **型プラグインシステムの実装**：Hono、型のバケツリレー、middlewareでcontext型拡張、グローバル型マージ
- **Auth.js から Better Auth へ**：configをSSoTにする設計、型に絞った比較
- **Next.jsとOpenAPIで型安全なデータ境界**：DALを設定する話
- **ドメインを資産にする**：少人数で複数プロダクト、schema.tsにドメイン知識を集約
- **25年で初めてTypeScriptを使った**：Java/Objective-C/Swift遍歴と型観の変遷
- **as禁止でどこまで型をいけるか**（24卒・バクラク/LayerX系）：checker.ts、Contextual Type、Widening、as const不要論
- **ドワンゴの次の10年**：React/TS v1〜v4の改善、タグ付きunionで取得状態を表現、gRPC置換
- **いつテストを書くか？― ソフトウェア開発における安心と不安について考える**（lacolaco）← 公式一致。変更容易性とTDD、「変更が怖いなら書く」
- **tsgo×Lintのセッション**（「間違って聞きにいった」とメモ）：Oxlint・Rslint・Biome、型認識カスタムルール、tsgolint、programmatic API
- **childrenの順序を型で縛る**：ReactElementをtuple化、Branded Typesで制約
- **スプレッド構文でのBrand流出問題**：ファクトリ関数＋classでprivate brand、Object.assignの型安全性
- **string地獄を脱出するValueオブジェクト実践パターン**：Value Object、Zod、Plopでボイラープレート自動生成
