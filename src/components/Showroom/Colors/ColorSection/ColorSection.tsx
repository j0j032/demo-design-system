import Color from "../Color/Color";
import styles from "./ColorSection.module.scss";

type ColorSectionProps = {
  colors: { name: string; hex: string }[];
  title: string;
};
const ColorSection = ({ colors, title }: ColorSectionProps) => {
  return (
    <div className={styles.color_section}>
      <h6>{title}</h6>
      <div className={styles.color_gallery}>
        {colors.map((color) => (
          <Color key={color.name} name={color.name} hex={color.hex} />
        ))}
      </div>
    </div>
  );
};

export default ColorSection;
