import Foot from "../components/Foot";
import Head from "../components/Head";
import aboutImg from "../assets/aboutimg.jpg";
import certImg from "../assets/certficate.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

function About() {
  const values = [
    {
      title: "Integrity",
      desc: "Transparent processes, ethical practices, and complete confidentiality in every engagement.",
    },
    {
      title: "Experience",
      desc: "25+ years of professional expertise serving businesses across industries.",
    },
    {
      title: "Accuracy",
      desc: "Reliable accounting, timely filings, and precise statutory compliance.",
    },
    {
      title: "Commitment",
      desc: "We grow when our clients grow. Your success remains our priority.",
    },
  ];

  const sectors = [
    "Manufacturing",
    "Trading",
    "Distribution",
    "Retail Outlets",
    "Showrooms",
    "C & F Agencies",
    "MSME Businesses",
    "Service Firms",
  ];

  const process = [
    {
      no: "01",
      title: "Understand",
      desc: "We study your business structure, processes, and compliance needs.",
    },
    {
      no: "02",
      title: "Plan",
      desc: "We create practical accounting, HR, and statutory solutions tailored to you.",
    },
    {
      no: "03",
      title: "Execute",
      desc: "Handled monthly compliance return filings including ESI, PF, GST and annual returns.",
    },
  ];

  return (
    <>
      <Head />

      <div className="bg-slate-50 overflow-x-hidden">
        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="pt-28 pb-20 px-6 text-center"
        >
          <p className="uppercase tracking-[5px] text-blue-600 text-sm font-semibold">
            About Ticks N Lines LLP
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#0B1F3A] mt-4">
            Your Personalised
            <br />
            Accounting Professionals
          </h1>

          <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
            Delivering professional accounting, taxation, HR, and statutory
            compliance solutions with a personalized approach for every client.
          </p>
        </motion.section>

        {/* COMPANY STORY */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pb-24 px-6"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <motion.img
              variants={fadeLeft}
              whileHover={{ scale: 1.03 }}
              src={aboutImg}
              alt="About"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />

            <motion.div variants={fadeRight}>
              <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
                Who We Are
              </p>

              <h2 className="text-4xl font-bold text-[#0B1F3A] mt-4 mb-6">
                Trusted for 25+ Years
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Ticks N Lines LLP is a professional accounting and advisory firm
                committed to helping businesses simplify operations and stay
                compliant in an evolving regulatory environment.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Our team of accountants, tax practitioners, and labour matter
                specialists supports businesses with practical solutions,
                reliable reporting, and timely statutory compliance.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  ["25+", "Years of Excellence"],
                  ["500+", "Happy Clients"],
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="bg-white rounded-2xl p-5 shadow-md"
                  >
                    <h3 className="text-3xl font-bold text-[#0B1F3A]">
                      {item[0]}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">{item[1]}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* VALUES */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-white px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              Our Core Strengths
            </h2>

            <motion.div
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            >
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-slate-50 rounded-2xl p-8 shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* INDUSTRIES */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6"
        >
          <div className="max-w-7xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
                  Industries We Serve
                </p>

                <h2 className="text-4xl font-bold text-white mt-4">
                  Diverse Sectors. One Trusted Partner.
                </h2>

                <p className="text-blue-100 mt-6 leading-relaxed text-lg">
                  We proudly support businesses ranging from startups and MSMEs
                  to established enterprises across multiple sectors.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {sectors.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="bg-white/10 rounded-2xl p-4 text-white text-center"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROCESS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-white px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              Our Approach
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              How We Work
            </h2>

            <motion.div
              variants={stagger}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 rounded-2xl p-8 shadow-md"
                >
                  <p className="text-blue-600 font-bold text-2xl">{item.no}</p>

                  <h3 className="text-2xl font-bold text-[#0B1F3A] mt-3 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CREDENTIALS */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeLeft}>
              <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
                Our Credentials
              </p>

              <h2 className="text-4xl font-bold text-[#0B1F3A] mt-4 mb-6">
                Certified & Trusted
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our reputation is built on professional excellence, trusted
                client relationships, confidentiality, and years of consistent
                service delivery.
              </p>
            </motion.div>

            <motion.img
              variants={fadeRight}
              whileHover={{ scale: 1.03 }}
              src={certImg}
              alt="Certificate"
              className="w-full h-[500px] object-contain rounded-3xl shadow-xl bg-white p-6"
            />
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pb-24 px-6"
        >
          <div className="max-w-7xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Simplify Your Business?
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
              Let our experts manage accounting, taxation, HR, and compliance
              while you focus on growth.
            </p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                Get Consultation
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Foot />
    </>
  );
}

export default About;
