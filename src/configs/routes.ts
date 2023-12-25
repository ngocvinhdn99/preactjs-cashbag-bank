import { IRoute } from "../interfaces";
import BrandNew from "../routes/brand-new";
import Home from "../routes/home";
import Profile from "../routes/profile";
import Reducer from "../routes/reducer";
import Support from "../routes/support";
import Transaction from "../routes/transaction";
import Withdraw from "../routes/withdraw";

const routes: IRoute[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/profile/:user",
    component: Profile,
  },
  {
    path: "/reducer",
    component: Reducer,
  },
  {
    path: "/brand-new",
    component: BrandNew,
  },
  {
    path: "/support",
    component: Support,
  },
  {
    path: "/transaction",
    component: Transaction,
  },
  {
    path: "/withdraw",
    component: Withdraw,
  },
];

export default routes;
