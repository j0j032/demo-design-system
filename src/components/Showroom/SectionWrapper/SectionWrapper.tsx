import styles from "./SectionWrapper.module.scss";

type SectionWrapperProps = {
  children: React.ReactNode;
  title: string;
  direction?: "row" | "column";
  docs?: React.ReactNode;
  precise?: string;
};

const SectionWrapper = ({ children, title, direction = "column", docs, precise }: SectionWrapperProps) => {
  return (
    <section className={styles.main_section}>
      <h3>{title}</h3>
      <p>{precise}</p>
      <div className={styles[direction]}>{children}</div>
      {docs}
    </section>
  );
};

export default SectionWrapper;
