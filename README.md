# Chat app

## 使用技術
- Nextjs
- chadcn/ui
  - `npm i` でコンポーネントをダウンロードできるcssテンプレート
- convex
  - firebase realtime databaseと同じ
  - `npx convex dev`を走らせ続けないといけない
- clerk
  - 大体 Auth0 と同じ
  - convexの認証にclerkを使用できるので、cloudに乗せないのであれば便利
  - GoogleCloudを使えるなら特にこっちを使うメリットは無いかも
