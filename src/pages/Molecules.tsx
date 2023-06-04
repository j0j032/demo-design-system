import { imgLinks } from "../__mocks__/imgLinks.mock";
import DocLink from "../components/Showroom/DocLink/DocLink";
import DropdownPresentationWrapper from "../components/Showroom/DropdownPresentationWrapper/DropdownPresentationWrapper";
import IconPresentationWrapper from "../components/Showroom/IconPresentationWrapper/IconPresentationWrapper";
import InputPresentationWrapper from "../components/Showroom/InputPresentationWrapper/InputPresentationWrapper";
import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import Dropdown from "../components/UIkit/mollecules/Dropdown/Dropdown";
import ImageLink from "../components/UIkit/mollecules/ImageLink/ImageLink";
import Rating from "../components/UIkit/mollecules/Rating/Rating";
import SearchInput from "../components/UIkit/mollecules/SearchInput/SearchInput";
import Toast from "../components/UIkit/mollecules/Toast/Toast";

const Molecules = () => {
  return (
    <>
      <PageHeading label="Molecular Elements" description="Dropdown | SearchInput | Rating | ImageLinks | Toast " />
      <SectionWrapper title="Dropdowns" precise="⚡️ Fully Customizable drop down" docs={<DocLink url="https://demo-design-system-carrefour-docs.vercel.app/?path=/docs/molecules-dropdown--docs" />}>
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
      <SectionWrapper
        title="Search Input"
        precise="⚡️ To display search input"
        direction="row"
        docs={<DocLink url="https://demo-design-system-carrefour-docs.vercel.app/?path=/docs/molecules-searchinput--docs" />}
      >
        <SearchInput />
      </SectionWrapper>
      <SectionWrapper title="Rating" precise="⚡️ To display ratings" direction="row" docs={<DocLink url="https://demo-design-system-carrefour-docs.vercel.app/?path=/docs/molecules-rating--docs" />}>
        <IconPresentationWrapper title="Small">
          <Rating rating={2.2} size="small" />
        </IconPresentationWrapper>
        <IconPresentationWrapper title="Default">
          <Rating rating={3.3} />
        </IconPresentationWrapper>
        <IconPresentationWrapper title="Large">
          <Rating rating={4.4} size="large" />
        </IconPresentationWrapper>
      </SectionWrapper>
      <SectionWrapper
        title="Image Links"
        precise="⚡️ To display image links format"
        direction="row"
        docs={<DocLink url="https://demo-design-system-carrefour-docs.vercel.app/?path=/docs/molecules-imagelink--docs" />}
      >
        {imgLinks.map((imgLink) => (
          <ImageLink key={imgLink.id} image={imgLink.src} format={imgLink.format} linkedTo={imgLink.linkedTo} alt={imgLink.alt} />
        ))}
      </SectionWrapper>
      <SectionWrapper
        title="Toasts"
        precise="⚡️ To display notifications"
        direction="row"
        docs={<DocLink url="https://demo-design-system-carrefour-docs.vercel.app/?path=/docs/molecules-toast--docs" />}
      >
        <InputPresentationWrapper title="Info">
          <Toast category="info" text="This is an info toast" />
        </InputPresentationWrapper>
        <InputPresentationWrapper title="warning">
          <Toast category="warning" text="This is a warning toast" />
        </InputPresentationWrapper>
        <InputPresentationWrapper title="error">
          <Toast category="error" text="This is an error toast" />
        </InputPresentationWrapper>
        <InputPresentationWrapper title="success">
          <Toast category="success" text="This is a success toast" />
        </InputPresentationWrapper>
      </SectionWrapper>
    </>
  );
};

export default Molecules;
