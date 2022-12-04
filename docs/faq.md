# FAQ

#### **Q**: Why `vite`?

**A**: I normally would use Next.js for this kind of sites (news, e-commerce, etc)
for the sake of SEO optimization.

#### **Q**: Why `vitest`?

**A**: Unlike CRA, Vite does not build the entire application before serving,
instead, it builds the application on demand. It also leverages the power of
native ES modules, esbuild, and Rollup to improve development and build time.

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

**A**:

#### **Q**: Why put all components in a directory spreading?

**A**:

#### **Q**: Why Docker?

**A**:
