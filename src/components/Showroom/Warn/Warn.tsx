import { Icon } from "../../UIkit/atoms/Icon/Icon";
import styles from "./Warn.module.scss";

const Warn = () => {
  return (
    <div className={styles.container}>
      <Icon icon="new_releases" size="small" />
      <h6>This Design System is 100% unofficial !</h6>
    </div>
  );
};

export default Warn;
