import styles from "./CardGalleryWrapper.module.scss";
type CardGalleryWrapperProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const CardGalleryWrapper = ({ title, description, children }: CardGalleryWrapperProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6>{title}</h6>
        {description && <p>{description}</p>}
      </div>
      <div className={styles.gallery}>{children}</div>
    </div>
  );
};

export default CardGalleryWrapper;
