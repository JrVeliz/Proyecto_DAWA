import Header from "./Header";
function Account({currentUser, logout}){
    return(
      <>
      <Header userLogged= {currentUser} buttonLogout={logout}/>
      <p>Hola soy Account xd</p>
      </>
    );
}

export default Account;