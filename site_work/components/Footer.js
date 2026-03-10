import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2f] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>

          <h2 className="text-white text-2xl font-semibold mb-4">
            Success Infra
          </h2>

          <p className="text-sm leading-relaxed mb-6">
            Helping you find the right property with expert consultancy,
            verified legal documentation, and smooth home loan assistance.
          </p>

          <div className="flex gap-4">

            <a className="p-3 border border-gray-600 rounded-md hover:bg-gray-700 transition">
              <Facebook size={18}/>
            </a>

            <a className="p-3 border border-gray-600 rounded-md hover:bg-gray-700 transition">
              <Instagram size={18}/>
            </a>

            <a className="p-3 border border-gray-600 rounded-md hover:bg-gray-700 transition">
              <Linkedin size={18}/>
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="hover:text-white cursor-pointer">
              Browse Properties
            </li>

            <li className="hover:text-white cursor-pointer">
              Our Projects
            </li>

            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

          </ul>

        </div>


        {/* Contact Section */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <MapPin size={18}/>
              <p>
                502 Devpath Building,
                Ashram Road, Ahmedabad
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18}/>
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18}/>
              <p>hello@successinfra.com</p>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-3 mt-6">

            <a
              href="https://wa.me/919876543210"
              className="bg-green-600 px-4 py-2 text-white text-sm rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://maps.google.com"
              className="border border-gray-500 px-4 py-2 text-sm rounded hover:bg-gray-700 transition"
            >
              View Map
            </a>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <p>
            © {new Date().getFullYear()} Success Infra. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>

            <span className="hover:text-white cursor-pointer">
              Sitemap
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}