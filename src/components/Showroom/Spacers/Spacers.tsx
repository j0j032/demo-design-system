import { spacers } from "../../../constants/spacers";
import { capitalize } from "../../../utils/strings";
import styles from "./Spacers.module.scss";

const Spacers = () => {
  return (
    <div className={styles.spacers_section}>
      {spacers.map((spacer, index) => {
        return (
          <div className={styles.spacer_container} key={index}>
            <div className={styles.spacer_box} style={{ height: spacer.spacer }}>
              <p>{spacer.spacer}</p>
            </div>
            <p>{capitalize(spacer.name)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Spacers;
