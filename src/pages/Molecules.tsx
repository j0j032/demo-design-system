import DocLink from "../components/Showroom/DocLink/DocLink";
import DropdownPresentationWrapper from "../components/Showroom/DropdownPresentationWrapper/DropdownPresentationWrapper";
import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import Dropdown from "../components/UIkit/mollecules/Dropdown/Dropdown";

const Molecules = () => {
  return (
    <div>
      <PageHeading label="Molecular Elements" description="Dropdown | Tooltip | Notification | Drag & Drop" />
      <SectionWrapper title="Dropdowns" precise="⚡️ Fully Customizable drop down" docs={<DocLink url="https://demo-design-system.vercel.app/?path=/docs/molecules-dropdown--docs" />}>
        <DropdownPresentationWrapper title="Default">
          <Dropdown title="Dropdown 1">
            <p>Dropdown content 1</p>
          </Dropdown>
          <Dropdown title="Dropdown 2">
            <p>Dropdown content 2</p>
          </Dropdown>
          <Dropdown title="Dropdown 3">
            <p>Dropdown content 3</p>
          </Dropdown>
        </DropdownPresentationWrapper>
        <DropdownPresentationWrapper title="Custom">
          <Dropdown title="Dropdown 1" color="var(--Primary)" backgroundColor="var(--BG-contrast)" borderRadius={"12px 12px 0 0"} separatorColor="var(--White)">
            <p>Dropdown content</p>
          </Dropdown>
          <Dropdown title="Dropdown 2" color="var(--Primary)" backgroundColor="var(--BG-contrast)" borderRadius={"0 0 12px 12px "} separatorColor="var(--White)">
            <p>Dropdown content</p>
          </Dropdown>
        </DropdownPresentationWrapper>
        <DropdownPresentationWrapper title="With icon">
          <Dropdown title="Dropdown" icon="check_circle">
            <p>Dropdown content</p>
          </Dropdown>
        </DropdownPresentationWrapper>
        <DropdownPresentationWrapper title="Without Separators">
          <Dropdown title="Dropdown" icon="shopping_cart" hideSeparator borderRadius={"4px "} backgroundColor="var(--Secondary)" color="#fff">
            <p style={{ color: "pink" }}>Dropdown content</p>
          </Dropdown>
        </DropdownPresentationWrapper>
      </SectionWrapper>

      <SectionWrapper title="Tooltips" precise="⚡️ Wrap your components inside to display tooltip on hover">
        <p>tooltip</p>
      </SectionWrapper>
    </div>
  );
};

export default Molecules;
