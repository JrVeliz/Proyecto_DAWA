export const buscarUsuario = async (accountToVerified) => {
  try {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...accountToVerified,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (error) {
    console.log("error al buscar el usuario registrado" + error);
  }
};

export const crearUsuario = async (accountToRegister) => {
  try {
    const res = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...accountToRegister,
      }),
    });
    const data = await res.json();
    const state = data;
    return state;
  } catch (error) {
    console.log("error al crear usuario" + error);
  }
};

export const actualizarUsuario = async (accountToUpdate) => {
  try {
    const res = await fetch("http://localhost:3001/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...accountToUpdate,
      }),
    });
    const data = await res.json();
    const state = data;
    return state;
  } catch (error) {
    console.log("error al actualizar los datos del usuario" + error);
  }
};

export const selectReviews = async () => {
  try {
    const res = await fetch("http://localhost:3001/reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    const reviews = data;
    return reviews;
  } catch (error) {
    console.log("error al traer los datos de las reseñas" + error);
  }
};

export const selectReviewsByID = async (idReview) => {
  try {
    const res = await fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...idReview,
      }),
    });
    const data = await res.json();
    const review = data;
    return review;
  } catch (error) {
    console.log("error al traer los datos de la reseña con ese id" + error);
  }
};

export const selectNews = async () => {
  try {
    const res = await fetch("http://localhost:3001/news", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    const reviews = data;
    return reviews;
  } catch (error) {
    console.log("error al traer los datos de las noticias desde la bd" + error);
  }
};

export const selectNewsById = async (idNew) => {
  try {
    const res = await fetch("http://localhost:3001/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...idNew,
      }),
    });
    const data = await res.json();
    const New = data;
    return New;
  } catch (error) {
    console.log("error al traer los datos de la noticia con ese id" + error);
  }
};

export const selectTopGames = async () => {
  try {
    const res = await fetch("http://localhost:3001/topjuegos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    const games = data;
    return games;
  } catch (error) {
    console.log("error al traer los datos del top juegos" + error);
  }
};

export const selectTopGamesByID = async (idJuego) => {
  try {
    const res = await fetch("http://localhost:3001/topjuegos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...idJuego,
      }),
    });
    const data = await res.json();
    const Juego = data;
    return Juego;
  } catch (error) {
    console.log("error al traer los datos del juego con ese id" + error);
  }
};

export const createReviewComment = async (commentToRegister) => {
  try {
    const res = await fetch("http://localhost:3001/createComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...commentToRegister,
      }),
    });
    const data = await res.json();
    const state = data;
    return state;
  } catch (error) {
    console.log("error al registrar el comentario" + error);
  }
};

export const getReviewComments = async (idResenia) => {
  try {
    const res = await fetch("http://localhost:3001/getComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...idResenia,
      }),
    });
    const data = await res.json();
    const comments = data;
    return comments;
  } catch (error) {
    console.log("error al traer los comentarios de las reseña actual" + error);
  }
};

export const deleteReviewComment = async (idComentario) => {
  try {
    const res = await fetch("http://localhost:3001/deleteComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...idComentario,
      }),
    });
    const data = await res.json();
    const state = data;
    return state;
  } catch (error) {
    console.log("error al eliminar el comentario" + error);
  }
};
