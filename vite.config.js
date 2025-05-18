import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,    // 開発サーバーのポート番号
    open: true     // サーバー起動時に自動でブラウザを開く
  },
  build: {
    outDir: 'docs', // ビルド成果物の出力先
  },
  base: '/old-digicams/', // リポジトリ名を指定
});
