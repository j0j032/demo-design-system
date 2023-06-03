import styles from "./PageHeading.module.scss";

type PageHeadingProps = {
  label: string;
  description?: string;
};

const PageHeading = ({ label, description }: PageHeadingProps) => {
  return (
    <div className={styles.container}>
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PageHeading;
