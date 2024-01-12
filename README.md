## 概要

- udemy [
  TypeScript ではじめる Web アプリケーションテスト入門
  ](https://www.udemy.com/share/109Sw23@5lBuMH8kWaKJog6I8MGurdW2d-zna5m67HViJh5vJm4rvg_M_PMrMWSgFrz6l0mkHA==/) の実行

## ディレクトリ

- src
  - BE 用のディレクトリ
- ui-test-udemy-lesson
  - FE 用のディレクトリ

## セットアップ

```bash
# BE
npm init -y
npm i -D typescript
npx tsc --init
npm i -D jest @types/jest ts-jest
npx ts-jest config:init
```

```bash
# FE
npm create vite@latest

# npm create vite@latestした際に決定したディレクトリへ移動
cd ui-test-udemy-lesson

# reactとviteの画面が表示されるのを確認
npm i
npm run dev

# 必要ライブラリの導入
npm i axios

# テスト用セットアップ
npm i -D jest @types/jest ts-jest
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event

# jestのセットアップ
npx ts-jest config:init
```
