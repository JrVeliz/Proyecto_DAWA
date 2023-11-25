import { Top } from "../TopComponents/TopBarrel";
import Header from "../Header";
import Footer from "../Footer";

export default function TopJuegos({currentUser, logout}) {
  return (
    <>
      <Header userLogged= {currentUser.username} buttonLogout={logout}/>
      <body>
        <Top />
      </body>
      <Footer />
    </>
  );
}

