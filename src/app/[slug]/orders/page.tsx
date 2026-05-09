import { OrdersPage } from "@/components/orders-page";

interface RestaurantOrdersPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantOrdersPage = async ({ params }: RestaurantOrdersPageProps) => {
  await params;

  return <OrdersPage />;
};

export default RestaurantOrdersPage;
