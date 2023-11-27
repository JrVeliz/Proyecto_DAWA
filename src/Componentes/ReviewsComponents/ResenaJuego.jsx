import Header from "../Header";
import Footer from "../Footer";
import Reviews from "./Reviews";


function ResenaJuego({currentUser,logout}) {
  return (
    <>
      <Header userLogged={currentUser.username} buttonLogout={logout}  />
      <body>
        <Reviews />
      </body>
      <Footer />
    </>
  );
}

export default ResenaJuego;
