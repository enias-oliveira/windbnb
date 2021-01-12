import Button from "../../atoms/buttons";
import HeroCall from "../../atoms/text/hero-call";

const Hero = () => {
  return (
    <main
      className="relative h-5/6 w-screen bg-hero-image bg-center bg-cover
    "
    >
      <section className="absolute top-1/3 mx-4">
        <HeroCall>Book unique places to stay</HeroCall>
        <Button>Explore nearby places</Button>
      </section>
    </main>
  );
};

export default Hero;
