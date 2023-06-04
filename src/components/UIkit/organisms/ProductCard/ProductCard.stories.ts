import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";
import { products } from "../../../../__mocks__/products.mock";

const meta = {
  title: "Organisms/ProductCard",
  tags: ["autodocs"],
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardWithPromo: Story = {
  args: { product: products[1] },
};

export const CardWithoutPromo: Story = {
  args: { product: products[0] },
};
