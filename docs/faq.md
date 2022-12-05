# FAQ

#### **Q**: Why `vite`?

**A**: Unlike CRA, Vite does not build the entire application before serving,
instead, it builds the application on demand. It also leverages the power of
native ES modules, esbuild, and Rollup to improve development and build time.

#### **Q**: Why `vitest`?

**A**: Vitest is built with Vite in mind from the start, taking advantage of its
improvements in DX, like its instant Hot Module Reload (HMR). Given Jest's
massive adoption, Vitest provides a compatible API that allows you to use it as
a drop-in replacement in most projects. It also includes the most common
features required when setting up your unit tests (mocking, snapshots,
coverage). Vitest cares a lot about performance and uses Worker threads to run
as much as possible in parallel. Even with all these improvements in DX, Vitest
stays lightweight by carefully choosing its dependencies (or directly inlining
needed pieces). Vitest aims to position itself as the Test Runner of choice for
Vite projects, and as a solid alternative even for projects not using Vite.

#### **Q**: Why `react-router`?

**A**: It enables the creation of single-page web or mobile apps that allow
navigating without refreshing the page. It also allows us to use browser history
features while preserving the right application view. A Router in React JS
routes using a component-based architecture.

#### **Q**: Why `react-query`?

**A**: React Query gives us caching of server data out of the box with cache
invalidation and request deduping. If we use this same query with the same Query
Key in another component, it'll check the cache: if the data is already there,
React Query will simply return it, avoiding extra network requests.

#### **Q**: Why `zustand`?

**A**: One drawback to using Redux is the amount of code we have to write to
have global state. We have to create reducers, actions, and dispatch functions
just to change a very simple state. The power of Zustand is that creating a
global state can be done with four lines of code.

#### **Q**: Why `typescript`?

**A**: TypeScript extends JavaScript and improves the developer experience. It
enables developers to add type safety to their projects. Moreover, TypeScript
provides various other features, like interfaces, type aliases, abstract
classes, function overloading, tuple, generics, etc.

#### **Q**: Why `playwright`?

**A**: Playwright is an out-of-process automation driver that is not limited by
the scope of in-page JavaScript execution and can automate scenarios with
multiple pages. Powerful network control. Playwright introduces context-wide
network interception to stub and mock network requests. Modern web features.

#### **Q**: Why CSS modules?

**A**: We could use SASS or popular CSS-in-JS libraries, such as
`styled-components` and `emotion`, or `vanilla-extract`. However, since this
project meant for skill evaluation, I believe that CSS modules are the right
fit.

#### **Q**: Why put all components in a directory spreading?

**A**: It depends on personal preference. It may vary at different orginzations
and projects.

#### **Q**: Why Docker?

**A**: We do not need Docker for this project to run in either development or
production. But some origizations choose to run React in Docker with Nginx on
k8s.
