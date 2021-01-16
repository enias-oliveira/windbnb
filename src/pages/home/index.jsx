import Credits from "../../components/molecules/credits";
import Banner from "../../components/organisms/banner";
import Hero from "../../components/organisms/hero";

const Home = () => {
  return (
    <div className="relative min-h-screen h-auto w-screen">
      <div className="absolute h-screen w-screen">
        <Banner />
        <Hero />;
      </div>
      <Credits />
    </div>
  );
};

export default Home;
