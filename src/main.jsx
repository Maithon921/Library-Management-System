import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { appStore } from "./utils/appStore.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import BrowseBook from "./components/BrowseBook.jsx";
import AddBook from "./components/AddBook.jsx";
import Landingpage from "./components/Landingpage.jsx";
import BookDetail from "./components/BookDetail.jsx";
import Error from "./components/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/browsebook",
        element: <BrowseBook />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/bookDetail/:id",
        element: <BookDetail />,
      },
    ],
    errorElement: <Error />
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
