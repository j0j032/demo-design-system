import styles from "./InputPresentationWrapper.module.scss";

type InputPresentationWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const InputPresentationWrapper = ({ title, children }: InputPresentationWrapperProps) => {
  return (
    <div className={styles.container}>
      <h6>{title}</h6>
      {children}
    </div>
  );
};

export default InputPresentationWrapper;
