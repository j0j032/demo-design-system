import { leads } from "../__mocks__/lead.mock";
import { products } from "../__mocks__/products.mock";
import CardGalleryWrapper from "../components/Showroom/CardGalleryWrapper/CardGalleryWrapper";
import DocLink from "../components/Showroom/DocLink/DocLink";
import PageHeading from "../components/Showroom/PageHeading/PageHeading";
import SectionWrapper from "../components/Showroom/SectionWrapper/SectionWrapper";
import LeadCard from "../components/UIkit/organisms/LeadCard/LeadCard";
import ProductCard from "../components/UIkit/organisms/ProductCard/ProductCard";

const Organisms = () => {
  return (
    <>
      <PageHeading label="Organism Elements" description="Cards" />
      <SectionWrapper
        title="Cards"
        precise="⚡️ To display product information in shopping lists, search results, and recommendations."
        docs={<DocLink url="https://demo-design-system.vercel.app/?path=/docs/organisms-productcard--docs" />}
      >
        <CardGalleryWrapper title="ProductCard">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardGalleryWrapper>
        <CardGalleryWrapper title="LeadCard">
          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </CardGalleryWrapper>
      </SectionWrapper>
    </>
  );
};

export default Organisms;
