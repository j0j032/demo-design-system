import styles from "./SectionWrapper.module.scss";

type SectionWrapperProps = {
  children: React.ReactNode;
  title: string;
  direction?: "row" | "column";
};

const SectionWrapper = ({ children, title, direction = "column" }: SectionWrapperProps) => {
  return (
    <section className={styles.main_section}>
      <h3>{title}</h3>
      <div className={styles[direction]}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
