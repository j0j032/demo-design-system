//import styles from "./Foundations.module.scss";
import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import { backgroundColors, brandColors, textColors } from "../constants/colors";
import ColorSection from "../components/Showroom/Colors/ColorSection/ColorSection";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import Typography from "../components/Showroom/Typography/Typography";
import { headingTypo, textTypo } from "../constants/typography";
import Shadows from "../components/Showroom/Shadows/Shadows";
import Spacers from "../components/Showroom/Spacers/Spacers";

const Foundations = () => {
  return (
    <>
      <PageHeading label="Foundation Elements" description="Colors | Typography | Shadows | Spacers" />
      <SectionWrapper title="Colors">
        <ColorSection colors={brandColors} title="Brand Colors" />
        <ColorSection colors={textColors} title="Text Colors" />
        <ColorSection colors={backgroundColors} title="Background Colors" />
      </SectionWrapper>
      <SectionWrapper title="Typography">
        <Typography type="text" fontFamily="Roboto" typoArray={textTypo} />
        <Typography type="heading" fontFamily="Mulish" typoArray={headingTypo} />
      </SectionWrapper>
      <SectionWrapper title="Shadows">
        <Shadows />
      </SectionWrapper>
      <SectionWrapper title="Spacers">
        <Spacers />
      </SectionWrapper>
    </>
  );
};

export default Foundations;
