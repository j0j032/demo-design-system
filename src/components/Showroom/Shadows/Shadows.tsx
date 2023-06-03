import { shadows } from "../../../constants/shadow";
import { capitalize } from "../../../utils/strings";
import styles from "./Shadows.module.scss";

const Shadows = () => {
  return (
    <div className={styles.shadows_section}>
      {shadows.map((shadow, index) => {
        return (
          <div className={styles.shadow_container} key={index}>
            <div className={styles.shadow_box} style={{ boxShadow: shadow.shadow }}></div>
            <p>{capitalize(shadow.name)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shadows;
