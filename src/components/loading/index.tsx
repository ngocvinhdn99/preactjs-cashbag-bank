import { h } from "preact";
import styles from "./style.less";

const Loading = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
      <div className={styles.spinnerBlade} />
    </div>
  );
};
export default Loading;
