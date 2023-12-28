import { h } from "preact";
import Match, { Link } from "preact-router/match";
import { AppConst } from "../../configs";
import style from "./style.css";

const BottomFooter = () => {
  return (
    <div class={style.bottomTab}>
      {AppConst.select.tabBarList.map((tabBar) => (
        <Match path={tabBar._id}>
          {({ matches }) => (
            <Link
              className={matches ? style.activeTabItem : style.tabItem}
              href={tabBar._id}
            >
              {<tabBar.icon />}
              <div className="text-xs font-semibold mt-1">{tabBar.name}</div>
            </Link>
          )}
        </Match>
      ))}
    </div>
  );
};

export default BottomFooter;
