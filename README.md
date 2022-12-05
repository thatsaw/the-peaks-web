# [The Peaks](https://peaks.pages.dev/) &middot; [![test](https://github.com/thatsaw/the-peaks-web/actions/workflows/test.yaml/badge.svg)](https://github.com/thatsaw/the-peaks-web/actions/workflows/test.yaml)

Open journalism for everyone.

This project built upon [The Guardian Open Platform](https://open-platform.theguardian.com/).
If you don't have the API key, please register for a developer account and get one.

# Prerequisites

- [Node.js](https://nodejs.org/en/) >= v18 (preferred current version)
- [Open Platform developer key](https://bonobo.capi.gutools.co.uk/register/developer)

# Quick start

```sh
# Install dependencies
$ npm install

# Copy .env file and fill environment variables as per requirements
$ cp .env.local .env

# Run in development mode
$ npm run dev

# (Optional) Build for production
$ npm run build

# (Optional) Preview production
$ npm run preview
```

# Stack

- [react](https://reactjs.org/) >= v18.2.0
- [react-router-dom](https://reactrouter.com/en/main/) >= v6.4.3
- [@tanstack/react-query](https://react-query-v3.tanstack.com/) >= v4.18.0
- [zustand](https://github.com/pmndrs/zustand) >= v4.1.4
- [vite](https://vitejs.dev/) >= v3.2.3
- [vitest](https://vitest.dev/) >= v0.25.3
- [@playwright/test](https://playwright.dev/) >= v1.28.1
- [@storybook/react](https://storybook.js.org/) >= v6.5.13
- [typescript](https://www.typescriptlang.org/) >= v4.6.4

# Structure

```
.
|-- .github/
|   `-- workflows/
|-- .storybook/
|-- e2e/
|-- public/
|-- src/
|   |-- api/
|   |-- assets/
|   |-- components/
|   |-- layouts/
|   |-- routes/
|   |-- utils/
|   `-- store.ts
`-- test/
```

| Folder / File                    | Description                                                          |
| -------------------------------- | -------------------------------------------------------------------- |
| [workflows/](.github/workflows/) | CI/CD workflows for GitHub actions to run tests and build artifacts. |
| [.storybook/](.storybook/)       | Storybook configuration.                                             |
| [e2e/](e2e/)                     | End-to-End tests.                                                    |
| [public](public/)                | Static assets that are never referenced in source code .             |
| [api/](src/api/)                 | Query hooks for API requests.                                        |
| [assets/](src/assets)            | Static assets that are referenced in source code.                    |
| [components/](src/components/)   | Shared components, such as button and spinner.                       |
| [layouts/](src/layouts/)         | Layout components, such as default layout.                           |
| [routes/](src/routes/)           | Route components, such as home and about pages.                      |
| [utils/](src/utils/)             | Utility functions.                                                   |
| [store.ts](src/store.ts)         | Central state management.                                            |
| [test/](src/test/)               | Unit tests.                                                          |

# Status

Active.
