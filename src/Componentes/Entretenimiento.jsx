import Header from "./Header";
function Entretenimiento({currentUser, logout}) {
  return (
    <>
      <Header userLogged= {currentUser} buttonLogout={logout}/>
      <p>Hola soy Entretenimiento xd</p>
    </>
  );
}

export default Entretenimiento;
