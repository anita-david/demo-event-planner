import { Link } from "react-router-dom";

const Hero = () => {
  return (<section className="bg-white py-12 lg:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Designing Moments that{" "}
            <span className="text-emerald-700">Last a Lifetime</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            From luxury Lagos weddings to high-profile corporate galas in Abuja,
            we bring your vision to life with precision, elegance, and Nigerian
            hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-emerald-700 text-white text-center px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-emerald-800 transition-all hover:shadow-emerald-200"
            >
              Book Your Date
            </Link>
            <Link
              to="/services"
              className="bg-white text-emerald-800 text-center border-2 border-emerald-100 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all"
            >
              See Our Portfolio
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
            alt="Elegantly decorated wedding reception hall"
            className="rounded-3xl shadow-2xl w-full h-100 lg:h-150 object-cover relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
            <p className="text-emerald-800 font-bold text-xl tracking-tight">
              500+ Events Planned
            </p>
            <p className="text-gray-500 text-sm">Excellence across Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
};
export default Hero;
