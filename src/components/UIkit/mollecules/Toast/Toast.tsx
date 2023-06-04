import React from "react";
import styles from "./Toast.module.scss";
import { Icon } from "../../atoms/Icon/Icon";

type ToastProps = {
  category: "info" | "success" | "warning" | "error";
  text: string;
};

const Toast: React.FC<ToastProps> = ({ category, text }) => {
  const iconType = category === "info" ? "info" : category === "success" ? "check_circle" : category === "warning" ? "warning" : category === "error" ? "error" : "info";

  return (
    <div className={`${styles.toast} ${styles[category]}`}>
      <div className={styles.left_container}>
        <Icon icon={iconType} size="large" />
      </div>
      <div className={styles.right_container}>
        <p className={styles.message}>{text}</p>
      </div>
    </div>
  );
};

export default Toast;
