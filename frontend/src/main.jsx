import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import Navbar from "./routes/Navbar.jsx";
import HomePage from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Profiles, { loader as profilesLoader } from "./routes/Profiles.jsx";
import ArtistProfile from "./routes/ArtistProfile.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      {
        path: "/profiles",
        element: <Profiles />,
        loader: profilesLoader,
      },
      { path: "/profiles/:profileSlug", element: <ArtistProfile /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
