import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Lander from "./Lander";
import Deck from "./Deck";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Lander },
      { path: "brand", Component: Deck },
    ],
  },
]);
