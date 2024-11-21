import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({
  params: { productId },
}: Props): Metadata => {
  return { title: `Product ${productId}` };
};
export default function ProductDetails({ params }: Props) {
  const { productId } = params;
  return (
    <>
      <h1>Product {productId} Details</h1>
    </>
  );
}
