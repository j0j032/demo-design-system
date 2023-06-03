import styles from "./IconPresentationWrapper.module.scss";

type IconPresentationWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const IconPresentationWrapper = ({ children, title }: IconPresentationWrapperProps) => {
  return (
    <div className={styles.container}>
      <h6>{title}</h6>
      {children}
    </div>
  );
};

export default IconPresentationWrapper;
