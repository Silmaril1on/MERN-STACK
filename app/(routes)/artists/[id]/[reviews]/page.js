import ArtistReviews from "@/app/pages/reviews/ArtistReviews";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id, "from reviews page");

  return <ArtistReviews />;
};

export default page;
