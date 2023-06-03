import ButtonsSection from "../components/Showroom/ButtonsSection/ButtonsSection";
import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import Button from "../components/UIkit/atoms/Button/Button";

const Atoms = () => {
  return (
    <>
      <PageHeading label="Atomic Elements" description="Buttons | Inputs | Icons " />
      <SectionWrapper title="Buttons" direction="row">
        <ButtonsSection heading="Primary ">
          <Button label="Default" category="primary" />
          <Button label="Bordered" category="primary-B" />
          <Button label="with right icon" category="primary" iconName="home" iconPosition="right" />
          <Button label="disabled" disabled />
        </ButtonsSection>
        <ButtonsSection heading="Secondary ">
          <Button label="Default" category="secondary" />
          <Button label="Bordered" category="secondary-B" />
          <Button label="disabled" disabled />
        </ButtonsSection>
        <ButtonsSection heading="Neutral ">
          <Button label="Default" />
          <Button label="with left icon" iconName="home" />
          <Button label="disabled" disabled />
        </ButtonsSection>
        <ButtonsSection heading="Rounded ">
          <Button label="Default" rounded category="primary" />
        </ButtonsSection>
        <ButtonsSection heading="Sizes ">
          <Button label="Small" size="small" />
          <Button label="Medium" />
          <Button label="Large" size="large" />
          <div style={{ width: "200px" }}>
            <Button label="Full Width" fullWidth />
          </div>
          {/* DOCS */}
        </ButtonsSection>
      </SectionWrapper>
    </>
  );
};

export default Atoms;
