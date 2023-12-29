import { h } from "preact";
import styles from "./style.less";

const Spin = () => {
  return (
    <div className={styles.wifiLoader}>
      <svg className={styles.circleOuter} viewBox="0 0 86 86">
        <circle className={styles.back} cx="43" cy="43" r="40"></circle>
        <circle className={styles.front} cx="43" cy="43" r="40"></circle>
        <circle className={styles.new} cx="43" cy="43" r="40"></circle>
      </svg>
      <svg className={styles.circleMiddle} viewBox="0 0 60 60">
        <circle className={styles.back} cx="30" cy="30" r="27"></circle>
        <circle className={styles.front} cx="30" cy="30" r="27"></circle>
      </svg>
      <svg className={styles.circleInner} viewBox="0 0 34 34">
        <circle className={styles.back} cx="17" cy="17" r="14"></circle>
        <circle className={styles.front} cx="17" cy="17" r="14"></circle>
      </svg>
      <div className={styles.text} data-text="Loading" />
    </div>
  );
};
export default Spin;
