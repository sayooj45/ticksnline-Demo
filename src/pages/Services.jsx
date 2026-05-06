import Head from "../components/Head";
import Foot from "../components/Foot";
import gst from "../assets/gst.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";

function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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

  const clients = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/SmartCity_Kochi_Logo.JPG/250px-SmartCity_Kochi_Logo.JPG",
      name: "Cochin Smart City",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lulu_Logo.png/250px-Lulu_Logo.png",
      name: "Lulu Group",
    },
    {
      img: "https://speedwings.org/images/logo.png",
      name: "SpeedWings Aviation Academy",
    },
    {
      img: "https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png",
      name: "Wetzlar Resorts",
    },
    {
      img: "https://empressinfotech.com/images/logo_big.png",
      name: "Empress Systems",
    },
    {
      img: "https://admod.com/wp-content/uploads/2022/07/ad-png-1.png",
      name: "Admod Technologies",
    },
  ];

  const services = [
    {
      title: "Statutory & Compliance",
      desc: "GST, ESI, PF and labour law compliance handled efficiently.",
    },
    {
      title: "Accounting & Finance",
      desc: "Accurate financial management and reporting solutions.",
    },
    {
      title: "Audit & Assurance",
      desc: "Ensure transparency and compliance through audits.",
    },
    {
      title: "Business Consultancy",
      desc: "Strategic advisory to grow and optimize your business.",
    },
    {
      title: "Registration & Licensing",
      desc: "Hassle-free business setup and registrations.",
    },
    {
      title: "Support Services",
      desc: "Operational and documentation support daily.",
    },
  ];

  const items = [
    {
      title: "What makes our services stand out?",
      content:
        "Accurate, efficient, and reliable service delivery with expert professionals.",
    },
    {
      title: "Security & Confidentiality",
      content:
        "Strict data protection and secure systems for complete confidentiality.",
    },
    {
      title: "Trusted by Businesses",
      content: "350+ clients trust us for consistent, high-quality solutions.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <>
      <Head />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-50 pt-28 pb-20 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-[#0B1F3A]"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-slate-500 max-w-2xl mx-auto text-lg"
        >
          End-to-end business solutions designed to simplify operations, ensure
          compliance, and support growth.
        </motion.p>
      </motion.section>

      {/* WHY CHOOSE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <img
              src={gst}
              alt="GST"
              className="w-full h-[430px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </motion.div>

          <div>
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold text-[#0B1F3A] mb-8">
              Reliable Solutions Built for Your Business
            </h2>

            <div className="space-y-5">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full flex justify-between items-center px-5 py-4"
                  >
                    <span className="font-semibold text-[#0B1F3A]">
                      {item.title}
                    </span>

                    <span
                      className={`transition ${
                        active === i ? "rotate-180" : ""
                      }`}
                    >
                      <GoChevronDown />
                    </span>
                  </button>

                  {active === i && (
                    <div className="px-5 pb-5 text-slate-500">
                      {item.content}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Services We Provide
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="rounded-3xl border bg-slate-50 p-8 shadow-md hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-500">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CLIENTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 bg-slate-50 overflow-hidden"
      >
        <div className="text-center mb-14 px-6">
          <h2 className="text-4xl font-bold text-[#0B1F3A]">
            Trusted By Leading Clients
          </h2>
        </div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="w-64 bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={client.img}
                alt={client.name}
                className="h-16 mx-auto object-contain grayscale hover:grayscale-0 transition"
              />
              <p className="mt-4 text-sm text-slate-500">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              What Clients Say
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              "Ticks N Lines simplified our compliance process.",
              "Reliable and highly professional service.",
              "Excellent financial guidance for our growth.",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl p-8 shadow-md"
              >
                <p className="text-slate-600 italic">“{item}”</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 bg-slate-50 px-6"
      >
        <div className="max-w-7xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Simplify Your Business?
          </h2>

          <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
            Let our experts manage compliance, accounting, and business growth.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Get Expert Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Foot />
    </>
  );
}

export default Services;
