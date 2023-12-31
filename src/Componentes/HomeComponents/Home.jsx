import { Banner, LatestReviews, NewsUpdates } from "./HomeBarrel";
import Footer from "../Footer";
import Header from "../Header";


export default function Home({ currentUser, logout }) {
  return (
    <section style={{ backgroundColor: 'white'}}>
      <Header userLogged={currentUser.username} buttonLogout={logout} />
        <Banner />
        <LatestReviews />
        <NewsUpdates />
      <Footer />
    </section>
  );
}
