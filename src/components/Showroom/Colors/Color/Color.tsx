import styles from "./Color.module.scss";

type ColorProps = {
  hex: string;
  name: string;
};

const Color = ({ hex, name }: ColorProps) => {
  return (
    <article className={styles.card}>
      <div style={{ backgroundColor: hex }} className={styles.color}></div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <p>{hex}</p>
      </div>
    </article>
  );
};

export default Color;
