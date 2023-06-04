import styles from "./DropdownPresentationWrapper.module.scss";

type DropdownPresentationWrapperProps = {
  children: React.ReactNode;
  title: string;
};

const DropdownPresentationWrapper = ({ title, children }: DropdownPresentationWrapperProps) => {
  return (
    <div className={styles.container}>
      <h6>{title}</h6>
      {children}
    </div>
  );
};

export default DropdownPresentationWrapper;
