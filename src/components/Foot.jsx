import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logo from "../assets/logo.png";

function Foot() {
  return (
    <footer className="bg-[#0B1F3A] text-slate-300 pt-16 pb-8">
      <div className="max-w-full-xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Ticks N Lines LLP Logo"
                className="h-12 w-auto object-contain px-2 py-1 "
              />

              <div>
                <h3 className="text-white font-semibold text-lg leading-tight">
                  Ticks N Lines LLP
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Delivering reliable accounting, compliance, and advisory services
              to help businesses operate efficiently and grow confidently.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition">
                  GST & Taxation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Accounting & Finance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Business Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  ESI
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  PF
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  labour law compliance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Registration & Licensing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Support Services
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MdOutlineMail className="mt-1" />
                <div>
                  <p>esipf@ticksnlines.com</p>
                  <p>salestax@ticksnlines.com</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <span>0484 2543885</span>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Opposite CMRL, Industrial Area <br />
                Muppathadom, Aluva <br />
                Kerala - 683110
              </p>
            </div>
          </div>
        </div>

        {/* CTA STRIP */}
        <div className="bg-blue-600 rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <p className="text-white font-medium text-center md:text-left">
            Need expert help with your business?
          </p>

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Get Consultation
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
              →
            </span>
          </Link>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} TicksNLinesLLP. All rights reserved.
          </p>

          <div className="flex gap-5 text-lg">
            <BsFacebook className="hover:text-white transition cursor-pointer" />
            <BsInstagram className="hover:text-white transition cursor-pointer" />
            <BsLinkedin className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
