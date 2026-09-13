import { FaCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">

             <img src="/assets/logo-text.png"alt="" />

            </div>
            <p className="text-gray-400 text-xs leading-5 mt-4 max-w-sm ">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="flex gap-4 mt-5 text-xs text-gray-600 font-semibold">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>


          {/* Product */}
          <div>
             <h3 className="text-xs font-semibold text-gray-800 mb-4">
              PRODUCT
            </h3>
            <div className="flex flex-col gap-3 text-xs text-gray-400">

              <a href="#" className="hover:text-pink-500">
                Home
              </a>

              <a href="#" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>


          {/* Company */}
          <div>

            <h3 className="text-xs font-semibold text-gray-800 mb-4">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 text-xs text-gray-400">

              <a href="#" className="hover:text-pink-500">
                About
              </a>

              <a href="#" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>

            <h3 className="text-xs font-semibold text-gray-800 mb-4">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 text-xs text-gray-400">

              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>

            </div>

          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-400">

         
          <p className="flex justify-between items-center">
            <FaCopyright className="inline" />  2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;