import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-green-800 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-sm sm:text-2xl md:text-2xl lg:text-2xl font-bold">
          <a href="/" className="text-white">
            Hair Salon
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
