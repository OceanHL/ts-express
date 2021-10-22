# 基于Express框架搭建的TypeScript项目模板
> <strong style="color: #ff8c00">每次修改文件后都需要重新构建</strong>
## 启动服务
- 先将 `ts` 文件编译为 `js` 文件，再监听 `./dist/bin/server.js` 文件的变化
```ts
npm run build-watch
yarn build-watch
```
## 构建项目
- 每次完成编写后都需要重新构建一次
```ts
npm run build
yarn build
```
## 编译项目
```ts
npm run build-ts
yarn build-ts
```
## 拷贝静态目录到 `dist` 目录下，可自定义 `copyStatic.ts` 文件