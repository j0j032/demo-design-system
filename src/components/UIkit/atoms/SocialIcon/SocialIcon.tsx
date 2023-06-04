import styles from "./SocialIcon.module.scss";
type SocialIconProps = {
  iconSrc: string;
  href: string;
  name: string;
};

const SocialIcon = ({ href, iconSrc, name }: SocialIconProps) => {
  return (
    <a href={href} className={styles.social_link} target="_blank">
      <img className={styles.social_icon} src={iconSrc} alt={`link to ${name}`} />
    </a>
  );
};

export default SocialIcon;
