import { Link } from "react-router-dom";

import Button from "../../atoms/buttons";
import HeroCall from "../../atoms/text/hero-call";

const Hero = () => {
  return (
    <section className="absolute top-1/3 mx-4">
      <HeroCall>Book unique places to stay</HeroCall>
      <Link to="/places">
        <Button>Explore nearby places</Button>
      </Link>
    </section>
  );
};

export default Hero;
