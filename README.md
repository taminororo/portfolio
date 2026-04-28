# taminororo's blog

`blog.taminororo.net` 用の個人ブログ / ポートフォリオサイト。
Astro + TypeScript の静的サイトです。

## 開発

```bash
npm install
npm run dev
```

`http://localhost:4321` で確認できます。

## 記事を書く

`src/content/posts/` に Markdown ファイル (`.md`) を作るだけです。
ファイル名がそのまま URL になります (例: `my-post.md` → `/posts/my-post`)。

frontmatter (記事の先頭の `---` で囲まれた部分) は次の通り:

| フィールド | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `title` | string | はい | 記事タイトル |
| `description` | string | はい | 一覧に出る短い説明 |
| `date` | YYYY-MM-DD | はい | 公開日 |
| `lang` | `"en"` または `"ja"` | はい | 言語 (絞り込みに使う) |
| `draft` | boolean | いいえ | `true` だと公開されない |

スキーマは `src/content/config.ts` で Zod により検証されます。
誤った値を書くと `npm run build` 時に型エラーになります。

## ビルド

```bash
npm run build
```

`dist/` に静的ファイルが出力されます。`npm run preview` で確認可。

## デプロイ (blog.taminororo.net への公開)

### おすすめ: Cloudflare Pages

1. このリポジトリを GitHub にプッシュ
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. ビルド設定:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. デプロイ後、Pages プロジェクトの **Custom domains** で `blog.taminororo.net` を追加
5. `taminororo.net` の DNS が Cloudflare 管理下なら、`blog` の CNAME が自動で設定されます。
   外部 DNS なら、表示される CNAME 値 (例: `xxx.pages.dev`) を `blog` のレコードに追加してください

### 代替: Vercel / Netlify

どちらも Astro を自動検出するので、リポジトリを連携してドメイン追加するだけです。

## ディレクトリ構成

```
src/
  components/PostList.astro   # 記事一覧 + 言語フィルタ
  content/
    config.ts                 # 記事スキーマ (Zod)
    posts/                    # 記事本体 (.md)
  layouts/BaseLayout.astro    # 全ページ共通の枠
  pages/
    index.astro               # トップ (全言語)
    en/index.astro            # 英語のみ
    ja/index.astro            # 日本語のみ
    about.astro               # About
    posts/[...slug].astro     # 記事詳細
  styles/global.css           # スタイル
```
