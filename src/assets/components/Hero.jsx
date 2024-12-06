import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-16 pb-5 px-0 lg:mt-10 "
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 pt-2 mb-6 md:mb-0">
        <img
          src="https://img.freepik.com/free-photo/two-beautiful-young-african-people-standing-against-white-wall_273609-6724.jpg?t=st=1731950566~exp=1731954166~hmac=7aa77dd31faa7f0f0d2a8d5b720104f2c0a80cbc097695aba6f26c8607ac565e&w=740"
          alt="Beautiful Hair"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full h-full">
        <div className="flex items-center justify-center w-full  bg-white text-black   p-8 md:h-full">
          <div className="text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-orange-500">
              Refresh. Revive. Reveal the Real You
            </h1>
            <p className="text-sm md:text-xl mb-6">
              Discover our top-quality hair care services that make you feel
              beautiful inside and out.
            </p>
            <button className="relative px-4 py-3 text-lg bg-orange-500 font-medium text-black overflow-hidden rounded-lg transition-all duration-300 group shadow-white-shadow hover:shadow-white-hover">
              {/* Custom Gradient Background */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-orange-500 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>

              {/* Text with Arrow */}
              <span className="relative flex items-center gap-1">
                <p>Visit Us</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm font-extrabold transition-transform duration-300 transform group-hover:translate-x-2"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
