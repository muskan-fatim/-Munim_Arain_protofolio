import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
        <p className="text-lg mb-12 text-gray-400">
          Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12">
          <a
            href="https://pk.linkedin.com/in/abdul-munim-arain-99152128b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 group"
          >
            <FaLinkedin size={40} className="text-blue-500 group-hover:text-blue-700 transition" />
            <span className="text-lg font-semibold group-hover:text-blue-500 transition">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:abdulmunimarain5@gmail.com"
            className="flex items-center space-x-3 group"
          >
            <FaEnvelope size={40} className="text-blue-500 group-hover:text-blue-700 transition" />
            <span className="text-lg font-semibold group-hover:text-blue-500 transition">
              Email
            </span>
          </a>
          <a
            href="https://wa.me/+923192695200"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 group"
          >
            <FaWhatsapp size={40} className="text-blue-500 group-hover:text-blue-700 transition" />
            <span className="text-lg font-semibold group-hover:text-blue-500 transition">
              WhatsApp
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abdul Munim Arain. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

