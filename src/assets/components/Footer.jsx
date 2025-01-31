import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="contact" className=" text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="text-center bg-[#14460f] py-6 rounded-lg shadow shadow-[#345232]">
            <h3 className="text-2xl font-sans font-bold mb-4">Contact Us</h3>
            <p className="text-orange-500">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> 08170368805
            </p>
            <p className="text-orange-500">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> House
              19b Forthright Estate behind Punch Newspaper, Lagos
            </p>
          </div>

          {/* Opening Hours */}
          <div className="text-center bg-[#14460f] py-6 rounded-lg shadow shadow-[#345232]">
            <h3 className="text-2xl font-sans font-bold mb-4">Opening Hours</h3>
            <p className="text-orange-500">
              Monday - Saturday: 9:00 AM - 7:00 PM
            </p>
            <p className="text-orange-500">Sunday: 1:00 PM - 7:00 PM</p>
          </div>

          {/* Social Media Links */}
          <div className="text-center bg-[#14460f] py-6 rounded-lg shadow shadow-[#345232]">
            <h3 className="text-2xl font-sans font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/kelshairservices"
                target="_blank"
                className="hover:text-white text-orange-500"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/kelshairservices"
                target="_blank"
                className="hover:text-white text-orange-500"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="mailto:kelshairservices@gmail.com"
                className="hover:text-white text-orange-500"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-12 text-center text-sm text-gray-300">
          <p>&copy; 2025 Kels Hair Service. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
