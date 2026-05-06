import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Foot() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <footer className="bg-[#0B1F3A] text-slate-300 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14"
        >
          {/* BRAND */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <motion.img
                whileHover={{ rotate: 5, scale: 1.05 }}
                src={logo}
                alt="Ticks N Lines LLP Logo"
                className="h-12 w-auto object-contain px-2 py-1"
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
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-semibold mb-4">Services</h3>

            <ul className="space-y-2 text-sm">
              {[
                "GST & Taxation",
                "Accounting & Finance",
                "Audit & Assurance",
                "Business Consultancy",
                "ESI",
                "PF",
                "Labour Law Compliance",
                "Registration & Licensing",
                "Support Services",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="hover:text-white hover:translate-x-1 transition inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-1 transition inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp}>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MdOutlineMail className="mt-1 text-blue-400" />

                <div>
                  <p>esipf@ticksnlines.com</p>
                  <p>salestax@ticksnlines.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span>0484 2543885</span>
              </div>

              <p className="text-slate-400 leading-relaxed">
                Opposite CMRL, Industrial Area <br />
                Muppathadom, Aluva <br />
                Kerala - 683110
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 rounded-3xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-10 shadow-xl"
        >
          <p className="text-white font-medium text-center md:text-left text-lg">
            Need expert help with your business?
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
            >
              Get Consultation
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} TicksNLinesLLP. All rights reserved.
          </p>

          <div className="flex gap-5 text-lg">
            {[BsFacebook, BsInstagram, BsLinkedin].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.15 }}
                className="cursor-pointer text-slate-400 hover:text-white transition"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Foot;
