import Header from "./Header";
function Entretenimiento({currentUser, logout}) {
  return (
    <>
      <Header userLogged= {currentUser.username} buttonLogout={logout}/>
      <p>Hola soy Entretenimiento xd</p>
    </>
  );
}

export default Entretenimiento;
