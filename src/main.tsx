import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Error } from "./routes/Error";
import { list as todoList } from "./api/todo";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <Default />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: todoList,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
