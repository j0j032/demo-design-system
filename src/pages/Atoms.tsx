import ButtonsSection from "../components/Showroom/ButtonsSection/ButtonsSection";
import DocLink from "../components/Showroom/DocLink/DocLink";
import IconPresentationWrapper from "../components/Showroom/IconPresentationWrapper/IconPresentationWrapper";
import InputPresentationWrapper from "../components/Showroom/InputPresentationWrapper/InputPresentationWrapper";
import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import Button from "../components/UIkit/atoms/Button/Button";
import { Icon } from "../components/UIkit/atoms/Icon/Icon";
import { TextInput } from "../components/UIkit/atoms/TextInput/TextInput";
import Tooltip from "../components/UIkit/atoms/Tooltip/Tooltip";

const Atoms = () => {
  return (
    <>
      <PageHeading label="Atomic Elements" description="Buttons | Icons | Inputs | Tooltip " />
      <SectionWrapper
        title="Buttons"
        direction="row"
        docs={<DocLink url="https://demo-design-system.vercel.app/?path=/docs/atoms-button--docs" />}
        precise="⚡️ Powerfull buttons with different states and sizes "
      >
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
        </ButtonsSection>
      </SectionWrapper>
      <SectionWrapper
        title="Icons"
        direction="row"
        docs={<DocLink url="https://demo-design-system.vercel.app/?path=/docs/atoms-icon--docs" />}
        precise="💡 Icons names are provided from google material icons Outlined, you can find them here: https://fonts.google.com/icons"
      >
        <IconPresentationWrapper title="Small">
          <Icon size="small" icon="menu" />
        </IconPresentationWrapper>
        <IconPresentationWrapper title="Medium">
          <Icon size="medium" icon="home" />
        </IconPresentationWrapper>
        <IconPresentationWrapper title="Large">
          <Icon size="large" icon="close" />
        </IconPresentationWrapper>
        <IconPresentationWrapper title="Large + custom color">
          <Icon size="large" icon="star" color="orange" />
        </IconPresentationWrapper>
        <IconPresentationWrapper title="Large + and clickable">
          <Icon size="large" color="red" icon="favorite_border" isClickable action={() => alert("Liked")} />
        </IconPresentationWrapper>
      </SectionWrapper>
      <SectionWrapper
        title="Inputs"
        direction="row"
        docs={<DocLink url="https://demo-design-system.vercel.app/?path=/docs/atoms-textinput--docs" />}
        precise="💡 Here you can experiment hover & focus, to check error/success state, let's meet in forms in organisms"
      >
        <InputPresentationWrapper title="Default">
          <TextInput inputName="email" showPlaceholder={true} specifyLabel="Email" type="text" />
        </InputPresentationWrapper>
        <InputPresentationWrapper title="Required">
          <TextInput inputName="email" showPlaceholder={true} specifyLabel="Email" showRequired={true} type="text" />
        </InputPresentationWrapper>
        <InputPresentationWrapper title="No Label">
          <TextInput inputName="email" showPlaceholder={true} label={false} specifyLabel="Email" type="text" />
        </InputPresentationWrapper>
      </SectionWrapper>
      <SectionWrapper
        title="Tooltip"
        precise="⚡️ Wrap your components inside to display tooltip on hover"
        docs={<DocLink url="https://demo-design-system.vercel.app/?path=/docs/atoms-tooltip--docs" />}
      >
        <Tooltip text="👋 I am a tooltip ! I provide more information about the element you hovered !!!">
          <div style={{ backgroundColor: "#fff", fontSize: "18px", padding: "40px", width: "fit-content", borderRadius: "4px" }}>💁‍♂️ Hover me to see tooltip</div>
        </Tooltip>
      </SectionWrapper>
    </>
  );
};

export default Atoms;
