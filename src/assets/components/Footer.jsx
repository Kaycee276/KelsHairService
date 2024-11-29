import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="contact" className="bg-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-orange-500">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> +123 456 7890
            </p>
            <p className="text-orange-500">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> 123 Hair
              Salon St., City
            </p>
          </div>

          {/* Opening Hours */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
            <p className="text-orange-500">
              Monday - Friday: 9:00 AM - 7:00 PM
            </p>
            <p className="text-orange-500">Saturday: 10:00 AM - 6:00 PM</p>
            <p className="text-orange-500">Sunday: Closed</p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-white text-orange-500">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="hover:text-white text-orange-500">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="hover:text-white text-orange-500">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-12 text-center text-sm text-gray-300">
          <p>&copy; 2024 Hair Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
