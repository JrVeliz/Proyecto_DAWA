import Footer from "../Footer";
import Header from "../Header";
import News from "./News";

function Noticias({currentUser, logout}) {
  return (
    <>
      <Header userLogged= {currentUser.username} buttonLogout={logout}/>
      <body>
      <p>Hola soy Noticias xd</p>
        <News />
      </body>
      <Footer />
    </>
  );
}
export default Noticias;
