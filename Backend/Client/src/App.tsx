import NavBar from "./NavBar";
import Footer from "./Footer";
import ImgCard from "./ImgCard";
import SlideCat from "./SlideCat";
import Slogan from "./slogan";
import Post from "./Post";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <ImgCard />
        <Slogan />
        <SlideCat />
        <Post />
        <Footer />
      </div>
    </>
  );
}

export default App;
