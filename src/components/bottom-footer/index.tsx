import { h } from "preact";
import Match, { Link } from "preact-router/match";
import { AppConst } from "src/configs";
import { translation } from "src/locales";
import styles from "./style.less";

const BottomFooter = () => {
  return (
    <div class={styles.bottomTab}>
      {AppConst.select.tabBarList.map((item) => (
        <Match path={item._id}>
          {({ matches }) => (
            <Link
              className={matches ? styles.activeTabItem : styles.tabItem}
              href={item._id}
            >
              {<item.icon />}
              <div className="text-xs font-semibold mt-1">
                {translation(item.name)}
              </div>
            </Link>
          )}
        </Match>
      ))}
    </div>
  );
};

export default BottomFooter;
