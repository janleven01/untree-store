import { footerLinks, socialMediaLinks } from "@/constants";
import Button from "./Button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-container padding-y">
        <div className="footer_about-links-container">
          {/* Subscribe */}
          <div className="footer_about-container">
            <h3 className="text-[17px]">About UntreeStore</h3>
            <p className="footer_about-description">
              Welcome to UntreeStore, where every item is a testament to quality
              and style. Explore our curated collection and uncover the perfect
              blend of elegance and functionality. Join our mailing list today
              for exclusive offers, updates on new arrivals, and a first look at
              what&apos;s trending. Your path to exceptional shopping starts here.
            </p>
            <h3 className="text-[17px] pt-5">
              Join our mailing list and receive exclusives
            </h3>
            <div className="flex pt-6 max-w-full">
              <input
                type="email"
                name="Email Address"
                id="email-address"
                placeholder="Email Address"
                className="footer_about-input"
              />
              <Button
                type="button"
                title="Subscribe"
                otherClassname="bg-black text-white hover:brightness-110"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between max-sm:gap-4 w-full">
            {footerLinks.map((item) => (
              <div key={item.label} className="sm:min-w-32">
                <h3 className="text-[17px] ">{item.label}</h3>
                <div className="pt-5">
                  {item.links.map((item, index) => (
                    <h4
                      key={index}
                      className="footer_links-text"
                    >
                      {item.link}
                    </h4>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Link */}
        <div className="footer_socmed-container">
          {socialMediaLinks.map((item) => (
            <div
              key={item.name}
              className="footer_socmed-icons"
            >
              <a href={item.href}>
                <Image src={item.src} alt={item.name} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      
        {/* Copyrights */}
        <div className="pt-5">
          <h4 className="footer_copyrights">
            Copyright ©2024. All Rights Reserved. Designed by{" "}
            <a
              href="https://untree.co/"
              target="_blank"
              className="footer_copyrights-href"
            >
              Untree.co
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
