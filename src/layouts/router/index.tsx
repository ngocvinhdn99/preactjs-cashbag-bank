import { h } from "preact";
import { Route, Router } from "preact-router";
import { RoutesConst } from "src/configs";

const RouterContainer = () => (
  <Router>
    {RoutesConst.map((route) => (
      <Route path={route.path} component={route.component} />
    ))}
  </Router>
);

export default RouterContainer;
