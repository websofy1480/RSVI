import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const RenderStars = (rating: number) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`full-${i}`} className="text-formbg" />);
  if (half) stars.push(<FaStarHalfAlt key="half" className="text-formbg" />);
  return stars;
};
