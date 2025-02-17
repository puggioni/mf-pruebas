import { Paths } from "./paths";
import Health from "../components/Health/Health";
import Home from "../components/Pages/Home";
import About from "../components/Pages/About";
import Features from "../components/Pages/Features";
import { AppRoute } from "../ts/types";

const routes: AppRoute[] = [
  {
    path: Paths.home.index,
    element: <Home />,
  },
  {
    path: Paths.about.index,
    element: <About />,
  },
  {
    path: Paths.features.index,
    element: <Features />,
  },
  {
    path: Paths.health.index,
    element: <Health />,
  },
];

export default routes;
