import Button from "@/components/Button";
import Form from "@/components/Form";
import Header from "@/components/Header";
import { contacts } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact"
}

const Contact = () => {

  return (
    <main>
      <header className="min-h-[30vh]">
        <Header title="Contact" />
      </header>

      <section className="max-container padding-y">
        <div className="contact_form-container">
          {/* Input */}
          <div className="min-w-[58%]">
            <form className="grid grid-cols-1 gap-5">
              <div className="grid grid-cols-2 gap-5">
                <Form
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  isContact={true}
                  contactForm="contact-form"
                  noLabel={true}
                />
                <Form
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  isContact={true}
                  contactForm="contact-form"
                  noLabel={true}
                />
              </div>
              <Form
                type="text"
                name="subject"
                aria-label="Subject"
                placeholder="Your Subject"
                isContact={true}
                contactForm="contact-form"
                noLabel={true}
              />
              <textarea
                rows={5}
                id="message"
                name="message"
                aria-label="Message"
                placeholder="Message"
                className="contact-form"
              />
              <Button
                type="submit"
                title=" Send Message"
                otherClassname="contact_form-button"
              />
            </form>
          </div>
          {/* Information */}
          <div className="flex flex-col gap-5">
            {contacts.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex-center w-10 h-10 rounded-full bg-purple">
                  <item.icon width={30} height={30} fill="#FFFFFF" className="p-1 text-purple" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg">{item.label}</h3>
                  <h4 className="text-sm">{item.information}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
