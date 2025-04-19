import ModelProvider from "@context/ModelProvider";
import { defaultHeaders } from "@hooks/useFetch";
import Error404 from "@pages/Error404";
import PeoplePage from "@pages/PeoplePage";
import TVShowDetail from "@pages/TVShowDetail";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import SearchPage from "@pages/SearchPage";

const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            { headers: defaultHeaders },
          );

          return res.json();
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModelProvider>
      <RouterProvider router={router} />
    </ModelProvider>
  </StrictMode>,
);
