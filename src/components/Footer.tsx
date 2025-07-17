import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              📚 Library Management System
            </h2>
            <p className="text-sm text-gray-400">
              Empowering readers. One book at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/books" className="hover:text-yellow-400 transition">
                  Books
                </a>
              </li>
              <li>
                <a href="/add-book" className="hover:text-yellow-400 transition">
                  Add Book
                </a>
              </li>
              <li>
                <a href="/borrow" className="hover:text-yellow-400 transition">
                  Borrow Summary
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Library Management System. All
            rights reserved.
          </p>
          <div className="space-x-4 mt-2">
            <a href="/privacy" className="hover:text-yellow-400 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-yellow-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
