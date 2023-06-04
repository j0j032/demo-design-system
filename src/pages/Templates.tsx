import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import Header from "../components/UIkit/template/Header/Header";

const Templates = () => {
  return (
    <>
      <PageHeading label="Template Elements" description="Header" />
      <SectionWrapper title="Header">
        <Header />
      </SectionWrapper>
    </>
  );
};

export default Templates;
