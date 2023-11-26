import Header from "./Header";
function ResenaJuego({currentUser,logout}) {
  return (
    <>
      <Header userLogged={currentUser.username} buttonLogout={logout}  />
      <p>Hola soy Reseña de un juego xd</p>
    </>
  );
}

export default ResenaJuego;
