import Foot from "../components/Foot";
import Head from "../components/Head";
import heroVid from "../assets/heroVid.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      staggerChildren: 0.15,
    },
  },
};

const Counter = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

function Landingpage() {
  const clients = [
    {
      img: "https://imgs.search.brave.com/MH6iXcMaBSOr8QHJAadcjjxdesYnogQFTA4BMycCN0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWhi/cHIwOXB3ejBzay5j/bG91ZGZyb250Lm5l/dC9sb2dvX3VybC9j/b2NoaW4tc21hcnQt/bWlzc2lvbi1saW1p/dGVkLTg1NmZiYTlj",
      name: "SmartCity Kochi",
    },
    {
      img: "https://empressinfotech.com/images/logo_big.png",
      name: "Empress InfoTech",
    },
    {
      img: "https://speedwings.org/images/logo.png",
      name: "SpeedWings Aviation Academy",
    },
    {
      img: "https://admod.com/wp-content/uploads/2022/07/ad-png-1.png",
      name: "Admod Technologies",
    },
    {
      img: "https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png",
      name: "Wetzlar Resorts",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lulu_Logo.png/250px-Lulu_Logo.png",
      name: "Lulu Group",
    },
  ];

  const facilities = [
    "Trained Consultants",
    "Best Office Infrastructure",
    "Secured Record Room",
    "Conference Facility",
  ];

  const services = [
    "Accounting & Bookkeeping",
    "GST & Tax Filing",
    "Payroll Processing",
    "Audit & Assurance",
    "Business Registration",
    "Tax Planning",
  ];

  const security = [
    "Strict Client Confidentiality",
    "Secured Record Rooms",
    "Protected Financial Data",
    "Trusted & Ethical Practices",
  ];

  return (
    <>
      <Head />

      <div className="overflow-x-hidden bg-slate-50">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden">
          <video
            src={heroVid}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0B1F3A]/80" />

          <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[5px] text-blue-300 text-sm font-semibold"
              >
                Ticks N Lines LLP
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white text-4xl md:text-7xl font-bold mt-4 leading-tight"
              >
                Your Personalised <br />
                Accounting Professionals
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
              >
                Professional Accounting & HR Practices, Yet Personalized to Suit
                Your Business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  Get Consultation
                </Link>

                <Link
                  to="/about"
                  className="px-7 py-3 border border-white/40 text-white rounded-full hover:bg-white hover:text-[#0B1F3A]"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 px-6 bg-slate-50"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { value: 25, suffix: "+", label: "Years of Excellence" },
              { value: 500, suffix: "+", label: "Satisfied Clients" },
              { value: 100, suffix: "%", label: "Commitment & Trust" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center"
              >
                <h3 className="text-4xl font-bold text-[#0B1F3A]">
                  <Counter end={item.value} suffix={item.suffix} />
                </h3>

                <p className="text-slate-500 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
                Trusted Compliance Experts Since 25+ Years
              </h2>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                With changing statutory and HR regulations, businesses need
                reliable professionals to stay compliant and efficient.
              </p>

              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Our certified accountants, tax practitioners, and labour
                specialists ensure timely filings, proper records, and peace of
                mind.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#0B1F3A] rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>

              <div className="grid grid-cols-2 gap-4 text-blue-100">
                <p>Manufacturing</p>
                <p>Trading</p>
                <p>Distribution</p>
                <p>Retail Outlets</p>
                <p>Showrooms</p>
                <p>C & F Agencies</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SECURITY */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-[#0B1F3A] px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
              Security & Privacy
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Your Data Is Safe With Us
            </h2>

            <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
              We understand the importance of confidentiality in finance and HR.
              Every client document, record, and business detail is handled with
              the highest level of privacy and security.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6 mt-14"
            >
              {security.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FACILITIES */}

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              Infrastructure Excellence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              State of the Art Facilities at Your Service
            </h2>

            <p className="text-slate-500 mt-5 max-w-3xl mx-auto text-lg">
              A modern professional environment built for accuracy,
              confidentiality, collaboration, and efficient client service.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            >
              {facilities.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden"
                >
                  {/* top glow bar */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* big number */}
                  <div className="absolute top-5 right-6 text-5xl font-bold text-slate-100">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* icon circle */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold mb-6">
                    ✦
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-bold text-[#0B1F3A] relative z-10">
                    {item}
                  </h3>

                  {/* desc */}
                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Designed to deliver professional efficiency, comfort,
                    privacy, and dependable client support.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-28 bg-gradient-to-b from-white to-slate-50 px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              Professional Services Tailored For Growth
            </h2>

            <p className="text-slate-500 mt-5 max-w-3xl mx-auto text-lg">
              Reliable financial, tax, compliance, and advisory solutions
              designed to support modern businesses with confidence.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            >
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden"
                >
                  {/* top accent */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* number */}
                  <div className="text-5xl font-bold text-slate-100 absolute right-6 top-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* icon circle */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl font-bold mb-6">
                    ✓
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-bold text-[#0B1F3A] relative z-10">
                    {item}
                  </h3>

                  {/* desc */}
                  <p className="text-slate-500 mt-3 leading-relaxed">
                    Trusted professional support delivered with accuracy,
                    compliance, and business-focused strategy.
                  </p>
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
          className="py-24 px-6 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              Trusted Brands
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              Partners Who Trust Us
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Proudly serving respected organizations across multiple
              industries.
            </p>

            <div className="relative mt-16">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-6 w-max"
              >
                {[...clients, ...clients].map((client, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, scale: 1.04 }}
                    className="min-w-[260px] bg-slate-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
                  >
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      src={client.img}
                      alt={client.name}
                      className="h-16 mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                    />

                    <p className="mt-5 text-sm font-medium text-slate-600">
                      {client.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6"
        >
          <div className="max-w-7xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experienced, To Ensure Your Ascend!
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
              Let our experts handle accounting, taxation, HR, and compliance
              while you focus on growth.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </div>

      <Foot />
    </>
  );
}

export default Landingpage;
