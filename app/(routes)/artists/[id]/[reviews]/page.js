import ArtistReviews from "@/app/pages/reviews/ArtistReviews";

const fetchReviews = async (id) => {
  const res = await fetch(`http://localhost:3500/api/artists/${id}/reviews`);
  const data = await res.json();
  return data;
};

const ReviewsPage = async ({ params }) => {
  const { id } = await params;
  const artistReviews = await fetchReviews(id);

  return <ArtistReviews data={artistReviews} />;
};

export default ReviewsPage;
