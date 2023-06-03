import styles from "./Sidebar.module.scss";
import Logo from "../../UIkit/atoms/Logo/Logo";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <Logo withLabel />
    </aside>
  );
};

export default Sidebar;
