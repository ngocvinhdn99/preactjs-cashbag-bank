import { IRoute } from "src/interfaces";

import RouteBrandNew from "src/routes/brand-new";
import RouteHome from "src/routes/home";
import RouteProfile from "src/routes/profile";
import RouterReducer from "src/routes/reducer";
import RouteSupport from "src/routes/support";
import RouteTransaction from "src/routes/transaction";
import RouteWithdraw from "src/routes/withdraw";

const routes: IRoute[] = [
  {
    path: "/",
    component: RouteHome,
  },
  {
    path: "/profile",
    component: RouteProfile,
  },
  {
    path: "/profile/:user",
    component: RouteProfile,
  },
  {
    path: "/reducer",
    component: RouterReducer,
  },
  {
    path: "/brand-new",
    component: RouteBrandNew,
  },
  {
    path: "/support",
    component: RouteSupport,
  },
  {
    path: "/transaction",
    component: RouteTransaction,
  },
  {
    path: "/withdraw",
    component: RouteWithdraw,
  },
];

export default routes;
