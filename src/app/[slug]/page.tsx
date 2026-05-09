import { RestaurantHome } from "@/components/restaurant-home";

interface RestaurantePageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantePage = async ({ params }: RestaurantePageProps) => {
  await params;

  return <RestaurantHome />;
};

export default RestaurantePage;
