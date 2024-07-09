import Image from "next/image";
import Link from "next/link";

const Promo = ({
  src,
  offer,
  title,
  description,
}: {
  src: string;
  offer: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full">
      <div className="max-container padding-y">
        <div className="relative">
          <Image
            src={`/${src}`}
            alt={src}
            width={1900}
            height={1000}
            priority
            className="promo_image"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="promo_text-container">
            <h4 className="promo_offer">
              {offer}
            </h4>
            <h1 className="promo_title">
              {title}
            </h1>
            <p className="promo_description">
              {description}
            </p>
            <Link href="/shop" className="button-styles bg-black text-white hover:brightness-125">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
