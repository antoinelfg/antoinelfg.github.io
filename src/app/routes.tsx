import { createHashRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
    ],
  },
]);