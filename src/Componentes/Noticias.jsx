import Header from "./Header";

function Noticias({currentUser, logout}) {
  return (
    <>
      <Header userLogged= {currentUser.username} buttonLogout={logout}/>
      <p>Hola soy Noticias xd</p>
    </>
  );
}

export default Noticias;
