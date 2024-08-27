# Next.js 14 with Module Federation

Module Federation in Next.js depends on <a href=« https://www.npmjs.com/package/@module-federation/nextjs-mf »>@module-federation/nextjs-mf</a>

## Getting Started

1. run `pnpm install:all`
2. run `pnpm run start` and browse to `http://localhost:5001` for the app router consumer or `http://localhost:4001` for the page router consumer

## Module Federation implementation

Work in progress

- [x] page router consumer
- [x] page router provider
- [x] app router consumer
- [x] app router provider

### App router provider

For expose a MFE with a nextjs app router, we need to update the @modulefederation/nextjs-mf package to support the app router.
Like here :

- https://github.com/module-federation/core/pull/2002/files

And remove on the nextjs-mf/dist/src/plugins/NextFederationPlugin/index.js

```
   if (manifestPlugin?.appDirEnabled) {
     throw new Error(
       "App Directory is not supported by nextjs-mf. Use only pages directory, do not open git issues about this"
     );
   }
```
