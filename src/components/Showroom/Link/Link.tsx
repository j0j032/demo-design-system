import { Icon } from "../../UIkit/atoms/Icon/Icon";
import styles from "./Link.module.scss";
import { NavLink } from "react-router-dom";

type LinkProps = {
  label: string;
  to: string;
  icon?: string;
};

// style={(isActive) => ({ backgroundColor: isActive ? "var(--Primary)" : "transparent" })}

const Link = ({ to, label, icon }: LinkProps) => {
  return (
    <NavLink to={to} className={styles.link}>
      <div className={styles.link_container}>
        {icon && <Icon icon={icon} size="small" />}
        <p className={styles.link_label}>{label}</p>
      </div>
    </NavLink>
  );
};

export default Link;
