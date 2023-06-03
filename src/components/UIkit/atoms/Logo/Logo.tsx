import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/carrefour-custom.svg";

type LogoProps = {
  size?: "small" | "medium" | "large";
  withLabel?: boolean;
};

const Logo = ({ size = "medium", withLabel = false }: LogoProps) => {
  return (
    <NavLink to="/">
      <div className={withLabel ? styles.container : ""}>
        <img src={logo} alt="Carrefour" className={styles[size]} />
        {withLabel && <h1 className={styles.label}>Carrefour</h1>}
      </div>
    </NavLink>
  );
};

export default Logo;
