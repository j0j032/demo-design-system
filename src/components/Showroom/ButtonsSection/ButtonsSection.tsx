import styles from "./ButtonsSection.module.scss";

type ButtonSectionProps = {
  heading: string;
  children: React.ReactNode;
};

const ButtonsSection = ({ heading, children }: ButtonSectionProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.buttons_container}>{children}</div>
    </section>
  );
};

export default ButtonsSection;
