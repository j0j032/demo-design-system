import styles from "./Separator.module.scss";

export type SeparatorProps = {
  direction: "horizontal" | "vertical";
  customColor?: string;
  customMargin?: string;
};

export function Separator({ direction = "horizontal", customColor, customMargin }: SeparatorProps) {
  if (direction !== "horizontal" && direction !== "vertical") throw new Error('Separator: direction must be "horizontal" or "vertical".');

  return <div className={styles[direction]} style={{ backgroundColor: customColor, margin: customMargin }} data-testid="separator" />;
}
