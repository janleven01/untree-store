import Button from "@/components/Button";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="sm:min-h-[90vh] min-h-[70vh]">
      <ImageSlider />
      <div className="max-container">
        <div className="hero_title-container">
          <h1 className="hero_title">
            Explore curated collections here at{" "}
            <span className="text-purple">Untree.co</span>
          </h1>
          <Link
            href='/shop'
            className="button-styles hover:bg-black hover:text-white"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
