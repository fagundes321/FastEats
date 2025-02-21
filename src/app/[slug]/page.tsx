interface RestaurantPageProps {
  params: { slug: string };
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = params;
  return <h1>{slug}</h1>;
};

export default RestaurantPage;
