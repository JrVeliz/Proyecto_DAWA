import { Banner, LatestReviews, NewsUpdates } from "./HomeBarrel";
import Footer from "../Footer";
import Header from "../Header";


export default function Home({ currentUser, logout }) {
  return (
    <>
      <Header userLogged={currentUser.username} buttonLogout={logout} />
      <body>
        <Banner />
        <LatestReviews />
        <NewsUpdates />
      </body>
      <Footer />
    </>
  );
}
