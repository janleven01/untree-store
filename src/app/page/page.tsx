import { dataCount, ourTeam, socialMediaLinks, whyChooseUs } from "@/constants";
import { Check } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About"
}

const DynamicPopularProducts = dynamic(
  () => import("@/components/PopularProducts"),
  {
    ssr: false,
    loading: () => (
      <div className="loading-styles">
        Loading...
      </div>
    ),
  }
);

const About = () => {
  return (
    <main>
      <section className="sm:min-h-[90vh] min-h-[70vh]">
        <div className="lg:absolute top-0 w-full">
          <Image
            src="/hero-slider-1.jpg"
            alt="hero slider 1"
            width={1900}
            height={1000}
            priority
            className="about_image"
          />
        </div>
        <div className="max-container">
          <div className="about_title-container">
            <h1 className="about_title">
              About Us
            </h1>
            <Link
              href="#why-choose-us"
              className="about_button-explore"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="max-container padding-y min-h-screen">
        <div className="w-full flex max-lg:flex-col gap-10 justify-between">
          <div className="flex flex-col w-full lg:w-[35%]">
            <h1 className="text-4xl animate-slideUpShort">Why Choose Us</h1>
            <p className="pt-10 pb-5 text-justify animate-slideUpShort">
              At Untree.co, we offer a unique shopping experience where every
              item is carefully curated to reflect both timeless style and
              modern trends. Our commitment to quality ensures that each piece
              is crafted to perfection, combining comfort, durability, and a
              touch of luxury. We believe in the power of fashion to tell your
              story, and we are dedicated to providing you with exceptional
              pieces that make you look and feel your best.
            </p>

            <div className="flex flex-col gap-3">
              {whyChooseUs.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <Check width={20} height={20} className="text-purple" />
                  <div>{item.label}</div>
                </div>
              ))}
            </div>

            <div className="about_dataCount">
              {dataCount.map((data) => (
                <div key={data.label} className="flex flex-col">
                  <h3 className="text-3xl">{data.number}</h3>
                  <h4 className="pt-2">{data.label}</h4>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Link
                href= "/shop"
                className="about_button-shopNow"
              > 
                Shop Now
              </Link>
              <Link
                href="#our-team"
                className="about_button-learnMore"
              > 
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative lg:max-w-[50%] flex justify-end">
            <div className="about_image2-container" />
            <Image
              src="/why-choose-us.jpg"
              alt="why choose us"
              height={955}
              width={955}
              className="about_image2"
            />
          </div>
        </div>
      </section>

      <section id="our-team" className="w-full bg-secondary min-h-screen">
        <div className="max-container py-20">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center">Our Team</h1>
            <p className="text-center pt-10 w-[60%]">
              Meet the visionary minds driving Untree, dedicated to curating a
              unique shopping experience that blends timeless style with modern
              trends.
            </p>
          </div>
          <div className="flex flex-wrap pt-20 gap-5">
            {ourTeam.map((item) => (
              <div
                key={item.name}
                className="flex-between flex-col w-72 flex-auto"
              >
                <Image
                  src={item.imgURL}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-contain rounded-full"
                />
                <h3 className="text-xl font-medium pt-5 pb-2">{item.name}</h3>
                <h4 className="text-gray-400">{item.title}</h4>
                <p className="text-center pt-5 leading-relaxed">
                  {item.desciption}
                </p>
                <div className="flex gap-1 py-10">
                  {socialMediaLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="about_links"
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={20}
                        height={20}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DynamicPopularProducts />
    </main>
  );
};

export default About;
