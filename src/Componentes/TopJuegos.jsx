import Header from "./Header";
function TopJuegos({currentUser, logout}) {
  return (
    <>
      <Header userLogged= {currentUser} buttonLogout={logout}/>
      <p>Hola soy Top de juegos xd</p>
    </>
  );
}

export default TopJuegos;
