import Foot from "../components/Foot";
import Head from "../components/Head";
import aboutImg from "../assets/aboutimg.jpg";
import certImg from "../assets/certficate.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      desc: "Handled monthly compliance return f ilings, including ESA, PF, and annual returns",
    },
  ];

  return (
    <>
      <Head />

      <div className="bg-slate-50 overflow-x-hidden">
        {/* HERO */}
        <section className="pt-28 pb-20 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[5px] text-blue-600 text-sm font-semibold"
          >
            About Ticks N Lines LLP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#0B1F3A] mt-4"
          >
            Your Personalised
            <br />
            Accounting Professionals
          </motion.h1>

          <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
            Delivering professional accounting, taxation, HR, and statutory
            compliance solutions with a personalized approach for every client.
          </p>
        </section>

        {/* COMPANY STORY */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <motion.img
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              src={aboutImg}
              alt="About Ticks N Lines LLP"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
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

              <p className="text-slate-600 text-lg leading-relaxed">
                We believe our success depends entirely on the success of our
                clients.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-2xl p-5 shadow-md">
                  <h3 className="text-3xl font-bold text-[#0B1F3A]">25+</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Years of Excellence
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-md">
                  <h3 className="text-3xl font-bold text-[#0B1F3A]">500+</h3>
                  <p className="text-slate-500 text-sm mt-1">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
                Our Core Strengths
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-slate-50 rounded-2xl p-8 shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SUN DIAGRAM */}
        <section className="py-24 bg-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[4px] text-emerald-600 text-sm font-semibold">
                What We Do
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-3">
                Accounting Services
              </h2>

              <p className="mt-4 text-slate-500">
                Smart finance solutions built for growing businesses.
              </p>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-[760px] h-[760px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 55,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300"
                />

                <div className="absolute left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 shadow-[0_0_70px_rgba(16,185,129,0.45)] flex items-center justify-center text-center px-5 z-20">
                  <div>
                    <p className="uppercase tracking-widest text-emerald-100 text-xs">
                      Core
                    </p>

                    <h3 className="text-white font-bold text-2xl mt-2 leading-tight">
                      Finance Hub
                    </h3>
                  </div>
                </div>

                {[
                  { title: "Accounts & Book Keeping", angle: 270 },
                  { title: "GST Filing & Returns", angle: 330 },
                  { title: "PAN Card", angle: 30 },
                  { title: "Internal Audits", angle: 90 },
                  { title: "IT Returns", angle: 150 },
                  { title: "Document Storage", angle: 210 },
                ].map((item, i) => {
                  const radius = 290;
                  const size = 150;

                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      transition={{ delay: i * 0.08, duration: 0.45 }}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        marginLeft: `${x - size / 2}px`,
                        marginTop: `${y - size / 2}px`,
                      }}
                    >
                      <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl border border-emerald-300 flex items-center justify-center text-center px-4 font-semibold leading-tight">
                        {item.title}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden grid gap-4 mt-10">
              {[
                "Accounts & Book Keeping",
                "GST Filing & Returns",
                "PAN Card",
                "Internal Audits",
                "IT Returns",
                "Document Storage",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-md border border-emerald-100 text-center font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 px-6">
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
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-4 text-white text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
                Our Approach
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
                How We Work
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 shadow-md">
                  <p className="text-blue-600 font-bold text-2xl">{item.no}</p>

                  <h3 className="text-2xl font-bold text-[#0B1F3A] mt-3 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
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

              <p className="text-slate-600 text-lg leading-relaxed mt-5">
                We continue to evolve with modern systems and updated regulatory
                knowledge to serve businesses better.
              </p>
            </div>

            <img
              src={certImg}
              alt="Certificate"
              className="w-full h-[500px] object-contain rounded-3xl shadow-xl bg-white p-6"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Simplify Your Business?
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
              Let our experts manage accounting, taxation, HR, and compliance
              while you focus on growth.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Get Consultation
            </Link>
          </div>
        </section>
      </div>

      <Foot />
    </>
  );
}

export default About;
