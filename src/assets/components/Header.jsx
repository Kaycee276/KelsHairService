import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-[#14460f] text-[#b2a8a8] fixed w-full top-0 left-0 z-50 shadow-md shadow-[#345232]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-sm sm:text-2xl md:text-2xl lg:text-2xl font-bold">
          <a href="/" className="text-white">
            <span className="text-orange-600">Kels</span> Hair Services
          </a>
        </div>

        {/* Navbar */}
        <nav className="space-x-6 font-sans text-sm md:text-xl lg:text-base">
          <a href="#hero" className="hover:text-orange-500">
            Home
          </a>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
