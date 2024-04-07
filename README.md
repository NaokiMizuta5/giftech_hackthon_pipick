# giftech-hakathon-team-d

## Installation

### Install Bun

```bash
curl hhtps://bun.sh/install | bash
```

```bash
source ~/.zshrc
```

### Clone Repository

```bash
git clone git@github.com:aose-yuu/giftech-hakathon-team-d.git
```

### Install Packages

```bash
bun install
```

### Load Lefthook

```bash
bun run lefthook:install
```

### Start Project

```bash
bun run start
```

Scan a QR Code with your iPhone or Android device.

## Directory Strucute ( `src/ `)

### `app/`

```txt
.
├── +html.tsx
├── +not-found.tsx
├── _layout.tsx
├── index.tsx
└── tabs
    ├── (tabs)
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   ├── tab1.tsx
    │   └── tab2.tsx
    └── _layout.tsx
```

実際の画面を構成するコンポーネント群。
ここではあくまでも `components/` や `features/` 配下で定義したファイル群を使用する。

### `components/`

```txt
.
├── EditScreenInfo
│   └── index.tsx
├── ExternalLink
│   └── index.tsx
└── index.ts
```

共通・汎用コンポーネント群。
現状では、プロジェクト作成時に生成されたファイルが格納されている。

### `db/`

```txt
.
├── components
│   ├── DBHealthCheck
│   │   └── index.tsx
│   └── index.ts
├── hooks
└── utils
    ├── healthCheck.ts
    └── index.ts
```

DB関係のファイル群。
DBは「機能」という枠組み以上の意味合いを含むため、例外として `features` ディレクトリ内に作成しない。
今後、ここにインターフェース群を格納するためのディレクトリ（ `models/` や `schema/` ）を作成する。

### `features/`

```txt
.
├── atom
│   └── index.ts
├── components
│   ├── Counter
│   │   └── index.tsx
│   └── index.ts
├── constants
│   └── index.ts
├── hooks
│   └── index.ts
├── index.ts
└── types
    └── index.ts

```

各機能ごとにまとめたディレクトリ群。
ここが今回のメイン実装にあたる予定。

| ディレクトリ名 | 要件                                                                          |
| :------------- | :---------------------------------------------------------------------------- |
| `atom`         | jotaiのatom群を定義するファイル。global state。                               |
| `components`   | 機能に関するコンポーネント群。                                                |
| `constants`    | 機能に関する定数を定義するファイル。                                          |
| `hooks`        | 機能に関するカスタムフックを定義するファイル。`use〇〇.ts`                    |
| `types`        | 機能に関する型定義をまとめるファイル。`components` 配下で使い回す場合を想定。 |

### `hooks/`

```txt
.
├── index.ts
├── useClientOnlyValue.ts
├── useClientOnlyValue.web.ts
└── useColorScheme.web.ts
```

共通・汎用カスタムフック群。
