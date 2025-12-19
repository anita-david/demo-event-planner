import { Link } from "react-router-dom";
import Icons from "../assets/icons";

const Services = () => {
  const services = [
    {
      title: "Luxury Weddings",
      description:
        "Comprehensive planning from traditional engagements to white weddings. We handle vendors, decor, and protocol.",
      icon: <Icons.Wedding />,
    },
    {
      title: "Corporate Excellence",
      description:
        "Product launches, AGMs, and gala nights that reflect your brand's prestige and professional standards.",
      icon: <Icons.Corporate />,
    },
    {
      title: "Private Celebrations",
      description:
        "Intimate birthday soirées, anniversaries, and graduations curated with a personal touch and creative flair.",
      icon: <Icons.Party />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Signature Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just plan events; we create atmospheres that resonate with
            your guests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="text-emerald-700 font-bold hover:text-emerald-900 inline-flex items-center"
              >
                Learn more{" "}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
