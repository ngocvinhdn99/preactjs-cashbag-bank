import { h } from "preact";
import { Link } from "preact-router/match";
import { AppConst } from "../../configs";
import style from "./style.css";

const BottomFooter = () => {
  return (
    <div class={style.bottomTab}>
      {AppConst.select.tabBarList.map((tabBar) => (
        <Link
          activeClassName={style.activeTabItem}
          // className={
          //   tabBar._id === currentUrl ? style.activeTabItem :
          // }
          href={tabBar._id}
        >
          <div className={style.tabItem}>
            {<tabBar.icon />}
            <div>{tabBar.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomFooter;
