import Contact from "../components/Contact";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <>
      <div className="bg-emerald-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Expert Event Management
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
            Tailored solutions for every scale and style.
          </p>
        </div>
      </div>
      <Services />
      <Contact />
    </>
  );
};
export default ServicesPage;
