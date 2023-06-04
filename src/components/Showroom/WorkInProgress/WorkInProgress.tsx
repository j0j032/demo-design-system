import styles from "./WorkInProgress.module.scss";

const WorkInProgress = () => {
  return (
    <div className={styles.container}>
      <h2>🚧</h2>
      <h1 className={styles.title}>Work in Progress</h1>
      <p>Not Responsive yet, switch to larger screen</p>
    </div>
  );
};

export default WorkInProgress;
