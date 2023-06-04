import styles from "./Logo.module.scss";
import logo from "../../../../assets/carrefour-custom.svg";

type LogoProps = {
  size?: "small" | "medium" | "large";
  withLabel?: boolean;
};

const Logo = ({ size = "medium", withLabel = false }: LogoProps) => {
  return (
    <div className={withLabel ? styles.container : ""}>
      <img src={logo} alt="Carrefour" className={styles[size]} />
      {withLabel && <h1 className={styles.label}>Carrefour</h1>}
    </div>
  );
};

export default Logo;
