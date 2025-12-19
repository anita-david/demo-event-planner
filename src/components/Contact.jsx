import Icons from "../assets/icons";

const Contact = () => {
 return ( <section className="bg-white py-20 lg:py-32">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
        Start Your Journey with Us
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Whether you have a date fixed or just a dream in mind, let's talk about
        making it a reality.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/2348012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-lg transition-all active:scale-95"
        >
          <Icons.WhatsApp /> Chat on WhatsApp
        </a>
        <a
          href="mailto:hello@abiolaevents.com"
          className="flex items-center justify-center bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black shadow-lg transition-all active:scale-95"
        >
          <Icons.Mail /> Email Our Team
        </a>
      </div>

      <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
        <p className="text-gray-500 font-medium italic">
          "The planning was seamless, the decor was breathtaking. Abiola Events
          truly understood our vision."
        </p>
        <p className="mt-2 font-bold text-emerald-900">— Mrs. Adeyemi, Lagos</p>
      </div>
    </div>
  </section>)
};
export default Contact;
