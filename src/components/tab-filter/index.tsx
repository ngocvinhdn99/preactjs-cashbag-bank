import { h } from "preact";
import { ISelectOption } from "src/interfaces";
import { translation } from "src/locales";
import styles from "./style.less";

interface IProps {
  options: ISelectOption[];
  initialValue?: string;
  onChange: (value) => void;
}

const TabFilter = (props: IProps) => {
  const { options, initialValue, onChange } = props;

  return (
    <form
      className={styles.radioInputs}
      onChange={(e: any) => onChange(e.target.value)}
    >
      {options.map((item) => (
        <label className={styles.radio}>
          <input
            type="radio"
            name="radio"
            value={item._id}
            checked={item._id === initialValue}
          />
          <span className={styles.name}>{translation(item.name)}</span>
        </label>
      ))}
    </form>
  );
};

export default TabFilter;
