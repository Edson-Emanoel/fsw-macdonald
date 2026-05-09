import { notFound } from "next/navigation";

import { ProductFlow } from "@/components/product-flow";
import { getProductById } from "@/lib/demo-food";

interface ProductPageProps {
  params: Promise<{ slug: string; productid: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productid } = await params;
  const selectedProduct = getProductById(productid);

  if (!selectedProduct) {
    notFound();
  }

  return <ProductFlow product={selectedProduct} />;
};

export default ProductPage;
