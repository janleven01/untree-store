import { services } from "@/constants";

const Services = () => {
  return (
    <section className="w-full bg-secondary">
      <div className="max-container padding-y">
        <div className="flex gap-6 flex-wrap">
          {services.map((item) => (
            <div
              key={item.label}
              className="services_container"
            >
              <item.icon size={32} strokeWidth={1.5} />
              <h3 className="services_label">
                {item.label}
              </h3>
              <p className="services_description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
