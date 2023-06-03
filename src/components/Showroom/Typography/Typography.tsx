import styles from "./Typography.module.scss";
import { capitalize } from "../../../utils/strings";

type TypographyProps = {
  type: "text" | "heading" | "title" | "subtitle" | "caption" | "label" | "button";
  fontFamily: string;
  typoArray: { size: string; weight: string; fontFamily: string }[];
};

const Typography = ({ type, fontFamily, typoArray }: TypographyProps) => {
  return (
    <div className={styles.font_section}>
      <div className={styles.font_heading}>
        <h5>{capitalize(type)}</h5>
        <p>Font Familly: {fontFamily}</p>
      </div>
      <div className={styles.font_container}>
        {typoArray.map((typo) => (
          <p
            style={{
              fontSize: typo.size,
              fontWeight: typo.weight,
              fontFamily: `${typo.fontFamily}, sans-serif `,
            }}
          >
            {`Size - ${typo.size.slice(0, 2)}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Typography;
