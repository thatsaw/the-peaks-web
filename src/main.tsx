import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Default } from "./layouts/Default";
import { Home } from "./routes/Home";
import { Post } from "./routes/Post";
import { About } from "./routes/About";
import { Error } from "./routes/Error";
import { loader as contentLoader } from "./api/content";
import { loader as postLoader } from "./api/post";
import "./main.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: contentLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        // path: ":section(/:type?)/:year/:month/:date/:postId",
        // path: ":section/:year/:month/:date/:postId",
        path: "p/:postId",
        element: <Post />,
        loader: postLoader(queryClient),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
