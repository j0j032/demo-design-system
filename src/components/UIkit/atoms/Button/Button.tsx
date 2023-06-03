import React from "react";
import styles from "./button.module.scss";
import { Icon } from "../Icon/Icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  category?: "primary" | "primary-B" | "secondary" | "secondary-B" | "neutral";
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  iconName?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
};

const Button = ({ label, size = "medium", fullWidth = false, category = "neutral", iconName, iconPosition = "left", rounded = false, disabled = false, ...buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      style={{
        width: fullWidth ? "100%" : "auto",
        borderRadius: rounded ? "50px" : "6px",
      }}
      className={`${[styles.button, styles[size], styles[category], styles[iconPosition], disabled && styles.disabled].join(" ")} `}
    >
      {iconName && <Icon icon={iconName} size={size} />}
      {label}
    </button>
  );
};

export default Button;
