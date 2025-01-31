import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section
      id="hero"
      className="font-hind flex flex-col md:flex-row items-center justify-center md:justify-between pt-16 pb-5 px-0 lg:mt-10 "
    >
      <div className="flex-shrink-0 md:h-[26rem] w-full md:w-1/2 pt-2 mb-6 md:mb-0">
        <img
          src="/Donut.jpeg"
          alt="Beautiful Hair"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full">
        <div className="flex items-center justify-center w-full text-white  p-8 md:h-full">
          <div className="text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-orange-700/80">
              Refresh. Revive. Reveal the Real You
            </h1>
            <p className="text-sm md:text-xl mb-6 ">
              Discover our top-quality hair care services that make you feel
              beautiful inside and out.
            </p>
            <button className="relative px-4 py-3 text-lg bg-orange-600 font-medium text-black overflow-hidden rounded-lg transition-all duration-300 group shadow-white-shadow hover:shadow-white-hover">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-orange-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>

              <a
                href="https://www.google.com/maps/place/Kels+Unisex+Salon/@6.70224,3.3984871,17z/data=!4m15!1m8!3m7!1s0x103b95f923de28d9:0x10bbe64ac668e62f!2sKels+Unisex+Salon!8m2!3d6.7020046!4d3.3985627!10e5!16s%2Fg%2F11fk86g1yg!3m5!1s0x103b95f923de28d9:0x10bbe64ac668e62f!8m2!3d6.7020046!4d3.3985627!16s%2Fg%2F11fk86g1yg?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="relative text-base font-hind flex items-center gap-1"
              >
                <p>Visit Us</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm font-extrabold transition-transform duration-300 transform group-hover:translate-x-2"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
