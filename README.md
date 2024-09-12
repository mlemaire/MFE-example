# Next.js 14 with Module Federation

This project demonstrates the use of Module Federation in Next.js 14, leveraging the [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf) package for federating modules across applications.

## Getting Started

1. Install all dependencies:

   ```bash
   pnpm install:all
   ```

2. Start the application

   ```bash
   pnpm run start
   ```

3. Access the apps at the following URLs:

   - App router consumer: `http://localhost:5001`
   - Page router consumer: `http://localhost:4001`

## Module Federation implementation

### Work in progress

- [x] page router consumer
- [x] page router provider
- [x] app router consumer
- [x] app router provider

### Cross-Imports from Page Router and App Router

Each consumer imports components from two different sources:

- A component from a Next.js page router app.
- A component from a Next.js app router app.

### SSR and Client-Side Rendering

On the **page router** side, you can use `React.lazy` to import components, and they will be rendered server-side as expected. but for import a app router component, we need to use `dynamic` from `next/dynamic` and `Suspense` to handle loading states.

However, **SSR is currently not supported** for Module Federation in the **app router**. Instead, to handle client-side rendering in the app router, we use `loadRemote` from `@module-federation/enhanced/runtime` to dynamically load federated modules. This process must happen in a client component, and the remote component is wrapped in a `Suspense` to handle loading states.

### App router provider ⚠️

For expose a MFE with a nextjs app router, we need to update the @modulefederation/nextjs-mf package to support the app router.
Like here :

- https://github.com/module-federation/core/pull/2002/files

And remove on the nextjs-mf/dist/src/plugins/NextFederationPlugin/index.js

```js
if (manifestPlugin?.appDirEnabled) {
  throw new Error(
    "App Directory is not supported by nextjs-mf. Use only pages directory, do not open git issues about this"
  );
}
```
