import styles from "./Sidebar.module.scss";
import Logo from "../../UIkit/atoms/Logo/Logo";
import Warn from "../Warn/Warn";
import { navigationLinks } from "../../../constants/navigation";
import Link from "../Link/Link";
import { socialIcons } from "../../../constants/socialicons";
import SocialIcon from "../../UIkit/atoms/SocialIcon/SocialIcon";
import { Separator } from "../../UIkit/atoms/Separator/Separator";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.top_container}>
        <Logo withLabel />
        <p className={styles.subtitle}>Lighter Design System</p>
        <div className={styles.separator}></div>
        <Warn />
        <Separator direction="horizontal" customColor="var(--Text-tertiary)" />
        <div className={styles.navigation}>
          {navigationLinks.map((link, index) => {
            return <Link key={index} to={link.path} label={link.label} icon={link.icon} />;
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <Separator direction="horizontal" customColor="var(--Text-tertiary)" />
        <div className={styles.social_container}>
          {socialIcons.map((icon, index) => {
            return <SocialIcon key={index} href={icon.href} name={icon.name} iconSrc={icon.src} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
