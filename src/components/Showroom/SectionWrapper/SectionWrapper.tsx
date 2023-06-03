import styles from "./SectionWrapper.module.scss";

type SectionWrapperProps = {
  children: React.ReactNode;
  title: string;
};

const SectionWrapper = ({ children, title }: SectionWrapperProps) => {
  return (
    <section className={styles.main_section}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SectionWrapper;
