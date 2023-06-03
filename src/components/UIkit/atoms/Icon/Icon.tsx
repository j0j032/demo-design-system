import styles from "./Icon.module.scss";
import "material-icons/iconfont/outlined.css";
import React from "react";

// icons from https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Icons+Outlined

type Clickable = {
  isClickable: true;
  action: ((event: React.MouseEvent<HTMLElement>) => void) | (() => void);
};

type NonClickable = {
  isClickable?: false;
  action?: never;
};

export type IconProps = {
  icon: string;
  size?: "small" | "medium" | "large";
  color?: string;
} & (Clickable | NonClickable);

export function Icon({ icon, isClickable, action, size = "medium", color }: IconProps) {
  if (isClickable && !action) console.error("Error: action must be provided if isClickable is true");
  if (!isClickable && action) console.error("Error: isClickable must be true if action is provided");

  const validSizes = ["small", "medium", "large"];
  if (!validSizes.includes(size)) {
    console.error(`Error: size must be one of ${validSizes.join(", ")}, received ${size}`);
    return null;
  }

  return isClickable ? (
    <span className={`material-icons-outlined ${[styles.icon, styles[size], styles.clickable].join(" ")}`} onClick={action} style={{ color }} data-testid="icon-component">
      {icon}
    </span>
  ) : (
    <span className={`material-icons-outlined ${[styles.icon, styles[size]].join(" ")}`} style={{ color }} data-testid="icon-component">
      {icon}
    </span>
  );
}
