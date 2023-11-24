import Data from "./DataHome.json";

export const searchReview = (id) => {
  const reviewSelected = Data.resenias.find((review) => review.id === id);
  return reviewSelected;
};

export const searchNew = (id) => {
  const newSelected = Data.noticias.find((noticia) => noticia.id === id);
  return newSelected;
};
