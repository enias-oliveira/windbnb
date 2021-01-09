import { HeroButton } from "../../atoms/buttons";
import HeroCall from "../../atoms/text/hero-call";

const Hero = () => {
  return (
    <main
      className="relative h-2/3 w-screen bg-hero-image bg-center bg-cover
    "
    >
      <section className="absolute top-1/3 mx-4">
        <HeroCall>Book unique places to stay</HeroCall>
        <HeroButton>Explore nearby places</HeroButton>
      </section>
    </main>
  );
};

export default Hero;
