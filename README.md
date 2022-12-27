## 導入パッケージ

axios, aspida
```bash
# npm i @aspida/axios axios
```

sass
```bash
# npm i sass
```

Prisma
```bash
# npm i prisma
# npm i @prisma/client
```

Supabase
```bash
# npm i @supabase/supabase-js
```

Chakra UI
```bash
# npm i @chakra-ui/icons
# npm i @chakra-ui/react
```


```bash
# npm i typescript ts-node @types/node --save-dev
```

## Prisma

```bash
# npm prisma init
```

`prisma/schema.prisma`と.`.env`が生成される

なぜか初回の`npx prisma migrate dev`コマンドが効かないので代わりに`db push`を実行する
```
# npx prisma db push
```