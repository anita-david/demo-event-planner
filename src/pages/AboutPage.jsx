import { Link } from "react-router-dom";

const AboutPage = () => {
  return (<section className="py-20 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
          alt="Our event planning team at work"
          className="rounded-3xl shadow-xl mb-12 lg:mb-0"
        />
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Founded in 2015, Abiola Events began with a simple passion for
            hospitality and order. Over the years, we have grown into one of
            Nigeria's most trusted planning agencies.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our team consists of creative designers, logistics experts, and
            on-site coordinators who ensure your event runs without a hitch. We
            believe every detail matters—from the scent of the flowers to the
            timing of the toasts.
          </p>
          <Link
            to="/contact"
            className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all"
          >
            Join Our Clients
          </Link>
        </div>
      </div>
    </div>
  </section>)
};
export default AboutPage;
