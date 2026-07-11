import { HeroCarousel } from "./hero-carousel";

const HeroSection = () => {
  return (
    <header className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="sr-only">
          Grüne Coffee — Coffee for Your Everyday Moments
        </h1>
        <HeroCarousel />
      </div>
    </header>
  );
};

export default HeroSection;
