import Credits from "../../components/molecules/credits";
import Banner from "../../components/organisms/banner";
import Hero from "../../components/organisms/hero";

const Home = () => {
  return (
    <div className="absolute h-screen w-screen flex flex-col">
      <Banner />
      <Hero />
      <Credits />
    </div>
  );
};

export default Home;
