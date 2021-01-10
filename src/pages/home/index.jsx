import Credits from "../../components/molecules/credits";
import Banner from "../../components/organisms/banner";
import Hero from "../../components/organisms/hero";

const Home = () => {
  return (
    <div className="absolute h-auto w-screen flex flex-col">
      <div className="relative h-screen w-screen">
        <Banner />
        <Hero />
      </div>
      <Credits />
    </div>
  );
};

export default Home;
